import React, { useState } from 'react';
import { createProposal } from '../../utils/utils.api';
import close from '../../Images/close.svg'
import { useAppContext } from '../../contexts/ContextProvider';



function Createproposal({ setCreate }) {


  const [eventName, setName] = useState('');
  const [eventPlace, setPlaceOfEvent] = useState('');
  const [proposaltype, setProposalType] = useState('');
  const [eventType, setEventType] = useState('');
  const [budget, setBudget] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [foodPreferences, setFoodPreferences] = useState('');
  const [events, setEvents] = useState('');
  const { userDetails, editDetails, setEditDetails } = useAppContext();


  if (editDetails.length > 0) {
    console.log(editDetails);
    setName(editDetails.eventName)
    setPlaceOfEvent(editDetails.eventPlace)
    setProposalType(editDetails.proposaltype)
    setEventType(editDetails.eventType)
    setBudget(editDetails.budget)
    setFrom(editDetails.from)
    setTo(editDetails.to)
    setDescription(editDetails.description)
    setImages(editDetails.images)
    setPreviewImages(editDetails.previewImages)
    setEvents(editDetails.events)
    setFoodPreferences(editDetails.foodPreferences)
  }

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
  const handleFoodPreferencesChange = (e) => {
    setFoodPreferences(e.target.value);
  };
  const handleEventsChange = (e) => {
    setEvents(e.target.value);
  };
  function setPreview(files) {
    setImages("");
    for (let i = 0; i < files.length; i++) {
      let url = URL.createObjectURL(files[i]);
      setPreviewImages(arr => ([...arr, url]));
      setImages(arr => ([...arr, files[i]]));
    }
  }
  function submitProposal(e) {
    e.preventDefault();
    console.log(images);
    let newProposal = new FormData();
    newProposal.append("eventName", eventName);
    newProposal.append("eventPlace", eventPlace);
    newProposal.append("proposaltype", proposaltype);
    newProposal.append("eventType", eventType);
    newProposal.append("budget", budget);
    newProposal.append("from", from);
    newProposal.append("to", to);
    newProposal.append("description", description);
    newProposal.append("images", images);
    newProposal.append("foodPreferences", foodPreferences);
    newProposal.append("events", events);
    newProposal.append("vendorId", userDetails.user._id)
    console.log(newProposal);
    createProposal(newProposal).then(res => {
      console.log(res);
    })
  }
  return (
    <form onSubmit={submitProposal} encType="multipart/form-data">
      <div className='createProposal'>
        <div className='titleContainer'>
          <h2>Create proposal</h2>
          <img src={close} alt='close'
            onClick={() => {
              setEditDetails([]);
              setCreate(false);
            }}
          />
        </div>
        <div className='contentContainer'>

          <div className='leftContainer'>
            <div className='fieldContainer'>
              <label>Event Name</label>
              <input placeholder='Name' type='text' required onChange={(e) => handleNameChange(e)} value={eventName} />
            </div>
            <div className='leftRowContainer'>
              <div className='fieldContainer'>
                <label htmlFor="place">Place of Event</label>
                <select id="place" name="placeOfEvent" value={eventPlace} onChange={(e) => {
                  handlePlaceOfEventChange(e)
                }}>
                  <option value={"Select"} >Select</option>
                  <option value={"Tamilnadu"} >Tamilnadu</option>
                  <option value={"Bengaluru"} >Bengaluru</option>
                  <option value={"Hydrabad"} >Hydrabad</option>
                  <option value={"Kerala"} >Kerala</option>
                </select>
              </div>
              <div className='fieldContainer'>
                <label htmlFor="proposalType">Proposal Type</label>
                <select id="proposalType" name="proposalType" value={proposaltype} onChange={(e) => {
                  handleProposalTypeChange(e)
                }}>
                  <option value={"Select"} >Select</option>
                  <option value={"Formal"} >Formal</option>
                  <option value={"In-Formal"} >In-Formal</option>
                  <option value={"Internal"} >Internal</option>
                  <option value={"External"} >External</option>
                </select>
              </div>
              <div className='fieldContainer'>
                <label htmlFor="eventType">Event Type</label>
                <select id="eventType" name="eventType" value={eventType} onChange={(e) => {
                  handleEventTypeChange(e)
                }}>
                  <option value={"Select"} >Select</option>
                  <option value={"Wedding"} >Wedding</option>
                  <option value={"Birthday"} >Birthday</option>
                  <option value={"Reception"} >Reception</option>
                  <option value={"Charity"} >Charity</option>
                  <option value={"Party"} >Party</option>
                  <option value={"Product launch"} >Product launch</option>
                </select>
              </div>
              <div className='fieldContainer'>
                <label>Budget</label>
                <input placeholder='Budget' id='budgetInput' type='text' required onChange={(e) => handleBudgetChange(e)} value={budget} />
              </div>
              <div className='fieldContainer'>
                <label>From</label>
                <input type='date' required onChange={(e) => handleFromChange(e)} value={from} />
              </div>
              <div className='fieldContainer'>
                <label>To</label>
                <input type='date' required onChange={(e) => handleToChange(e)} value={to} />
              </div>
            </div>
            <div>
              <div className='fieldContainer'>
                <label>Description</label>
                <input placeholder='Description' id='decpInput' type='text' required onChange={(e) => handleDescriptionChange(e)} value={description} />
              </div>
            </div>
          </div>
          <div className='line'></div>
          <div className='rightContainer'>
            <div className="img-field">
              <div className="label-field">
                <label>Images</label>
                <input type="file" id="img-file" filename="images" multiple="multiple" onChange={(e) => setPreview(e.target.files)} />
                <label id="img-btn" htmlFor="img-file" >Add</label>
              </div>
              <div className="img-grid">
                <div className="img-container"><img src={previewImages[0]} alt="" /></div>
                <div className="img-container"><img src={previewImages[1]} alt="" /></div>
                <div className="img-container"><img src={previewImages[2]} alt="" /></div>
                <div className="img-container"><img src={previewImages[3]} alt="" /></div>
                <div className="img-container"><img src={previewImages[4]} alt="" /></div>
                <div className="img-container"><img src={previewImages[5]} alt="" /></div>
                <div className="img-container"><img src={previewImages[6]} alt="" /></div>
                <div className="img-container"><img src={previewImages[7]} alt="" /></div>
                <div className="img-container"><img src={previewImages[8]} alt="" /></div>
                <div className="img-container"><img src={previewImages[9]} alt="" /></div>
              </div>
            </div>
            <div className='foodContainer'>
              <label>Food Preferences</label>
              <input placeholder='Food preferences' onChange={(e) => handleFoodPreferencesChange(e)} type='text' value={foodPreferences} />
            </div>
            <div className='EventContianer'>
              <label>Events</label>
              <input placeholder='Food preferences' onChange={(e) => handleEventsChange(e)} type='text' value={events} />
            </div>
          </div>
        </div>
        <hr />
        <div className='buttonContainer'>
          <button className='submitButton'
            type='submit'
          >Add</button>
        </div>
      </div>
    </form>
  )


};


export default Createproposal