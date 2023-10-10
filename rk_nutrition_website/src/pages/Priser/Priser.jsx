import './Priser.css';
import React from 'react';
import { Box, Table, TableRow, TableCell } from '@mui/material'

const Priser  = () => {
    return (
        <div>
            <h1 style={{paddingLeft: '150px' }}>Prisliste</h1>

            <Box sx={{paddingBottom: '50px'}}>
                <Table sx={{width: '1000px', margin: 'auto'}}>
                    
                    <TableRow>
                        <TableCell align='left'> <b>Opstart</b> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'> Opstart konsultation (90 min)</TableCell>
                        <TableCell align='right'> kr.   1050,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opstart konsultation inkl. kostplan</TableCell>
                        <TableCell align='right'>kr.   1.400,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opfølgningssamtale (60 min)</TableCell>
                        <TableCell align='right'> kr.   750,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opfølgningssamtale inkl. tilpasning af kostplan</TableCell>
                        <TableCell align='right'>kr.   850,00</TableCell>
                    </TableRow>
                </Table>
            </Box>

            <Box sx={{paddingBottom: '50px'}}>
                <Table sx={{width: '1000px', margin: 'auto'}}>
                    <TableRow>
                        <TableCell>  <b>Forløb</b> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'> Opstart konsultation + kostplan + 1 x opfølgningssamtale</TableCell>
                        <TableCell align='right'> kr.   1950,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opstart konsultation inkl. kostplan</TableCell>
                        <TableCell align='right'>kr.   1.250,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opfølgningssamtale (60 min)</TableCell>
                        <TableCell align='right'> kr.   750,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opfølgningssamtale inkl. tilpasning af kostplan</TableCell>
                        <TableCell align='right'>kr.   850,00</TableCell>
                    </TableRow>
                </Table>
            </Box>

            <Box sx={{paddingBottom: '50px'}}>
                <Table sx={{width: '1000px', margin: 'auto'}}>
                    <TableRow>
                        <TableCell>  <b>Online</b> </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'> Opfølgning online konsultation </TableCell>
                        <TableCell align='right'> kr.   750,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>Opfølg online konsultation inkl. kostplan</TableCell>
                        <TableCell align='right'>kr.   850,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>3 x online konsultation</TableCell>
                        <TableCell align='right'> kr.   2000,00</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='left'>3 x online konsultation inkl. kostplan</TableCell>
                        <TableCell align='right'>kr.    2300,00</TableCell>
                    </TableRow>
                </Table>
            </Box>
        </div>
    );
};

export default Priser;