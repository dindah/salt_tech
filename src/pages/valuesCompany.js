import * as React from 'react';
import './style.css'
import { Box, Container } from '@mui/material';
import { CRow, CCard } from '@coreui/react'

export default function ValuesCompany() {
  return (
      <div>
        <Box style={{ width: '100%', height:'98em', backgroundColor:'#F8F8F8'}}>
            <Container style={{ width: '40em'}}>
                <h1 style={{ color: '#029FE4', paddingTop:'3em', textAlign: 'center'}}>Our Core Values</h1>
                <h4  style={{ color:'#777777', paddingTop: '2em'}}>
                    <p>Ridiculus laoreet libero pretium et, sit vel </p>
                    <p>elementum convallis fames. Sit suspendisse </p>
                    <p>etiam eget egestas. Aliquet odio et lectus etiam </p>
                    sit.
                    <p style={{ paddingTop:'2em'}}>In mauris rutrum ac ut volutpat, ornare nibh </p>
                    diam. Montes, vitae, nec amet enim.
                </h4>
                <h2 style={{ paddingTop: '2em'}}>
                    <CRow className='rowSquare'>
                        <div style={{ height: '0.1em', width: '1em', backgroundColor: '#747474', marginRight: '1em'}}/>Dedication 
                    </CRow> 
                </h2>
                <h4 style={{ paddingTop: '0.2em'}}>
                    <CRow className='rowSquare'>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>Nam libero tempore, cum soluta nobis est </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>ligendi optio cumque nihil impedit quo minus </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>id quod maxime placeat.</p>
                    </CRow> 
                </h4>
                <h2 style={{ paddingTop: '1em'}}>
                    <CRow className='rowSquare'>
                        <div style={{ height: '0.1em', width: '1em', backgroundColor: '#747474', marginRight: '1em'}}/>Dedication 
                    </CRow> 
                </h2>
                <h4 style={{ paddingTop: '0.2em'}}>
                    <CRow className='rowSquare'>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>Nam libero tempore, cum soluta nobis est </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>ligendi optio cumque nihil impedit quo minus </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>id quod maxime placeat.</p>
                    </CRow> 
                </h4>
                <h2 style={{ paddingTop: '1em'}}>
                    <CRow className='rowSquare'>
                        <div style={{ height: '0.1em', width: '1em', backgroundColor: '#747474', marginRight: '1em'}}/>Dedication 
                    </CRow> 
                </h2>
                <h4 style={{ paddingTop: '0.2em'}}>
                    <CRow className='rowSquare'>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>Nam libero tempore, cum soluta nobis est </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>ligendi optio cumque nihil impedit quo minus </p>
                        <p style={{ color: '#777777',  paddingLeft: '2.7em'}}>id quod maxime placeat.</p>
                    </CRow> 
                </h4>
                <CCard style={{ border: 'none', backgroundColor:'#F8F8F8' }}>
                    <img src='asset/Illustration.png' />
                </CCard>
            </Container>
        </Box>
      </div>
  );
}