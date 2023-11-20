import {Box} from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <div id='footerDiv'>
        <footer>
            <Box style={{display: 'flex', flexFlow: "wrap", justifyContent: 'space-evenly', paddingBottom: '10px'}}>
                <span>Autoriseret Klinisk Diætist Rikke Adamsen Kirkegaard</span>
                <span>
                  <a target="_blank" href='https://www.google.com/maps/place/Mejlgade+44e,+8000+Aarhus/'>
                    Mejlgade 44E, 2. 8000 Aarhus C
                  </a>
                </span>
                <span><a href="mailto:rikke.adamsen.kirkegaard@gmail.com"> rikke.adamsen.kirkegaard@gmail.com</a></span>
                <span><a href="tel:+4560155585">+45 60 15 55 85</a></span>
            </Box>             
        </footer>
    </div>
  );
};

export default Footer;