const router = require('express').Router();
const multer = require('../middlewares/multer')
const {getAllProposals , createProposal , editProposal , deleteProposal , getUserSelectedProposals ,vendorProposals, getSingleProposal} = require('../controllers/proposal.controller')
const  {vendorAuthentication , userAuthentication} = require('../middlewares/authentication')

router.post('/proposal' , vendorAuthentication ,multer.array('images') , createProposal);
router.get('/proposals', userAuthentication  , getAllProposals);
router.put('/:id' , multer.array("images"),editProposal);
router.delete('/:id' , deleteProposal);
router.get('/selected/:id' , getUserSelectedProposals);
router.get('/proposal/vendor/:id' ,vendorProposals );
router.get('/proposal/:id' , getSingleProposal)
module.exports = router