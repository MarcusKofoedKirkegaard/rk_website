import { Box, Card, List, ListItem, Stack, Tab, Tabs, Typography } from '@mui/material';
import './OmMig.css';
import React from 'react';
import { Link } from 'react-router-dom';



const udtalelse1 = () => {
    const udtalelse = `"I mit forløb med Rikke har hun gjort sig umage for at lære mig at kende og forstå,`;
    const ud2 = `hvor jeg er i livet. Jeg er blevet mødt i øjenhøjde, og Rikke har ikke bare forholdt sig til, `; 
    const ud3 = `hvad jeg putter på min tallerken, men har set hele mig og haft min trivsel på hjertet. `;    
    const ud4 = `I mit tempo har Rikke hjulpet mig med både kost, motion og kropsbillede.`;
    const ud5 = `Forløbet har været guld værd for mig, og Rikkes tålmodighed og støtte vejen har betydet alt."`;        
        
    const myArray = new Array();
    myArray.push(udtalelse);
    myArray.push(ud2);
    myArray.push(ud3);
    myArray.push(ud4);
    myArray.push(ud5);
    return myArray;
}

const StyledCard: React.FunctionComponent<{title: string, text: string}> = ({title, text}) =>{
    return (
        <Card sx={{padding: "20px", marginBottom: "50px", 
                    backgroundColor: "#b5ab9e", minWidth: "250px",maxWidth: "500px", minHeight: "100px", margin: "auto", "&:hover":{
                        transform: "scale(1.01)"}, transition: "transform 0.3s ease-in-out"
                    }} >
            <Box sx={{margin: "20px"}}>
                <Typography paddingBottom="20px" fontFamily="inherit" fontSize="15pt" style={{color: "white"}}>{title}</Typography>            
                <Typography sx={{ whiteSpace: 'pre-wrap' }} color="white" fontFamily="inherit">{text}</Typography>
                {/* {text.map(segment => {
                    return(
                        <Typography fontFamily="inherit" fontStyle="italic" sx={{color: "white"}}>{segment}</Typography>
                    );
                })}   */}
            </Box>
        </Card>
    );
}

const OmMig  = () => {
    return (
        <Box sx={{width: "80%", margin: "auto", paddingTop: "85px"}}>
            <div>
                <div >
                    <h1>Hvem er jeg?</h1>
                    
                    <Box display="flex" justifyContent="space-between" alignItems="flex-start" flexWrap="wrap" sx={{marginBottom: "50px"}}>
                        <Box paddingBottom="40px" maxWidth="800px">
                            <Typography fontFamily="inherit" fontSize="14pt">
                                Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. 
                                Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. 
                                Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, 
                                at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                            </Typography>
                        </Box>
                        <Box flex="1" paddingLeft="20px">
                            <img src="images/OmMig.jpg" alt="" width={"300px"}  style={{borderRadius: "48%"}}/>
                        </Box>
                    </Box>


                    <Box >
                        <Card  sx={{color: "white", padding: "20px", backgroundColor: "#b5ab9e"}}>
                            <Typography fontFamily="inherit" variant='h4' >Kvalifikationer</Typography>
                            <ul>
                            <li>Autoriseret Klinisk Diætist</li>
                            <li>GPU Gruppe Terapeutisk Uddannelse </li>
                            <li>Spinning Instruktør </li>
                            <li>Strong Uddannelse</li>
                            <li>Yoga Instruktør</li>
                            </ul>
                            <Typography fontFamily="inherit" variant='h4'>Speciale</Typography>
                            <ul>
                            <li>Spiseforstyrrelser
                                <ul>
                                <li>Anoreksi</li>
                                <li>Bulimi</li>
                                <li>BED (Tvangsoverspisning)</li>
                                </ul>
                            </li>
                            </ul>
                            <Typography fontFamily="inherit" variant='h4'>Erfaring</Typography>
                            <ul>
                                <li>Livstilssygdomme v. Regionshospitalet Randers - 2008</li>
                                <li>Spiseforstyrrelser v. Klinik for Spiseforstyrrelser Herning - 2008 - 2019</li>
                                <li>Familier, spiseforstyrrelse og selvskade v. FOSS - 2019 - 2024</li>
                            </ul>
                            <Typography fontFamily="inherit" variant='h4'>Samarbejdspartnere</Typography>
                            <ul>
                                <li>
                                <Link to="https://www.dortheamby.dk" > 
                                   <Typography fontFamily="inherit" color="white"> Autoriseret Psykolog - Dorthe Amby</Typography>
                                </Link>
                                </li>
                                <li>
                                <Link to="https://mental-care.dk" > 
                                   <Typography fontFamily="inherit" color="white"> Mental-Care - Vikarservice i Socialpsykiatrien</Typography>
                                </Link>
                                </li>
                            </ul>
                        </Card>
                    </Box>
                </div>

                <Box sx={{marginBottom: "50px", marginTop: "50px"}}>
                    <Typography sx={{paddingBottom: "20px"}} fontFamily="inherit" variant='h4'>Andre siger:</Typography>
                    <Tabs variant="scrollable" >       
                        <ListItem>
                             <StyledCard title="Emilia, 29" text="I mit forløb med Rikke har hun gjort sig umage for at lære mig at kende og forstå, hvor jeg er i livet. Jeg er blevet mødt i øjenhøjde, og Rikke har ikke bare forholdt sig til, hvad jeg putter på min tallerken, men har set hele mig og haft min trivsel på hjertet. I mit tempo har Rikke hjulpet mig med både kost, motion og kropsbillede. 
                             Forløbet har været guld værd for mig, og Rikkes tålmodighed og støtte vejen har betydet alt."/>       
                        </ListItem> 
                        <ListItem>
                            {/* <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/> */}
                        </ListItem>          
                    </Tabs>
                </Box>
            </div>            
        </Box>

    );
};

export default OmMig;