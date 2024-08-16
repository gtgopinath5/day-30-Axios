import React, { useEffect, useState } from 'react';
import { Form, Button, Checkbox, Label } from 'semantic-ui-react';
import { API_URL } from '../Constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Update() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const updateUser = async () => {
    await axios.put(`${API_URL}/${id}`, { firstName, lastName, checked });
    navigate('/read');
  };

  useEffect(() => {
    setFirstName(localStorage.getItem('firstName') || '');
    setLastName(localStorage.getItem('lastName') || '');
    setChecked(localStorage.getItem('checked') === 'true');
    setId(localStorage.getItem('id') || '');
  }, []);

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
    <Button onClick={updateUser}>Submit</Button>
  </Form>
  );
}

export default Update;
