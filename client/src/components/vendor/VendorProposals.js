import React, { useEffect, useState } from 'react'
import search from '../../Images/search.svg';
import { useAppContext } from '../../contexts/ContextProvider';
import { getVendorSpecificProposals } from '../../utils/utils.api';
import EachProposal from './EachProposal';
function VendorProposals() {
  const { userDetails } = useAppContext();
  const [proposals, setProposals] = useState([]);
  useEffect(() => {
    getVendorSpecificProposals(userDetails.user._id).then(res => {
      setProposals(res.data);
    })
  }, [])
  console.log(proposals)
  return <div className='proposalsHolder'>
    <span>Proposals</span>
    <img src={search} alt='Search' />
    <input placeholder='Search Projects' />
    <button>
      CREATE
    </button>
    <div>
      {
        proposals.length === 0 ? <div>No Proposals to Show</div> :
          proposals.map((data) => (
            <EachProposal vendorProposals={data} key={data._id} onDeleteFunc={(id)=>{
              setProposals(proposals => proposals.filter(data => data._id !== id))
            }}
            />
          ))
      }
    </div>
  </div>
}

export default VendorProposals