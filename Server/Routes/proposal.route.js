const router = require('express').Router();
const multer = require('../middlewares/multer')
const {getAllProposals , createProposal} = require('../controllers/proposal.controller')
router.post('/proposal' , createProposal);
router.get('/proposals' , getAllProposals);

module.exports = router