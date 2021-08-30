
var mongoose = require('mongoose');


var saleSchema = new mongoose.Schema({
    product_name: String,
    product_desc: String,
    product_normal_price: Number,
    product_sale_price: Number,
    product_quantity: Number,
    product_image: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Sale", saleSchema);