import CBFlow from './CBFlow'

try {
    if (window) {
        if (navigator.product == 'ReactNative') {
            // for react native turn node and native flags to true
            CBFlow._isNode = true
            CBFlow._isNative = true
        } else {
            // if window is found then node is false
            CBFlow._isNode = false
        }
    }
} catch (e) {
    // if window is not found , then turn node flag to true
    CBFlow._isNode = true
}

//import all js files
require('./Component')
require('./ProcessInput')
require('./ProcessOutput')
require('./InPort')
require('./OutPort')
require('./Socket')

try {
    window.CBFlow = CBFlow
} catch (e) {}
module.exports = CBFlow
