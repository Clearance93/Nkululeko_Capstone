
var mongoose = require('mongoose');


var productSchema = new mongoose.Schema({
    product_name: String,
    product_desc: String,
    product_price: String,
    product_image: String,
    product_quantity: Number,
    uploaded_on: {
        type: Date,
        dwfault: Date.now
    }
})


module.exports = mongoose.model("Products", productSchema);