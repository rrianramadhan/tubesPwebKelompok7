//CONTROLLERS
const Product = require('../models/product');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();


module.exports.getIndexProduct = (req, res) => {
  // jwt.verify(req.token, process.env.SECRETKEY, (error, authData)=>{
  // 	if(error){
  // 		res.sendStatus(403);
  // 	}else{
  // 		res.json({
  // 			message: 'OK',
  // 			authData: authData
  // 		})
  // 	}
  // })

    Product.findAll()
    .then((product)=>{
      res.json(product);
    }).catch((error)=>{
      throw error;
    })  

}
module.exports.postIndexProduct = (req, res) => {
		Product.create({
			tittle: req.body.tittle,
      author: req.body.author,
      about: req.body.about,
			price: req.body.price
		}).then((product)=>{
			res.json(product);
		}).catch((error)=>{
			throw error;
		})	
}