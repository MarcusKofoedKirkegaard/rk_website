import { Box, Card, List, ListItem, Tab, Tabs } from '@mui/material';
import './OmMig.css';
import React from 'react';


const StyledCard: React.FunctionComponent<{title: string, text: string}> = ({title, text}) =>{
    return (
        <Card sx={{padding: "20 px", marginRight: "10px", marginBottom: "20px", 
                    backgroundColor: "#b5ab9e", minHeight: "100px",
                    width: '300px'}}>
            <p style={{paddingLeft: "10px", color: "white"}}>{title}</p>            
            <p style={{paddingLeft: "10px", color: "white"}}>{text}</p>
        </Card>
    );
}

const OmMig  = () => {
    return (
        <div className='ommig' >

            <div id='leftside'>
                <div >
                    <h1>Hvem er jeg?</h1>
                    
                    <Box sx={{display: 'flex', flexFlow: "auto", marginBottom: "100px", paddingRight: "50px"}}>
                        <p style={{paddingLeft: "50px"}}>
                            Jeg er uddannet klinisk diætist fra Århus Universitet i 2008. Samme år er jeg autoriseret af Sundhedsstyrelsen. 
                            Min autorisation betyder, at min vejledning bygger på videnskabelig evidens. 
                            Til trods for min kliniske tilgang vil jeg fremhæve, at det ligger mig meget på sinde, 
                            at jeg ser det hele menneske og nærer empati og nysgerrighed for den person jeg sidder overfor og møder dig der hvor du er.
                        </p>
                        
                        <div style={{ verticalAlign: "middle", marginLeft: "50px"}}>
                            <img src="images/small.png" alt="" width={"200px"} style={{borderRadius: "50%"}}/>
                        </div>
                    </Box>
                    <Box sx={{margin: "10px 50px 50px 50px"}}>
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

                <div style={{ paddingLeft: "50px"}}>
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
                </div>
            </div>            
        </div>

    );
};

export default OmMig;