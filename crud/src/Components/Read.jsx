import React, { useState, useEffect } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { API_URL } from '../Constants/URL';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure to import the CSS file

function Read() {
  const [apiData, setApiData] = useState([]);
  const navigate = useNavigate();

  const updateUser = ({ firstName, lastName, checked, id }) => {
    localStorage.setItem('id', id);
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('checked', checked);
    navigate('/update');
  };

  const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    callGetAPI();
  };

  const callGetAPI = async () => {
    try {
      const resp = await axios.get(API_URL);
      setApiData(resp.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    callGetAPI();
  }, []);

  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name</Table.HeaderCell>
          <Table.HeaderCell>Checked</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
          <Table.HeaderCell>Update</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {apiData.map((data) => (
          <Table.Row key={data.id}>
            <Table.Cell>{data.firstName}</Table.Cell>
            <Table.Cell>{data.lastName}</Table.Cell>
            <Table.Cell>{data.checked ? 'checked' : 'not checked'}</Table.Cell>
            <Table.Cell>
              <Button className='delete-button' onClick={() => deleteUser(data.id)}>
                Delete
              </Button>
            </Table.Cell>
            <Table.Cell>
              <Button className='update-button' onClick={() => updateUser(data)}>
                Update
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}

export default Read;
