// import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TrapFocus from '@mui/material/Unstable_TrapFocus';
// import Paper from '@mui/material/Paper';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { useState } from 'react';

// const CookieBanner: React.FunctionComponent = () => {
//   const [bannerOpen, setBannerOpen] = useState(true);

//   const closeBanner = () => {
//     setBannerOpen(false);
//   };
  
//   return(
//     <TrapFocus open disableAutoFocus disableEnforceFocus>
//         <Fade appear={false} in={bannerOpen}>
//           <Paper
//             role="dialog"
//             aria-modal="false"
//             aria-label="Cookie banner"
//             square
//             variant="outlined"
//             tabIndex={-1}
//             sx={{
//               position: 'fixed',
//               bottom: 0,
//               left: 0,
//               right: 0,
//               m: 0,
//               p: 2,
//               borderWidth: 0,
//               borderTopWidth: 1,
//             }}
//           >
//             <Stack
//               direction={{ xs: 'column', sm: 'row' }}
//               justifyContent="space-between"
//               gap={2}
//             >
//               <Box
//                 sx={{
//                   flexShrink: 1,
//                   alignSelf: { xs: 'flex-start', sm: 'center' },
//                 }}
//               >
//                 <Typography fontWeight="bold">This website uses cookies</Typography>
//                 <Typography variant="body2">
//                   example.com relies on cookies to improve your experience.
//                 </Typography>
//               </Box>
//               <Stack
//                 gap={2}
//                 direction={{
//                   xs: 'row-reverse',
//                   sm: 'row',
//                 }}
//                 sx={{
//                   flexShrink: 0,
//                   alignSelf: { xs: 'flex-end', sm: 'center' },
//                 }}
//               >
//                 <Button size="small" onClick={closeBanner} variant="contained">
//                   Allow all
//                 </Button>
//                 <Button size="small" onClick={closeBanner}>
//                   Reject all
//                 </Button>
//               </Stack>
//             </Stack>
//           </Paper>
//         </Fade>
//       </TrapFocus>
//   );
// }

// export default CookieBanner;