import { Box, Card, List, ListItem, Tab, Tabs } from '@mui/material';
import './OmMig.css';
import React from 'react';


const StyledCard: React.FunctionComponent<{title: string, text: string}> = ({title, text}) =>{
    return (
        <Card sx={{padding: "20 px", marginBottom: "50px", 
                    backgroundColor: "#b5ab9e", minHeight: "100px",
                    width: "300px", margin: "auto"}}>
            <Box sx={{margin: "20px"}}>
                <p style={{color: "white"}}>{title}</p>            
                <p style={{color: "white"}}>{text}</p>
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
                    
                    <Box sx={{display: 'flex', flexFlow: "auto", marginBottom: "100px", paddingRight: "50px"}}>
                        <p >
                            Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. 
                            Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. 
                            Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, 
                            at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                        </p>
                        
                        <div style={{ verticalAlign: "middle"}}>
                            <img src="images/small.png" alt="" width={"200px"} style={{borderRadius: "50%"}}/>
                        </div>
                    </Box>
                    <Box sx={{margin: "10px 00px 50px 0px"}}>
                        <Card id='info' sx={{color: "white"}}>
                            <h2>Kvalifikationer</h2>
                            <p>...</p>
                            
                            <h2>Speciale</h2>
                            <p>...</p>

                            <h2>Erfaring</h2>
                            <p>...</p>

                        </Card>
                    </Box>
                </div>

                <Box>
                    <h2>Andre siger:</h2>
                    <Tabs variant="scrollable" >       
                        <ListItem>
                             <StyledCard title="Udtalelse 1 - Navn" text="Rikke er ....."/>       
                        </ListItem> 
                        <ListItem>
                            <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/>
                        </ListItem>     
                        <ListItem>
                            <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/>
                        </ListItem>     
                        <ListItem>
                            <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/>
                        </ListItem>     
                        <ListItem>
                            <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/>
                        </ListItem>     
                        <ListItem>
                            <StyledCard title="Udtalelse 2 - Navn" text="Jeg har været i forløb med Rikke, hvilket..."/>
                        </ListItem>     
                    </Tabs>
                </Box>
            </div>            
        </Box>

    );
};

export default OmMig;