// eslint-disable-next-line no-unused-vars
import React from 'react'
import DiscoImage from '../assets/musicbeans.gif'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
function LandingPage() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-6 p-5">
            <h1>Welcome to Media Player</h1>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum molestias fugiat libero cum magnam doloremque officiis ipsa iste numquam temporibus illum eligendi harum et quae, laboriosam nulla necessitatibus omnis voluptatem?
            Sit in atque possimus adipisci id enim qui exercitationem sunt, quas natus fugiat eos officia omnis reprehenderit facilis assumenda porro repudiandae aliquam culpa odit temporibus fugit maxime iusto deleniti. Illum.</p>
            <div className='text-center'>
          <Link to={'/home'}>
          <button className='btn btn-warning'>Get Started</button>
          </Link>
            </div>
          </div>
          <div className="col-6 p-5">
            <img src={DiscoImage} alt="" width={'100%'}  height={'450px'}/>
          </div>
        </div>
      </section>
      <section>
        <h1 className='text-center mt-5'>Features</h1>
        <Row className='p-5'>
          <Col>
          <Card  style={{width:'350px'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/a7/f2/1e/a7f21e0529977212593b19528dab896a.gif" width={'200px'} height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
          <Col>
          <Card style={{width:'350px'}}>
      <Card.Img variant="top" src= "https://cdn.dribbble.com/users/401212/screenshots/2933339/musicplayer_2_dr.gif" width={'200px'} height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
          <Col>
          <Card style={{width:'350px'}}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/ec/59/f2/ec59f2f5cfbe75e212eb89d477ccf8d2.gif" width={'200px'} height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>
          </Row>
      </section>
      <section>
        <Row className='border border-3 rounded m-5 p-5'>
          <Col>
          <h3 className='m-3'>Simple fast and PowerFul</h3>
          <p style={{textAlign:'justify'}}> <strong>Play Everything </strong>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
          <p style={{textAlign:'justify'}}> <strong>Play Everything </strong>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
          <p style={{textAlign:'justify'}}> <strong>Play Everything </strong>: Amet consectetur adipisicing elit. Autem veritatis totam tempore expedita! Quae quam, commodi dolorum iste unde atque alias debitis voluptates nesciunt</p>
          </Col>
          <Col>
          <img src="https://i.pinimg.com/originals/e4/63/4d/e4634da841c0ed906e77cab9b6b733ef.gif " alt="" width={'450px'}/>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default LandingPage