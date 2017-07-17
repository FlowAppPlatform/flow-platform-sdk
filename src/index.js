import Flow from './Flow'

try {
    if (window) {
        if (navigator.product == 'ReactNative') {
            // for react native turn node and native flags to true
            Flow._isNode = true
            Flow._isNative = true
        } else {
            // if window is found then node is false
            Flow._isNode = false
        }
    }
} catch (e) {
    // if window is not found , then turn node flag to true
    Flow._isNode = true
}

//import all js files
require('./Component')
require('./ProcessInput')
require('./ProcessOutput')
require('./InPort')
require('./OutPort')
require('./Socket')

try {
    window.Flow = Flow
} catch (e) {}
module.exports = Flow
