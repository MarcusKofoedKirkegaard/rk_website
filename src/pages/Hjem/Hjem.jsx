import './Hjem.css';
import React from 'react';
import { Button, Card, Box } from '@mui/material';

const Hjem = () => {
    return (
        <div className='Hjem'>
            <Box id='attention'>
                <h1>Rikke Adamsen Kirkegaard</h1>
                <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.25)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                <p style={{paddingBottom: '20px',}}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Card>
                <a href="mailto:rikke.kirkegaard@example.dk">
                    <Button variant='contained' sx={{color: 'white', 
                    backgroundColor: 'rgba(181, 171, 158, 0.25)', '&:hover': {backgroundColor: "#b5ab9e"}}} >Kontakt mig</Button>
                </a>
            </Box>
            <Box>
                <Card id='offer'>
                    <h2 style={{color: "white"}}>Jeg tilbyder...</h2>
                </Card>
                <Card id='more'>
                    <h2 style={{color: "white"}}>More...</h2>
                </Card>
            </Box>
        </div>
    );
};

export default Hjem;