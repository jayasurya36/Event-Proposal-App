const signingRoutes = require("../controllers/signing.controller");
const router = require('express').Router();


router.post('/vendor/register' , signingRoutes.vendorRegister);
router.post('/user/register' , signingRoutes.userRegister);


module.exports = router;