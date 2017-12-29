import EventEmitter from 'events'

class Util {

	static validate(value, type) {

		//validate for URL.
		if(type === "url" && this.validate(value,"string")){
			var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
			
			if (!re.test(value)) { 
				return false;
			}

			return true;
		}

		if (value === undefined || value === null || value === '') return false
		
		if (type && type != 'any') {
			if (typeof value != type) return false
		}

		return true;
	}

	static generateId() {
		var id = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (var i = 0; i < 12; i++) {
			id = id + possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return id;
	}
}

var exports = module.exports = Util;