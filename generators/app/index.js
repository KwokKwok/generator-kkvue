const fs = require("fs");
const yosay = require('yosay');
const chalk = require("chalk");
const _ = require('lodash');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.argument("appname", { type: String, required: true });
    this.options.appname = _.kebabCase(this.options.appname);
  }
  _sleep(ms) {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, ms);
    })
  }
  async _confirm(msg, defaultResult = true) {
    return (await this.prompt({
      type: "confirm",
      name: "result",
      message: msg,
      default: defaultResult
    })).result;
  }
  _yosay(msg, color = "yellowBright") {
    this.log(yosay(chalk[color](msg)));
  }
  welcome() {
    this._yosay("欢迎来到新项目~")
  }
  async ensureBaseDir() {
    let baseDir = this.destinationPath(this.options.appname);
    if (fs.existsSync(baseDir)) {
      if (await this._confirm(`项目文件夹 ${this.options.appname} 已存在，是否删除？`)) {
        fs.rmdirSync(baseDir, { recursive: true }, (err) => {
          if (err) {
            this.log(err);
            process.exit();
          }
        })
      } else {
        process.exit();
      }
    }

    await this._sleep(100);
    mkdirp(this.options.appname);
    this.destinationRoot(baseDir);
  }

  async collectProps() {
    const prompts = [
      {
        type: "input",
        name: "projectName",
        message: "项目名称",
        default: this.options.appname
      },
      {
        type: "input",
        name: "projectName",
        message: "项目名称",
        default: "app"
      },
      {
        type: "input",
        name: "prodApi",
        message: "线上API地址",
        default: "https://api.kwok.ink"
      },
      {
        type: "input",
        name: "devApi",
        message: "本地调试API地址",
        default: "http://localhost:5000"
      },
      {
        type: "input",
        name: "wsPort",
        message: "Webserver端口",
        default: 8080
      }
    ];

    this.props = await this.prompt(prompts);
    this.props.appName = this.options.appname;
    this._yosay("安装依赖，请稍候...");
  }

  copy() {
    this.fs.copy(this.templatePath("copy"), this.destinationPath());
  }

  async copyTpl() {
    let tpls = [".env.development", ".env.production", "package.json", "README.md"];
    tpls.forEach(tplPath => {
      this.fs.copyTpl(this.templatePath(`copyTpl/${tplPath}`), this.destinationPath(tplPath), this.props);
    })

  }

  async installDependencies() {
    this.log()
    this.yarnInstall();
    this.log();
  }

  async end() {
    this._yosay(`cd ${this.options.appname}
    yarn serve`)
    if (await this._confirm("是否直接在VS Code中打开项目目录")) {
      this.spawnCommand(`code ${this.destinationPath()}`)
    }
  }
};
