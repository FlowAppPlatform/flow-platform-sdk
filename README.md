CloudBoost Flow: Flow-based programming for JavaScript 
========================================================
[![Build Status](https://travis-ci.org/CloudBoost/flow-sdk.svg?branch=master)](https://travis-ci.org/CloudBoost/flow-sdk)
[![codecov](https://codecov.io/gh/CloudBoost/flow-sdk/branch/master/graph/badge.svg)](https://codecov.io/gh/CloudBoost/flow-sdk)
[![npm version](https://badge.fury.io/js/cloudboost-flow.svg)](https://badge.fury.io/js/cloudboost-flow)

CloudBoost is an implementation of [flow-based programming](http://en.wikipedia.org/wiki/Flow-based_programming) for JavaScript running on both Node.js and the browser. From WikiPedia:

> In computer science, flow-based programming (FBP) is a programming paradigm that defines applications as networks of "black box" processes, which exchange data across predefined connections by message passing, where the connections are specified externally to the processes. These black box processes can be reconnected endlessly to form different applications without having to be changed internally. FBP is thus naturally component-oriented.

Developers used to the [Unix philosophy](http://en.wikipedia.org/wiki/Unix_philosophy) should be immediately familiar with FBP:

> This is the Unix philosophy: Write programs that do one thing and do it well. Write programs to work together. Write programs to handle text streams, because that is a universal interface.

It also fits well in Alan Kay's [original idea of object-oriented programming](http://userpage.fu-berlin.de/~ram/pub/pub_jf47ht81Ht/doc_kay_oop_en):

> I thought of objects being like biological cells and/or individual computers on a network, only able to communicate with messages (so messaging came at the very beginning -- it took a while to see how to do messaging in a programming language efficiently enough to be useful).

CloudBoost components can be written in JavaScript. The system is heavily inspired by [J. Paul Morrison's](http://www.jpaulmorrison.com/) book [Flow-Based Programming](http://www.jpaulmorrison.com/fbp/#More).


## Suitability

CloudBoost Flow is not a web framework or a UI toolkit. It is a way to coordinate and reorganize data flow in any JavaScript application. As such, it can be used for whatever purpose JavaScript can be used for. 


## Requirements and installing

CloudBoost Flow is available for Node.js [via NPM](https://npmjs.org/package/cloudboost-flow), so you can install it with:

```bash
$ npm install cloudboost-flow --save
```


### Installing from Git

CloudBoost Flow requires a reasonably recent version of [Node.js](http://nodejs.org/), and some [npm](http://npmjs.org/) packages. Ensure that you have CloudBoost Flow checked out from Git, and all NPM dependencies installed. Build and test CloudBoost Flow with:

```bash
$ npm test
```

CloudBoost Flow is available from [GitHub](https://github.com/cloudboost/flow-sdk) under the MIT license.


## Development

CloudBoost Flow development happens on GitHub. Just fork the [main repository](https://github.com/cloudboost/cloudboost), make modifications and send a pull request.

We have an extensive suite of tests available for CloudBoost Flow. Run them with:

```bash
$ npm test
```

## Docs

Please check out the documentation for the SDK [here.](/docs)

## Scripts

- `npm build` builds the SDK. You can find the built library at `/dist/index.js`. 
- `npm test` builds the library, build the tests at `test/dist/index.js`,  and runs all the tests.
- `npm debug-test` builds the library, build the tests at `test/dist/index.js`,  and runs all the tests in debug mode. 
    - Before you run tests in debug mode. Install Chrome Browser, and Node Inspector `npm install -g node-inspector`. `node-inspector`. It should run on the port 5858 in Chrome. 
    - Then run `npm debug-test`


