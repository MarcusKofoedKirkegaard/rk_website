import {Box} from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div id='footerDiv'>
        <footer>
            <Box style={{display: 'flex', flexFlow: "wrap", justifyContent: 'space-evenly', paddingBottom: '10px'}}>
                <span>Autoriseret Klinisk Diætist Rikke Adamsen Kirkegaard</span>
                <span>Mejlgade 44E, 2. 8000 Aarhus C</span>
                <span><a href="mailto:rikke.kirkegaard@example.dk"> rikke.kirkegaard@example.dk</a></span>
                <span><a href="tel:+4560155585">+45 60 15 55 85</a></span>
            </Box>             
        </footer>
    </div>
  );
};

export default Footer;