const {vendorRegister , userRegister , vendorlogin , Userlogin , resetPasswordUser , resetPasswordVendor} = require("../controllers/signing.controller");
const router = require('express').Router();


router.post('/vendor/register' , vendorRegister);
router.post('/user/register' , userRegister);


router.post('/vendor/login' , vendorlogin);
router.post('/user/login' , Userlogin);

router.post('/vendor/reset' , resetPasswordVendor);
router.post('/user/reset' , resetPasswordUser);


module.exports = router;