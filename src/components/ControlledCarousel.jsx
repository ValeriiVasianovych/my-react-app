import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'

function MySlider() {
   return (
      <Container style={{ maxHeight: '100vh', overflow: 'hidden' }}>
         <Carousel fade>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='First slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1501884742805-c94fc1d8985b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Second slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1499162526249-f5b8b9ba9923?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='Third slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
               </Carousel.Caption>
            </Carousel.Item>
         </Carousel>
      </Container>
   )
}

export default MySlider