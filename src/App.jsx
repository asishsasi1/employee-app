
 import './App.css'
        import Button from 'react-bootstrap/Button';
 import Modal from 'react-bootstrap/Modal';
 import { useState } from 'react';
 import View from './components/View';
import Dropdown from 'react-bootstrap/Dropdown';

 function App() {
   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
   return (
     <>
     <div className="container">
<div className="Emp-management justify-content-center align-items-center mt-5">
         <h1  className='text-center text-danger'>Employee Management System</h1>
     <div className='d-flex justify-content-center mt-5 '> 
         <button onClick={handleShow} className='btn btn-info'>ADD EMPLOYE</button>
         </div>
        </div>
        <Modal
         show={show}
         onHide={handleClose}
        backdrop="static"
        keyboard={false}
       >
         <Modal.Header closeButton>
          <Modal.Title>EMPLOYE DETAILS</Modal.Title>
         </Modal.Header>
         <Modal.Body>
         
         <h4 className='text-info'>User Name</h4>
         <input type="text" />
         <h4 className='text-info mt-4'>Email Id</h4>
         <input type="text"  />

        <div className='mt-3'>
            <Dropdown>
         <Dropdown.Toggle variant="success" id="dropdown-basic">
           Employe Status
         </Dropdown.Toggle>
  
         <Dropdown.Menu>
           <Dropdown.Item href="#/action-1">Active</Dropdown.Item>
           <Dropdown.Item href="#/action-2">Inactive</Dropdown.Item>
          
         </Dropdown.Menu>
       </Dropdown>
        </div>

         </Modal.Body>
         <Modal.Footer>
           <Button variant="primary" onClick={handleClose}>
             Close
           </Button>
          <Button variant="info">Submit</Button>
        </Modal.Footer>
       </Modal>
       </div>
       <View/>
     </>
   
   )
 }

export default App
