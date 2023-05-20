import React, { useState } from 'react';


 function Createproposal(){
  const [name, setName] = useState('');
  const [placeofevent, setPlaceOfEvent] = useState('');
  const [proposaltype, setProposalType] = useState('');
  const [eventtype, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState('');
  const [foodpreferences, setFoodPreferences] = useState('');
  const [events, setEvents] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePlaceOfEventChange = (e) => {
    setPlaceOfEvent(e.target.value);
  };
  const handleProposalTypeChange = (e) => {
    setProposalType(e.target.value);
  };
  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
  };
  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };
  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };
  const handleToChange = (e) => {
    setTo(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleImagesChange = (e) => {
    setImages(e.target.value);
  };
  const handleFoodPreferencesChange = (e) => {
    setFoodPreferences(e.target.value);
  };
  const handleEventsChange = (e) => {
    setEvents(e.target.value);
  };


  return(
    <div>
        <div>
            <h2 className='main'>Create proposal</h2>
        </div>
        <section>
        <div className='container'>
            <div className='grid'>
            <div className='grid-item-1'>
                <div>
                    <label>Event Name</label>
                    <input type='text' placeholder='Name' value={name} onChange={handleNameChange}/>
                </div>
                <div>
                    <label>placeofevent</label>
                    <input type='text' placeholder='select' value={placeofevent} onChange={handlePlaceOfEventChange}/>
                    
                </div>
                <div>
                    <label>ProposalType</label>
                    <input type='text' placeholder='select' value={proposaltype} onChange={handleProposalTypeChange}/>

                </div>
                <div>
                    <label>Event Type</label>
                    <input type='text' placeholder='select' value={eventtype} onChange={handleEventTypeChange}/>
                    <select>
                        <option>value1</option>
                        <option>value2</option>
                        <option>value3</option>
                    </select>
                </div>
                <div>
                    <label>Budget</label>
                    <input type='number' placeholder='000000' value={budget} onChange={handleBudgetChange}/>
                </div>
                <div>
                    <label>From</label>
                    <input type='text' placeholder="MM/DD/YYYY"
                    onfocus="(this.type='date')" value={from} onChange={handleFromChange}/>
                </div>
                <div>
                    <label>To</label>
                    <input type='text' placeholder="MM/DD/YYYY"
                    onfocus="(this.type='date')" value={to} onChange={handleToChange}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type='text' placeholder='Description' value={description} onChange={handleDescriptionChange}/>
                </div>
                
           
           </div>
           <div className='grid-item-2'>
            <div>
                <label>Images</label>
                <input type='text' value={images}
                onChange={handleImagesChange} 
                 />  
                 <img src="" alt=""></img>
                 <button>ADD</button>
            </div>
            <div>
                <label>Food Preferences</label>
                <input type='text' value={foodpreferences}
                onChange={handleFoodPreferencesChange} 
                placeholder='preperences' />
                
            </div>
            <div>
                <label>Events</label>
                <input type='text' value={events}
                onChange={handleEventsChange} 
                placeholder='preperences' />
                
            </div>
   
           </div>
            </div>
        </div>
        </section>
        <button className='button'>Post</button>
    </div>
  )


 };


 export default Createproposal