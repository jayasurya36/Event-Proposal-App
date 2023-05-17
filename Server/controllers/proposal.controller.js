const Proposals = require('../models/proposal.model');



//TO GET ALL PROPOSALS
const getAllProposals = async (req, res) => {
    try {
        let proposals = await Proposals.find();
        res.status(200).json({ status: "Success", data : proposals });
    } catch (err) {
        res.status(400).json({ status: "Failed", message: err.message });
    }
}


const createProposal = async(req , res) =>{
    try{
        console.log(req.body)
        res.send(req.body)
    }catch(err){
        res.send(err.message)
    }
}

module.exports = {getAllProposals , createProposal}