const Product = require('../models/product');

const addProduct = (req,res)=>{
    res.render('addProduct');
}

const productAdded = async (req,res)=>{
    const { name, price, category } = req.body;

    const product = await Product.create({
        name,
        price,
        photo: `/uploads/${req.file.filename}`,
        category,
    })

    return res.render('addProduct',{ message: "Product added"})
}

const getProducts = async (req,res)=>{
    
       const product = await Product.find({});
       
       res.render('product_list',{ user: req.user, product })
      
}

module.exports = {
    addProduct,
    productAdded,
    getProducts,
}