import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import { Form, Button, Checkbox, Label } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const postData = async () => {
    try {
      await axios.post(API_URL, { firstName, lastName, checked });
      navigate('/read');  
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Form className='form'>
      <Form.Field>
        <Label>First Name</Label>
        <input 
          value={firstName} 
          onChange={(event) => setFirstName(event.target.value)} 
          placeholder='Enter First Name' 
        />
      </Form.Field>
      <Form.Field>
        <Label>Last Name</Label>
        <input 
          value={lastName} 
          onChange={(event) => setLastName(event.target.value)} 
          placeholder='Enter Last Name' 
        />
      </Form.Field>
      <div className='checkbox-container'>
        <Checkbox 
          checked={checked} 
          onChange={() => setChecked(!checked)} 
        />
        <Label>Agree to the Terms & Conditions</Label>
      </div>
      <Button onClick={postData}>Submit</Button>
    </Form>
  );
}

export default Create;

