var exports = module.exports = {};

exports.validate = function (value, type) {
	if (value === undefined || value === null || value === '') return false
	if (type && type != 'any') {
		if (typeof value != type) return false
	}
	return true
};

exports.generateId = function () {
	var id = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 0; i < 8; i++) {
		id = id + possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return id;
};