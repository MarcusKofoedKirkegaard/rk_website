import { Box, Stack, Typography } from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import './Kontakt.css';
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Kontakt: React.FunctionComponent = () => {
    
    //56,15944° N, 10,21263° E
    const location = [56.15944, 10.21263];

    const customIcon = L.icon({
        iconUrl: 'mui/icons-material/Place',
        iconSize: [60, 60],
      });  
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
                    
                <MapContainer 
                    center={location} 
                    zoom={12} 
                    style={{ height: '400px', width: "95%", marginBottom: "20px",
                            borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', zIndex: 1}}
                    maxZoom={18} 
                    minZoom={10}
                    scrollWheelZoom={false}
                >
        
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
        
                    <Marker position={location} icon={customIcon}>
                        <Popup>Your Location</Popup>
                    </Marker>
        
                </MapContainer>

            </Stack>

        </Box>
        


    );
};

export default Kontakt;