import Vue from 'vue';
import { Repo } from './repo/Repo';

declare module 'vue/types/vue' {
    interface Vue {
        $repo: Repo
    }
}