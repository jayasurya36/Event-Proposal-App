import React, { useEffect, useState } from 'react'
import partyImage from '../../Images/private-party-venues@2x.png'
import { getAllProposals } from '../../utils/utils.api';
import ProposalCard from './ProposalCard';
export default function AllProposals() {
  const[proposals , setProposals] = useState({data : []});
  useEffect( () =>{
    getAllProposals().then(data =>{
      setProposals(data);
    })
  } , [])
  console.log(proposals)
  return <div>
    <div className='bannerImage'>
      <img src={partyImage} alt='Banner'/>
    </div>
    <div>
      <span>Proposals</span>
      <div className='proposalsContainer'>
        {
          proposals.data.length === 0 ? <div>No Proposals Available</div>:
          proposals.data.map(data => (
            <ProposalCard data={data} key={data._id}/>
          ))
        }
      </div>
    </div>
  </div>
}
