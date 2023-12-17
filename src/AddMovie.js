import React, { useState } from 'react'
import {Modal,Button,Form,Col,Row} from 'react-bootstrap'
// Add movie 
const AddMovie = ({show,handleClose,AddMovie}) => {
  const[newMovie,setNewMovie] =useState ({
    Title:'',
    genre : '' ,
    description : '',
    main_img : '',
  })
  const handlechange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value})
  }
  return (
    <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="email" placeholder="Enter Title" onChange={handleClose} name='title' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="image" placeholder="image URL" onChange={handleClose} name='main_img'/>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1" onChange={handleClose} name='description'>
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="text" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group> */}

      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group> */}

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Genre</Form.Label>
          <Form.Select defaultValue="Choose genre" onChange={handleClose} name='genre'>
            <option> Fantasy </option>
            <option> Action </option>
            <option> Anime </option> 

          </Form.Select>
        </Form.Group>

        {/* <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row> */}

      {/* <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {AddMovie (newMovie);handleClose()}}>
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie
