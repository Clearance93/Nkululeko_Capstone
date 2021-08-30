
var mongoose = require('mongoose');


var featuredSchema = new mongoose.Schema({
    product_name: String,
    product_desc: String,
    product_price: Number,
    product_image: String,
    product_quantity: Number,
    uploaded_at: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Featured", featuredSchema);