import { Box, Stack } from '@mui/material';
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

const Kontakt: React.FunctionComponent = () => {
    
    //56,15944° N, 10,21263° E
    const location = [56.15944, 10.21263];

    const customIcon = L.icon({
        iconUrl: 'mui/icons-material/Place',
        iconSize: [60, 60],
      });  
    return (
        <Box sx={{width: "80%", margin: "auto", paddingTop: "85px"}}>
            <h1>Kontakt</h1>
            <Box>
                <p>Ønsker du at kontakte mig eller booke en samtale kan du kontakte mig på følgende vis:</p>
                <Stack>
                    <p> Tlf: <b><a href='tel:+4560155586'> +45 60 15 55 86</a></b></p>
                </Stack>
                <Stack direction="row">
                    <EmailIcon/>
                    <p> Email: <b><a href='mailto:rikke.adamsen.kirkegaard@gmail.com'> rikke.adamsen.kirkegaard@gmail.com</a></b></p>
                </Stack>
                <Stack>
                    <p>Find mig her:</p>
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

        </Box>
        


    );
};

export default Kontakt;