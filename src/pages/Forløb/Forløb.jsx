import { Card } from '@mui/material';
import './Forløb.css';
import React from 'react';

const Forløb = () => {
    
        
    return (
        <div className='Forløb'>
            <h1>Forløb</h1>
            <Card id='offer' sx={{color: "white"}}>
                <h2>Jeg tilbyder</h2>
            </Card>
        </div>
    );
};

export default Forløb;