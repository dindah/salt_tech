import * as React from 'react';
import './style.css'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption } from '@coreui/react'
import { Container, Box } from '@mui/material';

export default function CarouselCompany() {
  return (
      <div>
          <Container style={{ paddingTop: '43em', width: '60em'}}>
            <CCarousel controls indicators dark>
            <CCarouselItem>
                <Box style={{ width: '5em', height: '25em' }} />
                <CCarouselCaption className="d-none d-md-block" style={{ textAlign: 'left'}}>
                <h1 style={{ color: '#029FE4', paddingTop:'0.5em'}}>Who We Are</h1>
                <p style={{ color: '#000000', paddingTop: '0.5em'}}><h2>Technology Company</h2></p>
                <h4  style={{ color:'#777777', paddingTop: '0.5em'}}>
                    <p>Sed ut perspiciatis unde omnis iste natus sit </p>
                    <p>voluptatem accusantium doloremque laudantium, </p>
                    <p>totam rem aperiam, eaque ipsa quae ab illo </p>
                    <p>inventore veritatis et quasi architecto beatae vitae </p>
                    dicta sunt explicabo.
                </h4>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <Box style={{ width: '5em', height: '25em' }} alt="slide 2" />
                <CCarouselCaption className="d-none d-md-block" style={{ textAlign: 'left'}}>
                <h1 style={{ color: '#029FE4', paddingTop:'0.5em'}}>What We Do</h1>
                <p style={{ color: '#000000', paddingTop: '0.5em'}}><h2>Professional Brand Management</h2></p>
                <h4  style={{ color:'#777777', paddingTop: '0.5em'}}>
                    <p>Neque porro quisquam est, qui dolorem ipsum quia </p>
                    <p>dolor sit amet, consectetur, adipisci velit, sed quia </p>
                    <p>non numquam eius modi tempora incidunt ut </p>
                    <p>labore et dolore magnam aliquam quaerat </p>
                    voluptatem.
                </h4>
                </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
                <Box style={{ width: '5em', height: '25em' }} alt="slide 3" />
                <CCarouselCaption className="d-none d-md-block" style={{ textAlign: 'left'}}>
                <h1 style={{ color: '#029FE4', paddingTop:'0.5em'}}>How We Do</h1>
                <p style={{ color: '#000000'}}><h2>Strategize, Design, Collaborate</h2></p>
                <h4  style={{ color:'#777777'}}>
                    <p>Ut enim ad minima veniam, quis nostrum </p>
                    <p>exercitationem ullam corporis suscipit laboriosam, </p>
                    <p>nisi ut aliquid ex ea commodi consequatur? Quis </p>
                    <p>autem vel eum iure reprehenderit qui in ea </p>
                    <p>oluptate velit esse sequam nihil molestiae </p>
                    consequatur.
                </h4>
                </CCarouselCaption>
            </CCarouselItem>
            </CCarousel>
        </Container>
      </div>
  );
}