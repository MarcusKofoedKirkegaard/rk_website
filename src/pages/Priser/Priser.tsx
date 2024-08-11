import "./Priser.css";
import React, { useState } from "react";
import {
  Box,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
  IconButton,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Stack,
  CardHeader,
  CardContent,
  Tabs,
  Tab,
  styled,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TelegramIcon from "@mui/icons-material/Telegram";
import LaunchIcon from "@mui/icons-material/Launch";

// Create A themed Table and convert to Typescript

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FunctionComponent<TabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, minHeight: "150px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const BasicTabs: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab
            sx={{
              marginLeft: "50px",
              padding: "0, 50px, 0, 50px",
              marginRight: "50px",
            }}
            label="Betaling"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              marginLeft: "50px",
              padding: "0, 50px, 0, 50px",
              marginRight: "50px",
            }}
            label="Afbudsregler"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              marginLeft: "50px",
              padding: "0, 50px, 0, 50px",
              marginRight: "50px",
            }}
            label="Tilskud"
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              marginLeft: "50px",
              padding: "0, 50px, 0, 50px",
              marginRight: "50px",
            }}
            label="Privat Sundhedsforsikring"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Faktura sendes pr. email
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Ændringer eller aflysning bedes foretaget hurtigst muligt og senest kl.
        12.30 hverdagen før din aftale (ved en aftale om mandagen skal afbuddet
        gives senest fredagen før). Ved for sen aflysning eller udeblivelse
        opkræves 500 kr. (<i>Opkrævningen sendes via faktura</i>) uanset
        afbuddets årsag. Du kan sende en SMS eller indtale en besked på
        telefonsvareren, hvis jeg er optaget. Hvis du ikke kan møde op til din
        aftale grundet sygdom, kan jeg i stedet tilbyde en online samtale.
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Stack spacing={2}>
          <Typography>
            Er du medlem af Sygeforsikringen "danmark" kan du få et tilskud på
            350 kr. pr. samtale (max. 2.100 kr. inden for 12 måneder). Kontakt
            Sygforesikringen "danmark" for at høre mere om, hvilke muligheder,
            der er for dig.
          </Typography>
          <Box>
            <Button
              sx={{ backgroundColor: "#b5ab9e" }}
              endIcon={<LaunchIcon />}
              variant="contained"
              href="https://www.sygeforsikring.dk/tilskud/kliniske-diaetister"
            >
              Læs mere på Sygeforsikirng.dk
            </Button>
          </Box>
        </Stack>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Stack spacing={2}>
          <Typography>
            Har du en privat sundhedsforsikring og et BMI under 18.5 eller over
            30 dækker de fleste sundhedsforsikringer behandling ved en klinisk
            diætist.
          </Typography>
        </Stack>
      </CustomTabPanel>
    </Box>
  );
};

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#b5ab9e",
    color: "#b5ab9e",
    boxShadow: "#b5ab9e",
    fontSize: 11,
  },
}));

const Priser: React.FunctionComponent = () => {
  const [showContactDialog, setShowContactDialog] = useState(false);
  const [showInfoDialog, setShowInfoDialog] = useState(false);
  const [showStateRate, setShowStateRate] = useState(false);
  const [showPsykoedukation, setShowPsykoedukation] = useState(false);
  const [value, setValue] = useState(1);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "80%", margin: "auto", paddingTop: "85px" }}>
      <h1>Prisliste</h1>

      <Box sx={{ paddingBottom: "50px" }}>
        <Dialog open={showContactDialog}>
          <DialogTitle> Kontakt mig </DialogTitle>
          <DialogContent>
            Send mig en mail, så vi kan finde ud af hvad jeg kan hjælpe dig med,
            og hvad der passer dig.
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => setShowContactDialog(false)}
              sx={{
                borderColor: "#b5ab9e",
                color: "#b5ab9e",
                "&:hover": {
                  borderColor: "#b5ab9e",
                  backgroundColor: "#A3A798",
                  color: "white",
                },
              }}
            >
              Ikke lige nu
            </Button>
            <Button
              variant="contained"
              href="mailto:rikke.adamsen.kirkegaard@gmail.com"
              sx={{
                color: "white",
                backgroundColor: "#b5ab9e",
                "&:hover": {
                  borderColor: "#b5ab9e",
                  backgroundColor: "#A3A798",
                  color: "white",
                },
              }}
            >
              {" "}
              Send Mig en mail
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={showInfoDialog}>
          <DialogTitle> Kørselstakst ifølge statens takster </DialogTitle>
          <DialogContent>
            Statens kørselstakst i 2024:
            <ul>
              <li>3,79 kr. pr. km.</li>
            </ul>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => setShowInfoDialog(false)}
              sx={{
                borderColor: "#b5ab9e",
                color: "#b5ab9e",
                "&:hover": {
                  borderColor: "#b5ab9e",
                  backgroundColor: "#A3A798",
                  color: "white",
                },
              }}
            >
              Luk
            </Button>
          </DialogActions>
        </Dialog>

        {/* <Card sx={{width: "80%", margin: "auto", marginBottom: "20px", backgroundColor: "#b5ab9e"}}> */}
        <Typography sx={{ color: "white" }}>
          <Button
            onClick={() => setShowContactDialog(true)}
            sx={{
              color: "white",
              backgroundColor: "#A3A798",
              marginBottom: "25px",
              "&:hover": { backgroundColor: "#b5ab9e", color: "white" },
            }}
          >
            <TelegramIcon sx={{ paddingRight: "5px" }} />
            Book en 10 min telefonsamtale med mig, og find ud af om vi er et
            godt match.
          </Button>
        </Typography>
        {/* </Card> */}

        <Typography gutterBottom>
          Som autoriseret klinisk diætist tilbyder jeg både individuelle
          diætistsessioner, personligt tilpassede kostvejledningsforløb, samt
          akupunkturbehandlinger, spisevejledning og spisestøtte.
        </Typography>
        <Typography gutterBottom>
          Her på siden finder du priser på personlig kostvejledning skræddersyet
          dine behov. Jeg tilbyder både ansigt-til-ansigt samtaler i Aarhus C
          samt online diætistsamtaler, som giver dig fleksibiliteten til at
          modtage professionel diætistvejledning uanset hvor du befinder dig.
        </Typography>
        <Table>
          <TableHead>
            <TableCell>
              <Typography variant="h6">Individuelle samtaler</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                Opstartssamtale (90 min) inkl. udarbejdelse af individuel
                kostplan eller skriftligt materiale
              </TableCell>
              <TableCell align="right">kr. 1.450,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Opfølgningssamtale (60 min)</TableCell>
              <TableCell align="right"> kr. 850,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">Tilkøb af individuel kostplan</TableCell>
              <TableCell align="right">kr. 500,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableCell>
              <Typography variant="h6">Klippekort</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">3x opfølgningssamtaler </TableCell>
              <TableCell align="right">kr. 2.400,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableCell>
              <Typography variant="h6"> Personlig Forløb</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                    paddingLeft: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ paddingLeft: "0px" }}
                  >
                    Månedligt forløb inkl. løbende kontakt mellem samtaler
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={2}>
                      <i>
                        2 samtaler pr. måned inkl. kontakt efter behov med svar
                        indenfor 48 timer 2000 kr. pr. måned (Minimum 3 måneder)
                      </i>
                      <i>(Kan sættes i gang efter opstartssamtale)</i>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell align="right">kr. 2.000,00 pr. måned</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                    paddingLeft: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ paddingLeft: "0px" }}
                  >
                    Månedligt forløb
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack spacing={2}>
                      <i>2 samtaler pr. måned (Minimum 3 måneder)</i>
                      <i>(Kan sættes i gang efter opstartssamtale)</i>
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell align="right">kr. 1.500,00 pr. måned</TableCell>
            </TableRow>
            {/* <TableRow>
                            <TableCell align='left'>Opfølgningssamtale online (60 min) + tilpasning af kostplan</TableCell>
                            <TableCell align='right'>kr.   900,00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='left'>3 x opfølgningssamtale online </TableCell>
                            <TableCell align='right'> kr.   2.200,00</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align='left'>3 x opfølgningssamtale online + tilpasning af kostplan</TableCell>
                            <TableCell align='right'>kr.    2.500,00</TableCell>
                        </TableRow> */}
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableCell>
              <Typography variant="h6"> Akupunktur</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left"> NADA Akupunktur </TableCell>
              <TableCell align="right"> kr. 85,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">5x NADA Akupunktur </TableCell>
              <TableCell align="right">kr. 400,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">10x NADA Akupunktur </TableCell>
              <TableCell align="right">kr. 750,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>

      <Box sx={{ paddingBottom: "50px" }}>
        <Table>
          <TableHead>
            <TableCell>
              <Typography variant="h6"> Vejledning</Typography>
            </TableCell>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">
                {/* Psykoedukation (60 min)
                                <Tooltip placement='top' arrow title="Psykoeduktation er noget avanceret noget jeg ikke forstår">
                                    <InfoOutlinedIcon onClick={() => setShowPsykoedukation(true)} fontSize='inherit'/>
                                </Tooltip> */}

                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                    paddingLeft: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ paddingLeft: "0px" }}
                  >
                    Psykoedukation (60 min)
                  </AccordionSummary>
                  <AccordionDetails>
                    <i>
                      Psykoedukation er undervisning i psyken og henviser her
                      til formidling af viden om spiseforstyrrelse samt
                      spiseforstyrrelsessymptomer og -adfærd.
                    </i>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell align="right" sx={{ minWidth: "100px" }}>
                {" "}
                kr. 1.000,00
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                    paddingLeft: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ paddingLeft: "0px" }}
                  >
                    Spisevejledning (60 min)
                  </AccordionSummary>
                  <AccordionDetails>
                    <i>
                      Spisevejledning kan være konkret spisestøtte til måltider.
                      Det handler her om at få hjælp til at skabe en struktur og
                      en tryg ramme, så det sværre måltid kan trænes.
                      Spisevejledning kan foregå i praksis sammen med den
                      spiseforstyrrede eller som vejledning til
                      pårørende/omsorgspersoner.
                    </i>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell align="right">kr. 1.000,00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    "&:before": {
                      display: "none",
                    },
                    paddingLeft: "0px",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ paddingLeft: "0px" }}
                  >
                    Udarbejdelse af dokumentation/status
                  </AccordionSummary>
                  <AccordionDetails>
                    <i>
                      Udarbejdelse af dokumentation eller status til
                      forsikringsselskaber, Udbetaling Danmark, kommuner osv.
                    </i>
                  </AccordionDetails>
                </Accordion>
              </TableCell>
              <TableCell align="right">kr. 1.000,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
      <Box paddingBottom="40px">
        <Button
          sx={{ backgroundColor: "#A3A798" }}
          onClick={() => setShowInfoDialog(true)}
        >
          <Typography fontSize={14} sx={{ color: "white" }}>
            {" "}
            Kørselstakst ifølge statens takster
          </Typography>
        </Button>

        {/* <LightTooltip title={<Typography sx={{fontSize: "12pt", color: "white", padding: "15px"}} >
                Statens kørselstakst i 2023:
                   <ul style={{margin: "0"}}>  <li >3,73 kr. pr. km.</li></ul>
                </Typography>} placement='top' arrow >
                    <InfoOutlinedIcon fontSize='small'/>
                </LightTooltip> */}
      </Box>
      <Box>
        {/* <Card>
                    <CardHeader title="Betaling"/>
                    <CardContent>
                        <Typography>Faktura sendes pr. email</Typography>
                    </CardContent> 
                </Card>
                <Card>
                    <CardHeader title="Afbudsregler"/>
                    <CardContent>
                        <Typography>Faktura sendes pr. email</Typography>
                    </CardContent> 
                </Card>
                <Card>
                    <CardHeader title="Betaling"/>
                    <CardContent>
                        <Typography>Faktura sendes pr. email</Typography>
                    </CardContent> 
                </Card> */}

        <BasicTabs />

        {/* <Tabs value={value} onChange={handleChange} >
                    <Box sx={{width: "100%", display: 'flex', flexFlow: "wrap", justifyContent: 'space-evenly'}}>
                        <Tab label="Betaling" />
                        <Tab label="Afbudsregler"/>
                        <Tab label="Tilskud"/>
                    </Box>
                </Tabs> */}
      </Box>

      {/* <Dialog open={showPsykoedukation}>
                <DialogTitle> Psykoedukation</DialogTitle>
                <DialogContent>
                    Takst: 3,73 kr. pr. km.
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowPsykoedukation(false)}>Luk</Button>
                </DialogActions>
            </Dialog> */}

      {/* <Dialog open={showStateRate}>
                <DialogTitle> Statens Takster 2023</DialogTitle>
                <DialogContent>
                    Takst: 3,73 kr. pr. km.
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowStateRate(false)}>Luk</Button>
                </DialogActions>
            </Dialog> */}
    </Box>
  );
};

export default Priser;
