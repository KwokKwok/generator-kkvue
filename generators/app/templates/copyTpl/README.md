# <%= projectName %>

## Command

```
yarn serve
yarn build
```

## 关于本模板

1. 使用`vue create ${name}`创建。（*dart-sass, babel, typescript, router*）
1. 删除`shims-tsx.d.ts`（*因为不打算使用TSX*）
1. 使用Repo
    1. `index.ts`不用动
    1. 修改`Repo.ts`来记录需要保存的数据
    1. 修改`vue.d.ts`
    1. 在`main.ts`执行以下语句
        ```js
        import repo from "./repo"
        Vue.prototype.$repo = repo;
        ```
    1. 如果在vue文件中无法正常访问`this.$repo`，尝试重启VSCode
1. 修改`package.json`，修改`serve`指令为`vue-cli-service serve --open --port 8080`
1. 增加配置文件，主要使用`VUE_APP_BASE_URL`这一配置
1. 增加`utils`文件夹
    1. 增加`Token`类，有`set`、`get`、`remove`方法，用于Cookie操作登录凭据
    1. 增加`Http`类，需要安装`axios`
1. 添加`Lato`字体到`assets`文件夹，并在`App.vue`中导入
1. 修改`App.vue`，修改基础样式。
1. 修改`HelloWorld.vue`、`Home.vue`，调整内容和样式
1. 删除`About.vue`，修改`router/index.ts`


