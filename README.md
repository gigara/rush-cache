# Rush cache action
This action allows caching rush and pnpm dependencies to improve workflow execution time.
This action caches pnpm-store and rush installation directories. If you need to save your build-cache with GitHub action caches, you may use [rush-github-action-build-cache-plugin](https://www.npmjs.com/package/@gigara/rush-github-action-build-cache-plugin) in your rush project.
## Inputs
- pnpm `string` - pnpm version. This will use [pnpm/action-setup@v2](https://github.com/marketplace/actions/setup-pnpm) to set up pnpm. This step will not run if not defined. Default: Disabled
- node `string` - node version. This will use [actions/setup-node@v3](https://github.com/marketplace/actions/setup-node-js-environment) to setup node. This step will not run if not defined. Default: Disabled
- cache-rush `boolean` - Enable rush cache. Default: `true`
- cache-rush-dir `list of directories` - rush cache directories. Default `common/temp/install-run` & `~/.rush `
- cache-pnpm `boolean` - Enable pnpm cache. Default: `true`
- cache-pnpm-dir `list of directories` - pnpm cache directories. Default: `common/temp/pnpm-store` & `~/.cache/Cypress`
- set-env `boolean` - Set `ACTIONS_CACHE_URL` & `ACTIONS_RUNTIME_TOKEN` envs. You may need to enable this if you are using [rush-github-action-build-cache-plugin](https://www.npmjs.com/package/@gigara/rush-github-action-build-cache-plugin) in your project. Default: `false`
- rush-install `boolean` - This will run `rush install` command if enabled. Default: `false`

## Usage
Example 1:
```
- name: Restore cache
  uses: gigara/rush-cache@v1
```
Example 2:
```
- name: Restore cache
  uses: gigara/rush-cache@v1
  with:
    pnpm: 7.26.3
    node: 16.x
    set-env: true
    rush-install: true
```
