import './CreateEvent.css';
import { useState } from 'react';
import { Link } from 'react-router-dom'

import { GiPartyPopper } from 'react-icons/gi'
import { BsFillPersonFill, BsCameraFill } from 'react-icons/bs'
import { GoCalendar } from 'react-icons/go'
import { FaFlagCheckered, FaMapPin } from 'react-icons/fa'


const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    return (
      <div className='uploadImg'>
        {selectedImage && (
          <div>
          <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
          <br />
          <button onClick={()=>setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <br />
       
        <br /> 
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </div>
    );
  };
  

function CreateEvent() {
    const [inputs, setInputs] = useState({});

    const handleChange= (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className="createEvent">
      <h1>Create your event</h1>
      <form onSubmit={handleSubmit}>
        <label>
            <BsCameraFill/> Choose a photo
            <UploadAndDisplayImage/>
        </label>
        <br/>
        <label>
            <GiPartyPopper/> Event name
            <input 
            type="text" 
            name="eventname" 
            value={inputs.eventname || ""}
            onChange={handleChange}
            />
        </label>
        <br/>
        <label>
            <BsFillPersonFill/> Host
            <input type="text"
             name="hostname"
             value={inputs.hostname || ""}
             onChange={handleChange}
             />
        </label>
        <br/>
        <label>
            <GoCalendar/> Start time
           <input type="datetime-local"
            name="start"
            value={inputs.start || ""}
            onChange={handleChange}
             />
        </label>
        <br/>
        <label>
            <FaFlagCheckered/> End time 
            <input type="datetime-local" 
            name="end"
            value={inputs.end || ""}
            onChange={handleChange}
             />
        </label>
        <br/>
        <label>
            <FaMapPin/> Location
            <input type="text" 
            name="location"
            value={inputs.location || ""}
            onChange={handleChange}
            />
        </label>
        <br/>
        <Link to='/event'>
        <input type="submit" value="Next" />
        </Link>
      </form>
    </div>
  );
}

export default CreateEvent;