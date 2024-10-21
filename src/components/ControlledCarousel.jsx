import Carousel from 'react-bootstrap/Carousel'
import { Container } from 'react-bootstrap'

function MySlider() {
   return (
      <Container style={{ maxHeight: '100vh', overflow: 'hidden' }}>
         <Carousel fade>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://wallpapersmug.com/download/1920x1080/426339/town-coast-mountains-norway.jpg'
                  alt='First slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Norway</h3>
                  <p>Beautiful fiords and landscapes.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://wallpapercat.com/w/full/b/4/d/625562-2000x1245-desktop-hd-ireland-background-image.jpg'
                  alt='Second slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Ireland</h3>
                  <p>Beer and landscapes.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://images.unsplash.com/photo-1496661274775-a86a124b9df3?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvbGFuZHxlbnwwfHwwfHx8MA%3D%3D'
                  alt='Third slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Poland</h3>
                  <p>Forests and kind people.</p>
               </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
               <img
                  className='d-block w-100'
                  src='https://images.pexels.com/photos/2031706/pexels-photo-2031706.jpeg?cs=srgb&dl=pexels-chaitaastic-2031706.jpg&fm=jpg'
                  alt='Third slide'
                  style={{ objectFit: 'cover', height: '100vh' }}
               />
               <Carousel.Caption>
                  <h3>Netherlands</h3>
                  <p>Roses and lawns.</p>
               </Carousel.Caption>
            </Carousel.Item>
            
         </Carousel>
      </Container>
   )
}

export default MySlider