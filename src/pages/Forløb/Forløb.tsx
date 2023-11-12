import { Box, Card } from '@mui/material';
import './Forløb.css';
import React from 'react';

const Forløb: React.FunctionComponent = () => {
    return (
        <Box sx={{width: "80%", margin: "auto"}}>
            <h1>Forløb</h1>
            <Card id='offer'>
                <h2>Jeg tilbyder</h2>
            </Card>
        </Box>
    );
};

export default Forløb;