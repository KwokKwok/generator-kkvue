export default class Token {
  private static KEY = 'token'

  public static get(): string {
    return localStorage.getItem(this.KEY) ?? "";
  }

  public static set(v: string) {
    localStorage.setItem(this.KEY, v);
  }
  static remove() {
    localStorage.removeItem(this.KEY);
  }
}