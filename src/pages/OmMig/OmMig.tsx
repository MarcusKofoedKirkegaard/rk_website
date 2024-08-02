import {
  Box,
  Card,
  List,
  ListItem,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import "./OmMig.css";
import React from "react";
import { Link } from "react-router-dom";

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
};

export const StyledCard: React.FunctionComponent<{
  title: string;
  text: string;
}> = ({ title, text }) => {
  return (
    <Card
      sx={{
        padding: "20px",
        marginBottom: "50px",
        backgroundColor: "#b4a68f",
        width: "450px",
        height: "275px",
        margin: "auto",
        "&:hover": {
          transform: "scale(1.01)",
        },
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Box sx={{ margin: "20px" }}>
        <Typography
          paddingBottom="20px"
          fontFamily="inherit"
          fontSize="15pt"
          style={{ color: "white" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ whiteSpace: "pre-wrap" }}
          color="white"
          fontFamily="inherit"
        >
          {text}
        </Typography>
        {/* {text.map(segment => {
                    return(
                        <Typography fontFamily="inherit" fontStyle="italic" sx={{color: "white"}}>{segment}</Typography>
                    );
                })}   */}
      </Box>
    </Card>
  );
};

export const OmMig = () => {
  return (
    <Box sx={{ width: "80%", margin: "auto", paddingTop: "85px" }}>
      <div>
        <div>
          <h1>Hvem er jeg?</h1>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
            flexWrap="wrap"
            sx={{ marginBottom: "50px" }}
          >
            <Box paddingBottom="40px" maxWidth="800px">
              <Stack spacing={2}>
                <Typography fontFamily="inherit" fontSize="14pt">
                  Jeg er uddannet klinisk diætist fra Århus Universitet i 2008.
                  Samme år er jeg autoriseret af Sundhedsstyrelsen. Min
                  autorisation betyder, at min vejledning bygger på
                  videnskabelig evidens. Til trods for min kliniske tilgang vil
                  jeg fremhæve, at det ligger mig meget på sinde, at jeg ser det
                  hele menneske og nærer empati og nysgerrighed for den person
                  jeg sidder overfor og møder dig der hvor du er.
                </Typography>
                <Typography fontFamily="inherit" fontSize="14pt">
                  Min brede erfaring som klinisk diætist er etableret hos Klinik
                  for spiseforstyrrelser i ambulatoriet i Herning (2008-2019).
                  Her har jeg primært arbejdet med den diætetiske behandling af
                  både børn og voksne, men har også indgået i terapeutiske
                  gruppeforløb i behandlingen af bulimi og BED samt miljøterapi
                  i daghospitalet og måltidstræning i grupper. Når en
                  spiseforstyrrelse ”flytter” ind påvirker det hele familien og
                  de pårørende omkring den spiseforstyrrede. Siden november 2019
                  og frem til marts 2024 har jeg arbejdet ved FOSS. FOSS
                  (forkortelse for familier med spiseforstyrrelser og selvskade)
                  er et ambulant tilbud under Holmstrupgård (Region Midt). Her
                  har jeg arbejdet som familiebehandler og arbejdet både med
                  unge med en spiseforstyrrelse eller forældrene til den unge
                  med en spiseforstyrrelse. Ind i dette har de individuelle
                  samtaler været kombineret med familiesamtaler og herunder også
                  søskendesamtaler. Derudover har jeg haft ungegruppe, hvor unge
                  med udfordringer indenfor spiseforstyrrelser, selvskade,
                  mistrivsel, autisme, ADD/ADHD, lavt selvværd mm. har kunne
                  møde andre unge og dele tanker og spejle sig i hinanden.
                </Typography>
                <Typography fontFamily="inherit" fontSize="14pt">
                  Det er min klare forståelse, at en spiseforstyrrelse ikke er
                  noget man vælger, men er en psykiatrisk lidelse, som oftest
                  bliver et symptom og en måde at mestre svære tanker og
                  følelser.
                </Typography>
                <Typography fontFamily="inherit" fontSize="14pt">
                  Forud for mine 15 års arbejde med speciale i
                  spiseforstyrrelser har jeg arbejdet i somatikken, hvor mine
                  primære opgaver var diætbehanling til patienter med hjerte og
                  kar, diabetes og kvinder der var eller skulle i fertilitets
                  behandling. Herunder har jeg bred erfaring med
                  vægttabsbehandling og vægtvedligeholdelse. Hertil kommer
                  nyeste uddannelse i varigt vægttab ved Henrik Duer.
                </Typography>
              </Stack>
            </Box>
            <Box flex="1" paddingLeft="20px">
              <img
                src="images/OmMig.jpg"
                alt=""
                width={"300px"}
                style={{ borderRadius: "48%" }}
              />
            </Box>
          </Box>

          <Box>
            <Card
              sx={{
                color: "white",
                padding: "20px",
                backgroundColor: "#b5ab9e",
              }}
            >
              <Typography fontFamily="inherit" variant="h4">
                Kvalifikationer
              </Typography>
              <ul>
                <Stack spacing={2}>
                  <li>Autoriseret Klinisk Diætist</li>
                  <li>GPU Gruppe Terapeutisk Uddannelse </li>
                  <li>
                    Kostvejleder med speciale i det varige vægttab v.
                    Træningsfysiolog Henrik Duer & Diætist Stine Junge
                    Albrechstsen
                  </li>
                  <li>NADA-udøver</li>
                  <li>Spinning Instruktør </li>
                  <li>Strong Uddannelse</li>
                  <li>Yoga Instruktør</li>
                </Stack>
              </ul>
              <Typography fontFamily="inherit" variant="h4">
                Speciale
              </Typography>
              <ul>
                <li>
                  Spiseforstyrrelser
                  <ul>
                    <Stack spacing={2}>
                      <li>Anoreksi</li>
                      <li>Bulimi</li>
                      <li>BED (Tvangsoverspisning)</li>
                    </Stack>
                  </ul>
                </li>
              </ul>
              <Typography fontFamily="inherit" variant="h4">
                Erfaring
              </Typography>
              <ul>
                <Stack spacing={2}>
                  <li>Livstilssygdomme v. Regionshospitalet Randers - 2008</li>
                  <li>
                    Spiseforstyrrelser v. Klinik for Spiseforstyrrelser Herning
                    - 2008 - 2019
                  </li>
                  <li>
                    Familier, spiseforstyrrelse og selvskade v. FOSS - 2019 -
                    2024
                  </li>
                </Stack>
              </ul>
              <Typography fontFamily="inherit" variant="h4">
                Samarbejdspartnere
              </Typography>
              <ul>
                <Stack spacing={2}>
                  <li>
                    <Link to="https://www.dortheamby.dk">
                      <Typography fontFamily="inherit" color="white">
                        {" "}
                        Autoriseret Psykolog - Dorthe Amby
                      </Typography>
                    </Link>
                  </li>
                  <li>
                    <Link to="https://mental-care.dk">
                      <Typography fontFamily="inherit" color="white">
                        {" "}
                        Mental-Care - Vikarservice i Socialpsykiatrien
                      </Typography>
                    </Link>
                  </li>
                </Stack>
              </ul>
            </Card>
          </Box>
        </div>

        <Box sx={{ marginBottom: "50px", marginTop: "50px" }}>
          <Typography
            sx={{ paddingBottom: "20px" }}
            fontFamily="inherit"
            variant="h4"
          >
            Andre siger:
          </Typography>
          <Tabs
            variant="scrollable"
            sx={{
              marginLeft: "-40px",
              marginRight: "-40px",
            }}
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
      </div>
    </Box>
  );
};

export default OmMig;
