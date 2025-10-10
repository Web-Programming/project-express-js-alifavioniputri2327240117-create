const mongoose = require("mongoose");

//buat skema produk
const ProductSchema = new mongoose.Schema({
    //tidak perlu membuat properti id karena akan dibuat otomatis
    //dengan nama_id
    nama: {
        type: "String",
        require: [true, "nama produk harus diisi"],
        trim: true,
    },
    price: {
        type: Number,
        require: [true, "harga produk harus diisi"],
        min:[1000, "harga produk minimal 1000"]
    },
    description:{
        type: String,
        require: false, // menentukan kolom yang wajib diisi atau tidak
    },
    stock: {
        type: Number,
        default: 0,
    },
    createdate: {
        type: Number,
        default: Number,
    },
});

// buat model dari schema
const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;