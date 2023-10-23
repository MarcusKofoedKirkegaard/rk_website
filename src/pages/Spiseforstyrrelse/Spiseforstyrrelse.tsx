import './Spiseforstyrrelse.css';
import {Card} from "@mui/material";
import React from 'react';

const StyledCard: React.FunctionComponent<{node: string}> = ({node}) =>{
    return (
        <Card sx={{padding: "20 px", marginLeft: "50px", marginRight: "50px", marginBottom: "20px", 
                    backgroundColor: "#b5ab9e", minHeight: "100px"}}>
            <p style={{paddingLeft: "10px", color: "white"}}>{node}</p>
        </Card>
    );
}

const Spiseforstyrrelse  = () => {
    
    const string1 = "Spiseforstyrrelse kan...";
    return (
        <div id='sf' style={{minHeight: "550px"}}>
            <h1>Spiseforstyrrelse</h1>
        
            <StyledCard node={string1}/>
            <StyledCard node="Tegn på Spiseforstyrrelser"/>
        </div>
    );
};

export default Spiseforstyrrelse;