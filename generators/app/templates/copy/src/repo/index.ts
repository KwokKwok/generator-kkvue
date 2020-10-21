import Vue from 'vue';
import Repo from './Repo';

const repoVM = new Vue<Repo>({
    data: new Repo()
})
export default repoVM.$data;
