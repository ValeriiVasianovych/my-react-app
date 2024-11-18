import React, { useState, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import CarForm from './CarForm'
import DataList from './DataList'
import { api } from '../../services/api'

export default function DataDisplayApp() {
   const [cars, setCars] = useState([])
   const [editingCar, setEditingCar] = useState(null)
   const [showModal, setShowModal] = useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      fetchCars()
   }, [])

   const fetchCars = async () => {
      try {
         setLoading(true)
         const data = await api.getCars()
         setCars(data)
      } catch (error) {
         setError('Error fetching cars')
         console.error('Error fetching cars:', error)
      } finally {
         setLoading(false)
      }
   }

   const handleAddCar = async newCar => {
      try {
         setLoading(true)
         const addedCar = await api.addCar(newCar)
         setCars([...cars, addedCar])
         setShowModal(false)
      } catch (error) {
         setError('Error adding car')
         console.error('Error adding car:', error)
      } finally {
         setLoading(false)
      }
   }

   const handleEditCar = car => {
      setEditingCar(car)
      setShowModal(true)
   }

   const handleUpdateCar = async updatedCar => {
      try {
         setLoading(true)
         const updated = await api.updateCar(updatedCar.id, updatedCar)
         setCars(cars.map(car => (car.id === updated.id ? updated : car)))
         setEditingCar(null)
         setShowModal(false)
      } catch (error) {
         setError('Error updating car')
         console.error('Error updating car:', error)
      } finally {
         setLoading(false)
      }
   }

   const handleDeleteCar = async carId => {
      try {
         setLoading(true)
         await api.deleteCar(carId)
         setCars(cars.filter(car => car.id !== carId))
      } catch (error) {
         setError('Error deleting car')
         console.error('Error deleting car:', error)
      } finally {
         setLoading(false)
      }
   }

   const handleCloseModal = () => {
      setEditingCar(null)
      setShowModal(false)
   }

   if (error) {
      return (
         <Container className='py-4'>
            <div className='alert alert-danger' role='alert'>
               {error}
            </div>
         </Container>
      )
   }

   return (
      <Container className='py-4'>
         <div className='d-flex justify-content-between align-items-center mb-4'>
            <h1 className='h2'>Car Management System</h1>
            <Button variant='primary' onClick={() => setShowModal(true)} disabled={loading}>
               Add New Car
            </Button>
         </div>

         <CarForm show={showModal} onSubmit={editingCar ? handleUpdateCar : handleAddCar} initialData={editingCar} onCancel={handleCloseModal} />

         <DataList data={cars} onEdit={handleEditCar} onDelete={handleDeleteCar} loading={loading} />
      </Container>
   )
}
