import React, { useEffect } from 'react'
import search from '../../Images/search.svg';
import { useAppContext } from '../../contexts/ContextProvider';
import { getVendorSpecificProposals } from '../../utils/utils.api';
function VendorProposals() {
  const {vendorProposals , setVendorProposals , userDetails} = useAppContext();
  useEffect(() =>{
    getVendorSpecificProposals(userDetails.user.id).then(res => {
      setVendorProposals(res);
    })
  } , [])
  console.log(vendorProposals);
  return <div className='proposalsHolder'>
    <span>Proposals</span>
    <img src={search} alt='Search'/>
    <input placeholder='Search Projects'/>
    <button>
      CREATE
    </button>
    <div>
      {

      }
    </div>
  </div>
}

export default VendorProposals