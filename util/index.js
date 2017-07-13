var exports = module.exports = {};

exports.validate = function (value,type){
	if(value === undefined || value === null || value === '') return false
	if(type && type != 'any'){
		if(typeof value != type) return false
	}
	return true
};

