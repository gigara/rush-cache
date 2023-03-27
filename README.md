# Rush cache action
This action allows [rush-github-action-build-cache-plugin](https://www.npmjs.com/package/@gigara/rush-github-action-build-cache-plugin) to save build-cache of your rush project with GitHub action caches.

## Usage
Example 1:
```
- name: Set cache env
  uses: gigara/rush-cache@v2
```

Since GitHub cache access is limited to the particular branch and the base branches you should add a GitHub action as below if you need to use cache in pull requests.
```
name: Save build cache when PR merged

on:
  push:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup
        uses: gigara/rush-cache@v2

      - uses: actions/setup-node@v3
        with:
          node-version: 16.x

      - uses: pnpm/action-setup@v2
        with:
          version: 7.26.3

      - name: Cache Rush
        uses: actions/cache@v2
        with:
          path: |
            common/temp/install-run
            ~/.rush 
          key: Rush-cache-${{ hashFiles('rush.json') }}

      - name: Cache pnpm
        uses: actions/cache@v3
        with:
          path: |
            common/temp/pnpm-store
            ~/.cache/Cypress   
          key: pnpm-cache-${{ runner.os }}-${{ hashFiles('**/pnpm-lock.yaml') }}

      - name: Build repo and save cache
        run: |
           node common/scripts/install-run-rush.js install  
           node common/scripts/install-run-rush.js build --verbose
```
