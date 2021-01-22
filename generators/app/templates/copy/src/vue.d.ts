import Repo from './repo/Repo';

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $repo: Repo;
    }
}
