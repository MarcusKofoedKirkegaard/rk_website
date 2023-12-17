import './Hjem.css';
import React from 'react';
import { Button, Card, Box, Typography, Stack } from '@mui/material';

const Hjem = () => {

    const introText = "Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.";

    return (
        <Box sx={{paddingTop: "85px"}}>
            <Box id='attention'>
                <h1>Rikke Adamsen Kirkegaard</h1>
                <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.75)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                <Typography style={{paddingBottom: '20px', color: "white"}}
                >
                    Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                </Typography>
                </Card>
                <a href="mailto:rikke.adamsen.kirkegaard@gmail.com">
                    <Button variant='contained' sx={{color: 'white', 
                    backgroundColor: 'rgba(181, 171, 158, 0.7)', '&:hover': {backgroundColor: "#b5ab9e"}}} >Kontakt mig</Button>
                </a>
            </Box>
            <Box sx={{width: "80%", margin: "auto", padding: "50px 0"}}>
                <Stack direction="row" spacing={100}>
                    <Card sx={{height: "200px"}}>

                    </Card>
                    <img src="images/FrontpageSmall.jpg" alt="" width={"400px"} style={{borderRadius: "5%"}}/>

                </Stack>
                
                {/* <h2>Jeg tilbyder</h2> */}
                <Card sx={{
                    backgroundColor: ""
                }}>
                    
                    {/* <h2 style={{color: "white"}}>Jeg tilbyder...</h2> */}
                </Card>
                {/* <h2>More</h2> */}
                <Card>
                    {/* <h2 style={{color: "white"}}>More...</h2> */}
                </Card>
            </Box>
        </Box>
    );
};

export default Hjem;