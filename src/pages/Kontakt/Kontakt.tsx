import { Box, Stack, Typography } from '@mui/material';
import './Kontakt.css';
import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Kontakt: React.FunctionComponent = () => {
    return (
        <Box sx={{width: "80%", margin: "auto", paddingTop: "85px"}}>
            
            <Stack spacing={2}>
                <Stack direction="row" spacing={35}>
                    <Box>
                    <h1>Kontakt</h1>
                    <Box display="flex" flexWrap="wrap" alignItems="flex-start" justifyContent="space-between">
                        {/* LEFT SIDE / TOP */}
                        <Stack spacing={2} paddingBottom="40px">
                            <Typography>Ønsker du at kontakte mig eller booke en samtale kan du kontakte mig på følgende vis:</Typography>
                        
                            <Stack direction="row" spacing={1}>
                                <PhoneIcon/>
                                <a href='tel:+4560155585'> <Typography fontFamily="inherit"> +45 60 15 55 85</Typography> </a>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <EmailIcon/>
                                <a href='mailto:rikke.adamsen.kirkegaard@gmail.com'> <Typography fontFamily="inherit">rikke.adamsen.kirkegaard@gmail.com</Typography></a>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <FacebookIcon/>
                                <a href='https://www.facebook.com/profile.php?id=61551933941481'> <Typography fontFamily="inherit">Rikke Kirkegaard - Klinisk diætist</Typography></a>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <InstagramIcon/>
                                <a href='https://www.instagram.com/rksundhedibevaegelse?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=='> <Typography fontFamily="inherit">rksundhedibevaegelse</Typography></a>
                            </Stack>
                            <Stack direction="row" spacing={1}>
                                <PlaceIcon/>
                                <a target="_blank" href='https://www.google.com/maps/place/Mejlgade+44e,+8000+Aarhus/'>
                                <Typography fontFamily="inherit">Mejlgade 44E, 2. 8000 Aarhus C</Typography>    
                                </a>
                            </Stack>
                        </Stack>

                        {/* RIGHT SIDE / BOTTOM */}
                        {/* <Box flex="1">
                            <img src="images/Kontakt.jpg" alt="" width={"225px"} style={{borderRadius: "5%"}}/>
                        </Box> */}
                    </Box>
                        
                    </Box>
                    
                </Stack>
                    
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.8653799327853!2d10.2099978767691!3d56.15943216059825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f97a98a5f77%3A0x71bc9941a4579a72!2sst%2C%20Mejlgade%2044e%2C%208000%20Aarhus!5e0!3m2!1sen!2sdk!4v1708245286166!5m2!1sen!2sdk" 
                    width="auto" 
                    height="400" 
                    style={{border: 0, marginBottom: 25}} 
                    loading="lazy"
                />
            </Stack>
        </Box>
    );
};