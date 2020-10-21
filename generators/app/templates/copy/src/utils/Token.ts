export default class Token {
    private static KEY = 'token'

    public static get(): string {
        var arr, reg = new RegExp("(^| )" + this.KEY + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else {
            return "";
        }
    }

    public static set(v: string) {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + (Days * 24 + 8) * 60 * 60 * 1000);
        document.cookie = this.KEY + "=" + escape(v) + ";expires=" + exp.toUTCString();
    }
    static remove() {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        document.cookie = this.KEY + "=" + escape("") + ";expires=" + exp.toUTCString();
    }
}