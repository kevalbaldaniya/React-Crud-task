import React, { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [pwd, setPwd] = useState("");
  const [address, setAddress] = useState("");
  const [formData, setFormData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  const handleSubmit = () => {
    if (editIndex !== null) {
      const updatedData = [...formData];
      updatedData[editIndex] = { name, email, mob, pwd, address };
      setFormData(updatedData);
      setEditIndex(null); 
    } else {
      const newData = { name, email, mob, pwd, address };
      setFormData([...formData, newData]);
    }
    setName("");
    setEmail("");
    setMob("");
    setPwd("");
    setAddress("");
    
  }

  const handleEdit = (index) => {
    const selectedData = formData[index];
    setName(selectedData.name);
    setEmail(selectedData.email);
    setMob(selectedData.mob);
    setPwd(selectedData.pwd);
    setAddress(selectedData.address);
    setEditIndex(index);
  }

  const handleDelete = (index) => {
    const newData = [...formData];
    newData.splice(index, 1);
    setFormData(newData);
  }

  return (
    <div style={cardStyle}>
      <div style={containerStyle}>
        <h1>CRUD Operation</h1>
        <div style={formContainerStyle}>
          <div>
            Name:<input type='text' name="name" placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)} /><br />
            Email:<input type='text' name="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            Mobile No:<input type='text' name="mob" placeholder='Enter mobile' value={mob} onChange={(e) => setMob(e.target.value)} /><br />
            Password:<input type='text' name="pwd" placeholder="Enter password" value={pwd} onChange={(e) => setPwd(e.target.value)} /><br />
            Address:<input type='text' name="address" placeholder='Enter address' value={address} onChange={(e) => setAddress(e.target.value)} /><br />
            <button onClick={handleSubmit}>{editIndex !== null ? 'Update' : 'Submit'}</button>
          </div>
        </div>
        <h2>Submitted Data</h2>
        <table style={tableStyle} border={1}>
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Password</th>
              <th>Address</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mob}</td>
                <td>{data.pwd}</td>
                <td>{data.address}</td>
                <td><button style={editButtonStyle} onClick={() => handleEdit(index)}>Edit</button></td>
                <td><button style={deleteButtonStyle} onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  width: 'fit-content',
  margin: 'auto',
  marginTop: '50px',
  padding: '20px',

}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const formContainerStyle = {
  width: '400px',
  marginBottom: '20px',
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
}

const editButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
}

const deleteButtonStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
}
