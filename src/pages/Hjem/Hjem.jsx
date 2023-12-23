import './Hjem.css';
import React from 'react';
import { Button, Card, Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const Hjem = () => {

    const introText = "Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.";

    return (
        <div className='Hjem' > 
        <Box sx={{paddingTop: "85px"}}>
        
            <Box id='attention'>
            <div className='overlay'></div>        
                    <div className="attentionContent" style={{paddingLeft: "100px"}} >
                    <Stack spacing={3} padding={1} marginTop={10} width="100%" > 
                    <Typography variant='h2' color="black" >Rikke Kirkegaard <small></small></Typography>
                    <Box >
                    <Typography variant='h5' color="white">Autoriseret Klinisk Diætist</Typography>
                    <Typography variant='h5' color="white">& Familiebehandler</Typography>
                    </Box>
                    
                    {/* <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.75)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                    <Typography style={{paddingBottom: '20px', color: "white"}}
                    >
                        Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                    </Typography>
                    </Card> */}
                    <a href="mailto:rikke.adamsen.kirkegaard@gmail.com">
                        <Button variant='contained' sx={{color: 'white', 
                        backgroundColor: 'rgba(181, 171, 158, 0.7)', '&:hover': {backgroundColor: "#b5ab9e"}}} >
                            Kontakt mig
                        </Button>
                    </a>
                    </Stack>
                    </div>
                
            </Box>
        
            <Box sx={{width: "80%", margin: "auto", padding: "50px 0"}}>
                <Stack spacing={2}>
                    <Typography variant='h5'>
                        Hvem er jeg?
                    </Typography>
                    <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.75)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                    <Typography style={{paddingBottom: '20px', color: "white"}}
                    >
                        Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                    </Typography>
                    </Card>
                </Stack>
                {/*                 
                <Stack direction="row" spacing={100}>
                    <Card sx={{height: "200px"}}>

                    </Card>
                    <img src="images/FrontpageSmall.jpg" alt="" width={"400px"} style={{borderRadius: "5%"}}/>

                </Stack>
                
                <h2>Jeg tilbyder</h2>
                <Card sx={{
                    backgroundColor: ""
                }}>
                    
                    <h2 style={{color: "white"}}>Jeg tilbyder...</h2>
                </Card>
                <h2>More</h2>
                <Card>
                    <h2 style={{color: "white"}}>More...</h2>
                </Card> 
                */}
            </Box>
        </Box>
        </div>
    );
};

export default Hjem;