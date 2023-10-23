import './Spiseforstyrrelse.css';
import {Card} from "@mui/material";
import { BreakPoints, createMediQ } from '@medi-q/core';
import { MediQProvider, useMediQ } from '@medi-q/react';
import React from 'react';

const StyledCard: React.FunctionComponent<{node: string}> = ({node}) =>{
    return (
        <div id='spiseforstyrrelse'>
            <Card sx={{padding: "20 px", marginLeft: "50px", marginRight: "50px", marginBottom: "20px", 
                        backgroundColor: "#b5ab9e", minHeight: "100px"}}>
                <p style={{paddingLeft: "10px", color: "white"}}>{node}</p>
            </Card>
        </div>
    );
}

// const breakPoints: BreakPoints = {
//     tiny: '400px',
//     small: '600px',
//     medium: '800px',
//     large: '1000px',

// }

const Spiseforstyrrelse: React.FunctionComponent  = () => {
   
    // const isLessThanSmall = useMediQ('max-small');
    // const isGreaterThanMedium = useMediQ('min-medium');
    // const isBetweenSmallAndMedium = useMediQ('min-small-and-max-medium');
    const string1 = "Spiseforstyrrelse kan...";

    return (
    
        <div id='sf' style={{minHeight: "550px"}}>
            
            <h1 >Spiseforstyrrelse</h1>
            
        
            <StyledCard node={string1}/>
            <StyledCard node="Tegn på Spiseforstyrrelser"/>
        </div>
    );
};

export default Spiseforstyrrelse;