import './Spiseforstyrrelse.css';
import {Box, Card, Typography} from "@mui/material";
import React from 'react';

const StyledCard: React.FunctionComponent<{node: string[]}> = ({node}) =>{
    return (
        <Card sx={{padding: "20 px", marginBottom: "100px",
                    backgroundColor: "#b5ab9e", minHeight: "100px"}}>
            <Box sx={{padding: "20px"}}>
                {node.map(segment => {
                    return(
                        <Typography sx={{padding: "10px", color: "white", fontSize: "13pt"}}>{segment}</Typography>
                    );
                })}  
            </Box>          
        </Card>
    );
}

const Spiseforstyrrelse: React.FunctionComponent  = () => {
    
    const string1 = `En spiseforstyrrelse udgør en kompleks psykisk lidelse, hvor tankerne omkring mad, krop, vægt og udseende dominerer ens mentale rum. Denne indre kamp kan gradvist infiltrere og påvirke både det sociale liv samt det fysiske og psykiske velbefindende. Personer der kæmper med en spiseforstyrrelse, er konstant optaget af bekymringer og tanker om mad, hvilket ofte gør det udfordrende at integrere normale dagligdagsaktiviteter og glæder.` 
    const string10 = `De konstante bekymringer kan dreje sig om valg af
    fødevarer, opfattelsen af sund og usund kost, og de regler, der er fastsat
    omkring spisning. Kendetegnende for spiseforstyrrelse er,
    at den påvirker fødeindtagelsen og forholdet til mad og vægt i en grad, der
    forstyrrer både fysisk og psykisk sundhed. Desuden kan det have en negativ
    indvirkning på nære relationer, herunder familie og venner.`
    const string11 = `Har man en spiseforstyrrelse er ens mål typisk at være tynd eller have en bestemt vægt. For at nå dette mål spiser den spiseforstyrrede for sjældent og/eller for lidt, hvilket kaldes restriktiv spisning. Udover ændringer i den normale spisning begynder mange at udvise kompenserende adfærd, for eksempel tvangsmotionering eller opkastninger. Det kan både foregå efter almindelige måltider eller efter overspisninger. Mange tager også afføringsmidler og/eller slankeprodukter i store mængder. Når kroppen ikke får tilstrækkelig føde, udsættes for tvangsmæssig motion, og yderligere belastes af opkastninger og/eller afføringsmidler, påvirkes hele kroppen på en måde der kan blive livstruende.`
    const string12 = `Det er afgørende at forstå, at en spiseforstyrrelse ikke
    kun handler om kost og vægt,
    men også om de komplekse indre konflikter og følelsesmæssige udfordringer, som man står over for. På baggrund af denne indsigt
    søger jeg at tilbyde støtte og
    behandling med en holistisk tilgang, der adresserer både de fysiske og
    psykologiske aspekter af spiseforstyrrelse og
    fremmer en genoprettelse af en sundere balance mellem tanker og
    følelser i forhold til krop, vægt og mad.`
    
    const stringArr1 = [string1, string10, string11, string12];

    const string2 = `Symptomerne på en spiseforstyrrelse varierer, og deres indtræden kan komme snigende, men fælles for dem er en overvældende fokusering på krop, vægt og mad. Denne fokusering kan have betydelige konsekvenser for den fysiske sundhed og fungere som en begrænsning for det fulde udfoldede liv, hvilket inkluderer relationer til familie, venner, arbejde og fritid.`
    
    const string3 = `En spiseforstyrrelse ledsages ofte af et lavt selvværd, og følelser som skam, skyld, svigt, vrede og tristhed kan dominere ens indre verden. De fysiske symptomer, herunder træthed, svimmelhed, hovedpine, mavesmerter og koncentrationsbesvær, er almindelige og yderligere indikatorer på den komplekse påvirkning af både den mentale og somatiske tilstand.`
    
    const string4 = `Trivsel forskydes gradvist mod mistrivsel, og over tid kan isolation og ensomhed blive
    fremtrædende. Sociale arrangementer og almindelige spisesituationer kan virke
    uoverkommelige, og en naturlig tilbagetrækning fra venner og familie kan opstå,
    drevet af en følelse af uoverskuelighed. `
    
    const stringArr = [string2, string3, string4];
    return (
        <Box sx={{minHeight: "550px", width: "80%", margin: "auto", paddingTop: "85px"}}>
            <h1>Spiseforstyrrelse</h1>
        
            <h2 style={{fontSize: "20pt"}}>
                Hvad er en spiseforstyrrelse?
            </h2>
            <StyledCard node={stringArr1}/>
            
            <h2 style={{ fontSize: "20pt"}}>
                Kendetegn ved en spiseforstyrrelse
            </h2>
            <StyledCard node={stringArr}/>

        </Box>
    );
};

export default Spiseforstyrrelse;