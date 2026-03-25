const express = require('express');
const router = express.Router();
const { addProduct, productAdded, getProducts } = require('../controllers/product');
const multer = require('multer')
const path = require('path');
const { checkForAuthCookie, checkAdminLogin, checkIsLoggedIn } = require('../middlewares/authentication');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(`./public/uploads/`))
    },
    filename: function (req, file, cb) {
      const fileName = `${Date.now()}-${file.originalname}`
      cb(null, fileName)
    }
  })

const upload = multer({ storage })


router.get('/',checkAdminLogin('token_admin'), addProduct);

router.post('/', upload.single("photo"), productAdded)

router.get('/getProduct',checkIsLoggedIn("token"),getProducts)



module.exports = router; 