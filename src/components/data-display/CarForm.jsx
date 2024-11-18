import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Modal } from 'react-bootstrap'

export default function CarForm({ show, onSubmit, initialData, onCancel }) {
   const [formData, setFormData] = useState({
      brand: '',
      model: '',
      year: '',
      color: '',
      image: '',
      owner: {
         name: '',
         phone: '',
         email: '',
      },
   })

   useEffect(() => {
      if (initialData) {
         setFormData(initialData)
      }
   }, [initialData])

   const handleSubmit = e => {
      e.preventDefault()
      onSubmit(formData)
      setFormData({
         brand: '',
         model: '',
         year: '',
         color: '',
         image: '',
         owner: {
            name: '',
            phone: '',
            email: '',
         },
      })
   }

   const handleChange = e => {
      const { name, value } = e.target
      if (name.startsWith('owner.')) {
         const ownerField = name.split('.')[1]
         setFormData(prev => ({
            ...prev,
            owner: {
               ...prev.owner,
               [ownerField]: value,
            },
         }))
      } else {
         setFormData(prev => ({
            ...prev,
            [name]: value,
         }))
      }
   }

   return (
      <Modal show={show} onHide={onCancel} size='lg' centered>
         <Modal.Header closeButton>
            <Modal.Title>{initialData ? 'Edit Car' : 'Add New Car'}</Modal.Title>
         </Modal.Header>
         <Form onSubmit={handleSubmit}>
            <Modal.Body>
               <Row className='mb-3'>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Brand</Form.Label>
                        <Form.Control type='text' name='brand' value={formData.brand} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Model</Form.Label>
                        <Form.Control type='text' name='model' value={formData.model} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
               </Row>

               <Row className='mb-3'>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Year</Form.Label>
                        <Form.Control type='number' name='year' value={formData.year} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Color</Form.Label>
                        <Form.Control type='text' name='color' value={formData.color} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
               </Row>

               <Form.Group className='mb-3'>
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control type='url' name='image' value={formData.image} onChange={handleChange} required />
               </Form.Group>

               <Row className='mb-3'>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Owner Name</Form.Label>
                        <Form.Control type='text' name='owner.name' value={formData.owner.name} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
                  <Col md={6}>
                     <Form.Group className='mb-3'>
                        <Form.Label>Owner Phone</Form.Label>
                        <Form.Control type='tel' name='owner.phone' value={formData.owner.phone} onChange={handleChange} required />
                     </Form.Group>
                  </Col>
               </Row>

               <Form.Group className='mb-3'>
                  <Form.Label>Owner Email</Form.Label>
                  <Form.Control type='email' name='owner.email' value={formData.owner.email} onChange={handleChange} required />
               </Form.Group>
            </Modal.Body>
            <Modal.Footer>
               <Button variant='secondary' onClick={onCancel}>
                  Cancel
               </Button>
               <Button variant='primary' type='submit'>
                  {initialData ? 'Update' : 'Add Car'}
               </Button>
            </Modal.Footer>
         </Form>
      </Modal>
   )
}
