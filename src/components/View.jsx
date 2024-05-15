import React from 'react'
import Table from 'react-bootstrap/Table';

function View() {
  return (
    <div className='mt-5'>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>asish</td>
          <td>asishsasi0@gmail.com</td>
          <td>Active</td>
          <td><button className='btn btn-danger' >Delete</button></td>
          <td><button className='btn btn-success'>Update</button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>bibin</td>
          <td>bibin0@gmail.com</td>
          <td>Active</td>
          <td><button className='btn btn-danger' >Delete</button></td>
          <td><button className='btn btn-success'>Update</button></td>
        </tr>
      </tbody>
    </Table>
    </div>
  )

}

export default View
