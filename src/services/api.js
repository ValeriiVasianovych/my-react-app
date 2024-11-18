const API_URL = 'http://localhost:3000'

export const api = {
   getCars: async () => {
      const response = await fetch(`${API_URL}/cars`)
      return response.json()
   },

   addCar: async car => {
      const response = await fetch(`${API_URL}/cars`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(car),
      })
      return response.json()
   },

   updateCar: async (id, car) => {
      const response = await fetch(`${API_URL}/cars/${id}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(car),
      })
      return response.json()
   },

   deleteCar: async id => {
      await fetch(`${API_URL}/cars/${id}`, {
         method: 'DELETE',
      })
   },
}
