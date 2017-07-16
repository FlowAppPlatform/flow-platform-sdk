class CloudBoostFlow {
	constructor() {
		// to check if the env is node
		this._isNode = false
		// to check if env is native ( react native , native script etc. )
		this._isNative = false
		if (typeof (process) !== "undefined" &&
			process.versions &&
			process.versions.node) {
			this._isNode = true
		} else {
			this._isNode = false
		}
	}

}

let CBFlow = new CloudBoostFlow()

export default CBFlow