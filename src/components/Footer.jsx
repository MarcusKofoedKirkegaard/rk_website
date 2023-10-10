import React from 'react';

const Footer = () => {
  return (
    <div id='footerDiv'>
        <footer>
            <div style={{display: 'flex', justifyContent: 'space-evenly', paddingBottom: '10px'}}>
                <span>Autoriseret Klinisk Diætist Rikke Adamsen Kirkegaard</span>
                <span>Mejlgade 44E, 2. 8000 Aarhus C</span>
                <span><a href="mailto:rikke.kirkegaard@example.dk"> rikke.kirkegaard@example.dk</a></span>
                <span><a href="tel:+4560155585">+45 60 15 55 85</a></span>
            </div>

            <div id='credits' style={{fontSize: '8pt', backgroundColor: 'white'}}>
                <p>Made by Marcus Kofoed Kirkegaard |  Copyright © 2023</p>
            </div> 
        </footer>
    </div>
  );
};

export default Footer;