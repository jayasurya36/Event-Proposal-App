const {vendorRegister , userRegister} = require("../controllers/signing.controller");
const router = require('express').Router();


router.post('/vendor/register' , vendorRegister);
router.post('/user/register' , userRegister);


module.exports = router;