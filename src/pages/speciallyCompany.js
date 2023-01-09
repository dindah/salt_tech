import * as React from 'react';
import './style.css'
import { Box, Container } from '@mui/material';
import { CCard, CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';

export default function SpeciallyCompany() {
  return (
      <div>
        <Box style={{ width: '100%', height:'98em', backgroundColor:'#509FDD', paddingTop: '4em', fontFamily: 'Rubik'}}>
            <Container style={{ width: '75em', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center'}}>
                <CCard style={{ border: 'none', width: '35em'}}>
                    <h1 style={{ color: '#029FE4', paddingTop:'3em', textAlign: 'left'}}>OUR SPECIALITY</h1>
                    <h4  style={{ color:'#777777', paddingTop: '2em'}}>
                        <p>orem ipsum dolor sit amet, consectetur</p>
                        <p>adipiscing elit. Duis euismod libero vel leo auctor, </p>
                        <p>in venenatis nulla consequat. Sed commodo nunc </p>
                        sit amet congue aliquam.
                    </h4>
                </CCard>
            </Container>
            <Container style={{ width: '75em', backgroundColor: '#FFFFFF', display: 'flex', justifyContent: 'center'}}>
                <CCard style={{ border: 'none'}}>
                    <CCarousel controls indicators dark style={{ width: '45em', justifyContent: 'center', display: 'grid'}}>
                        <CCarouselItem style={{ width: '20em'}}>
                            <CImage className="d-block w-100" src='/asset/Accesories.png' alt='slide 1' style={{ width: '20em' }} />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-400" src='/asset/Group.png' alt='slide 2' style={{ width: '20em' }} />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-400" src='/asset/Exhaust.png' alt='slide 3' style={{ width: '20em' }} />
                        </CCarouselItem>
                    </CCarousel>
                </CCard>
            </Container>
        </Box>
      </div>
  );
}