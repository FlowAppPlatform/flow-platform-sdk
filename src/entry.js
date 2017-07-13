///<reference path="./cloudboost.d.ts" />

import Component from './Component'

try {
    if (window) {
        if (navigator.product == 'ReactNative') {
            // for react native turn node and native flags to true
            Component._isNode = true
            Component._isNative = true
        } else {
            // if window is found then node is false
            Component._isNode = false
        }
    }
} catch (e) {
    // if window is not found , then turn node flag to true
    Component._isNode = true
}

require('./Component')

try {
    window.Component = Component
} catch (e) {}
module.exports = Component
