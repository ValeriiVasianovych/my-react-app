import React from 'react'
import { Card, Button, Row, Col, Spinner } from 'react-bootstrap'

export default function DataList({ data, onEdit, onDelete, loading }) {
   if (loading) {
      return (
         <div className='text-center py-4'>
            <Spinner animation='border' role='status'>
               <span className='visually-hidden'>Loading...</span>
            </Spinner>
         </div>
      )
   }

   if (data.length === 0) {
      return <div className='text-center py-4'>No cars found</div>
   }

   return (
      <Row xs={1} md={2} className='g-4'>
         {data.map(car => (
            <Col key={car.id}>
               <Card>
                  <Card.Img variant='top' src={car.image} alt={`${car.brand} ${car.model}`} style={{ height: '300px', objectFit: 'cover' }} />
                  <Card.Body>
                     <Card.Title>
                        {car.brand} {car.model} ({car.year})
                     </Card.Title>
                     <Card.Text as='div'>
                        <p>Color: {car.color}</p>
                        <div className='mt-3'>
                           <p className='fw-bold mb-2'>Owner Details:</p>
                           <p className='mb-1'>Name: {car.owner.name}</p>
                           <p className='mb-1'>Email: {car.owner.email}</p>
                           <p className='mb-1'>Phone: {car.owner.phone}</p>
                        </div>
                     </Card.Text>
                     <div className='d-flex gap-2'>
                        <Button variant='primary' onClick={() => onEdit(car)} className='flex-grow-1' disabled={loading}>
                           Edit
                        </Button>
                        <Button variant='danger' onClick={() => onDelete(car.id)} className='flex-grow-1' disabled={loading}>
                           Delete
                        </Button>
                     </div>
                  </Card.Body>
               </Card>
            </Col>
         ))}
      </Row>
   )
}
