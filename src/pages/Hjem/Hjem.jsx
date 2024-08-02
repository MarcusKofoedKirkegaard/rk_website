import './Hjem.css';
import React from 'react';
import { Button, Card, Box, Typography, Stack, ListItem, Tabs } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { StyledCard } from '../OmMig/OmMig.tsx';

const Hjem = () => {

    const introText = "Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.";

    return (
        <div className='Hjem' > 
        <Helmet>
            <title>Rikke Kirkegaard - Diætist Aarhus C</title>
        </Helmet>
        <Box sx={{paddingTop: "85px"}}>
        
            <Box id='attention'>
            <div className='overlay'></div>      
            <img alt="Rikke Kirkegaard Diætist Aarhus C Spiseforstyrrelse" hidden={true}/>
                    <div className="attentionContent"  >
                    <Stack spacing={3} padding={1} marginTop={10} width="100%" > 
                    <Typography className='attentionElements' variant='h2' color="black" >Rikke Kirkegaard <small></small></Typography>
                    <Box >
                    <Typography className='attentionElements' variant='h5' color="white">
                        Autoriseret Klinisk Diætist & Familiebehandler i Aarhus
                    </Typography>
                    {/* <Typography  className='attentionElements' variant='h5' color="white">& Familiebehandler i Aarhus</Typography> */}
                    </Box>
                    
                    {/* <Card sx={{backgroundColor: 'rgba(181, 171, 158, 0.75)', padding: "10px", marginBottom: "10px", minWidth: "300px"}}>
                    <Typography style={{paddingBottom: '20px', color: "white"}}
                    >
                        Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                    </Typography>
                    </Card> */}
                    <a className='attentionElements'  href="mailto:rikke.adamsen.kirkegaard@gmail.com">
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
            <Box sx={{ margin: "50px"}}>
          <Typography
            sx={{ paddingBottom: "20px" }}
            fontFamily="inherit"
            variant="h4"
          >
            Andre siger:
          </Typography>
          <Tabs
            variant="scrollable"
          >
            <ListItem>
              <StyledCard
                title="Emilia, 29"
                text="I mit forløb med Rikke har hun gjort sig umage for at lære mig at kende og forstå, hvor jeg er i livet. Jeg er blevet mødt i øjenhøjde, og Rikke har ikke bare forholdt sig til, hvad jeg putter på min tallerken, men har set hele mig og haft min trivsel på hjertet. I mit tempo har Rikke hjulpet mig med både kost, motion og kropsbillede. 
                             Forløbet har været guld værd for mig, og Rikkes tålmodighed og støtte vejen har betydet alt."
              />
            </ListItem>
            <ListItem>
              <StyledCard
                title="Kvindelig klient, 34"
                text="Når det kommer til mad, bliver det hele hurtigt uoverskueligt for mig. Med Rikkes hjælp har jeg fået skabt struktur omkring mine måltider, så jeg har nemmere ved at spise og få de rette mængder mad."
              />
            </ListItem>
            <ListItem>
              <StyledCard
                title="Kvindelig klient, 17"
                text="Det har betydet utroligt meget for mig, at jeg kunne snakke åbent og ærligt med Rikke om min spiseforstyrrelse. Jeg føler ikke, at der er ret mange, der forstår eller ser mig, men det gjorde Rikke hele vejen."
              />
            </ListItem>
            <ListItem>
              <StyledCard
                title="Emma, 22"
                text="Rikke har lært mig, at selv et lillebitte skridt fremad, er et skridt i den rigtige retning. Jeg er taknemmelig for, at hun aldrig stoppede med at tro på mig, selv når jeg tvivlede allermest på mig selv."
              />
            </ListItem>
            <ListItem>
              <StyledCard
                title="Nikolaj, 23"
                text="Jeg har fået styr på min kost og træning, og er med Rikkes hjælp endelig begyndt at se resultater. Jeg har lært, at jeg er nødt til at spise nok for at blive stærkere, og har fået hjælp til at give slip på frygten for at spise for meget."
              />
            </ListItem>
          </Tabs>
        </Box>
        </Box>
        </div>
    );
};

export default Hjem;