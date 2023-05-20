import React, { useEffect, useState } from 'react'
import search from '../../Images/search.svg';
import { useAppContext } from '../../contexts/ContextProvider';
import { getVendorSpecificProposals } from '../../utils/utils.api';
import EachProposal from './EachProposal';
function VendorProposals() {
  const { userDetails } = useAppContext();
  const [proposals, setProposals] = useState({ data: [] });
  useEffect(() => {
    getVendorSpecificProposals(userDetails.user._id).then(res => {
      setProposals(res);
    })
  }, [])
  console.log(proposals);
  return <div className='proposalsHolder'>
    <span>Proposals</span>
    <img src={search} alt='Search' />
    <input placeholder='Search Projects' />
    <button>
      CREATE
    </button>
    <div>
      {
        proposals.data.length === 0 ? <div>No Proposals to Show</div> :
          proposals.data.map((data) => (
            <EachProposal vendorProposals={data} key={data._id} />
          ))
      }
    </div>
  </div>
}

export default VendorProposals