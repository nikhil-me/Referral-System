var mongoose = require("mongoose"),
	Schema = mongoose.Schema;



var customerSchema = mongoose.Schema({
		name : String,
		emailId : {type:String, unique:true, required:true,dropDups:true},
		orderId : String,
		codeId : String
});


module.exports = function(){
	// Return the Customer Model
	return mongoose.model('customer', customerSchema);
}();