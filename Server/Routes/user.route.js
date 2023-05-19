const {addSelectedList , delSelectedList,updateUserDp,deleteUserDp,updateVendorDp,deleteVendorDp} = require('../controllers/user.controller')
const router = require('express').Router();
const multer = require('../middlewares/multer')


router.post('/selected/:id' , addSelectedList);
router.delete('/selected/:id' ,delSelectedList );
router.put('/user/profilepic/:id' ,multer.single("profile_pic") ,updateUserDp);
router.delete('/user/profilepic/:id' , deleteUserDp)
router.put('/vendor/profilepic/:id',multer.single("profile_pic") , updateVendorDp);
router.delete('/vendor/profilepic/:id' , deleteVendorDp)
module.exports = router;