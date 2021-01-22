import { reactive } from 'vue';
import Repo from './Repo';

const repo = reactive(new Repo());
export default {
    install: (app, options) => {
        app.config.globalProperties.$repo = repo;
    }
}
