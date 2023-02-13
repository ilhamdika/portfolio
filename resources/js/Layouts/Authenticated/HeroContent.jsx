
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from '@inertiajs/react';
import Button from '@/Components/PrimaryButton';

export default function HeroContent() {
    return (
        
        <Container>
            <Row>
        <Col sm={6}>
            <div className="heroContent">
            <h1 className='animate__backInDown'>Know me better than me.
              and start <span>happy</span> with me</h1> 

              
           <h5 >start today with <span >happines</span> moment & enjoy your life, with stay with me, when the sad become, then with me you got happines with me, let’s start</h5>

           <Link>
              <Button className="btn btn-primary">Get Started</Button>
           </Link>
            
            </div>
          
        </Col>
        <Col sm={6}>
            <div className='heroContentImg'>
            <img src="/img/landing.png" alt="hero" border="0"  />
            </div>
            
        </Col>
      </Row>
      </Container>


    )
    
}