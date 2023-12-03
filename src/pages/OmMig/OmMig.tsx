import { Box, Card, List, ListItem, Stack, Tab, Tabs, Typography } from '@mui/material';
import './OmMig.css';
import React from 'react';



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

const StyledCard: React.FunctionComponent<{title: string, text: string[]}> = ({title, text}) =>{
    return (
        <Card sx={{padding: "20px", marginBottom: "50px", 
                    backgroundColor: "#b5ab9e", minHeight: "100px", margin: "auto", "&:hover":{
                        transform: "scale(1.01)"}, transition: "transform 0.3s ease-in-out"
                    }} >
            <Box sx={{margin: "20px"}}>
                <Typography fontFamily="inherit" fontSize="15pt" style={{color: "white"}}>{title}</Typography>            
                {text.map(segment => {
                    return(
                        <Typography fontFamily="inherit" fontStyle="italic" sx={{color: "white"}}>{segment}</Typography>
                    );
                })}  
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
                    
                    <Stack direction="row" spacing={5} sx={{marginBottom: "50px"}}>
                        <Typography fontFamily="inherit" fontSize="14pt">
                            Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. 
                            Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. 
                            Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, 
                            at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                        </Typography>
                        <Box>
                            <img src="images/OmMig.jpg" alt="" width={"300px"}  style={{borderRadius: "48%"}}/>
                        </Box>
                    </Stack>
                    <Box >
                        <Card  sx={{color: "white", padding: "20px", backgroundColor: "#b5ab9e"}}>
                            <Typography fontFamily="inherit" variant='h4' >Kvalifikationer</Typography>
                            <p>...</p>
                            
                            <Typography fontFamily="inherit" variant='h4'>Speciale</Typography>
                            <p>...</p>

                            <Typography fontFamily="inherit" variant='h4'>Erfaring</Typography>
                            <p>...</p>

                        </Card>
                    </Box>
                </div>

                <Box sx={{marginBottom: "50px", marginTop: "50px"}}>
                    <Typography fontFamily="inherit" variant='h4'>Andre siger:</Typography>
                    <Tabs variant="scrollable" >       
                        <ListItem>
                             <StyledCard title="Emilia, 29" text={udtalelse1()}/>       
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