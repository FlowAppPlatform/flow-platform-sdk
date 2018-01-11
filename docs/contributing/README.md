# Contributing

- Install [Git](https://git-scm.com)
- Install [Node and NPM](https://nodejs.org/)
- Fork and clone the repo. 
- Install NPM modules. `npm install`
- Install CodeCov and Istanbul `npm install -g istanbul codecov` for test coverage.
- Build the SDK `npm run-script build`
- Run all the tests `npm run-script test`. If any tests fail. Please raise an [issue](/issues).

## Pull Request

- Please make sure you pass all the tests before you send the pull request. 
- Please send pull requests to `master` branch. 
- Your PR should be merged within 2 business days. If we have any feedback / changes. We will let you know. Thank you for contributing to Flow SDK. 

## Branch
- `master` branch is where all the pull requests are merged. Its an active development branch. 
- `release` branch is a stable release of the SDK. `master` is merged to release to make a stable release. 

## Scripts

- `npm run-script build` builds the SDK. You can find the built library at `/dist/index.js`. 
- `npm run-script test` builds the library, build the tests at `test/dist/index.js`,  and runs all the tests.
- `npm run-script debug-test` builds the library, build the tests at `test/dist/index.js`,  and runs all the tests in debug mode. 
    - Before you run tests in debug mode. Install Chrome Browser, and Node Inspector `npm install -g node-inspector`. `node-inspector`. It should run on the port 5858 in Chrome. 
    - Then run `npm run-script debug-test`
