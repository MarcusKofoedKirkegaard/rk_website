import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import { Stack, Typography, Box, AppBar } from '@mui/material';

const Header: React.FunctionComponent = () => {
  const location = useLocation();

  return (
    <AppBar 
    sx={{backgroundColor: "whitesmoke"}} 
      className='header'>
          <nav>
        
          <div className='headerlogo' > 
          
          <Box className='headerlogo' sx={{ }}> 
            <Link to="/" >
                <Stack>
                    <h1 id='Logo'> 
                      <b> RIKKE KIRKEGAARD </b> 
                    </h1>       
                    <Typography variant='h6' sx={{ fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif"}}>
                      Autoriseret Klinisk Diætist | Aarhus
                    </Typography>
                </Stack>
            </Link>
          </Box>
          </div>

          <div id='headermenu'>
            {/* REMOVED UNTIL CONTENT IS READY
            <Link to="/forloeb" >
              <p style={{fontSize: "16pt"}}
                className={location.pathname === '/forloeb' ? 'active' : ''}>
                Jeg tilbyder
              </p>
            </Link> 
            */}
            <Link to="/spiseforstyrrelse" >
              <p style={{fontSize: "16pt"}} className={location.pathname === '/spiseforstyrrelse' ? 'active' : ''}>
                Spiseforstyrrelser
              </p>
            </Link>
            <Link to="/om-mig" >
              <p style={{fontSize: "16pt"}} className={location.pathname === '/om-mig' ? 'active' : ''}>
                Om mig
              </p>
            </Link>
            <Link to="/priser" >
              <p style={{fontSize: "16pt"}} className={location.pathname === '/priser' ? 'active' : ''}>
                Priser
              </p>
            </Link>
            <Link to="/kontakt">
              <p style={{fontSize: "16pt"}} className={location.pathname === '/kontakt' ? 'active' : ''}>
                Kontakt mig
              </p>
            </Link>
          </div>
        </nav>
    </AppBar>
  );
};

export default Header;