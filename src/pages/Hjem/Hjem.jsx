import './Hjem.css';
import React from 'react';
import { Button, Card, Box, Typography } from '@mui/material';

const Hjem = () => {
    return (
        <div className='Hjem'>
            <Box id='attention'>
                <h1>Rikke Adamsen Kirkegaard</h1>
                <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.75)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                <Typography style={{paddingBottom: '20px', color: "white"}}
                >
                    Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                </Typography>
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