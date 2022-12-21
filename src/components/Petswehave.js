import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Catdata from '../catdata.json';
import Dogdata from '../dogdata.json';
import { Table, Divider, TableCell, TableHead, TableBody, TableRow, TableContainer } from '@mui/material';
import { Box, Grid, NativeSelect, TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

  const Petswehave = ({theadData, tbodyData}) => {
      const [value, setValue] = useState('');
      const [show, setShow] = useState(true);
    
      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    
  return (

        <Grid sx={{ bgcolor: "#EBF9FF" }}>
      <Card style={{ backgroundColor: "#EBF9FF", maxWidth: 580, padding: "20px 5px", margin: "0 auto" }}>
      <IconButton
          style={{ position: "absolute",  maxWidth: "580", marginLeft: "15rem" }}
          onClick={() => setShow(false)}
        >
           <NavLink to="/"><CloseIcon /></NavLink>
        </IconButton>
        <CardContent>
          <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h4" align="start">
            What all pets do we have ?
          </Typography>
         
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: "none", borderColor: 'divider' }}>
          <TabList   defaultvalue="1" onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="DOGS" value="1" />
                       <Divider
              orientation="vertical"
               style={{ height: 30, alignSelf: "center", color: "black" }}
             />
            <Tab label="CATS" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
         <TableContainer>
           <Table>
                     <TableHead>
                         <TableRow>
                             <TableCell>Name</TableCell>
                             <TableCell>Breed</TableCell>
                             <TableCell>Age (months)</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                       {Dogdata.map((list, index) => (
                        <TableRow key={index} >
                            <TableCell style={{borderBottom:"none"}}>{list.Name}</TableCell>
                            <TableCell style={{borderBottom:"none"}}>{list.Breed}</TableCell>
                            <TableCell style={{borderBottom:"none"}}>{list.Age}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </TabPanel>
        <TabPanel value="2">
        <TableContainer>
           <Table>
                     <TableHead>
                         <TableRow>
                             <TableCell>Name</TableCell>
                             <TableCell>Breed</TableCell>
                             <TableCell>Age (months)</TableCell>
                         </TableRow>
                     </TableHead>
                     <TableBody>
                       {Catdata.map((list, index) => (
                        <TableRow key={index} >
                            <TableCell style={{borderBottom:"none"}}>{list.Name}</TableCell>
                            <TableCell style={{borderBottom:"none"}}>{list.Breed}</TableCell>
                            <TableCell style={{borderBottom:"none"}}>{list.Age}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                </Table>
            </TableContainer>
          </TabPanel>
      </TabContext>
    </Box>
    </CardContent>
    </Card>
     </Grid>
  );
}
export default Petswehave



// // import React from 'react';
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material';
// import Tabs from '@mui/material/Tabs';
// import { Tab } from '@mui/material/Tab';
// import { Table,LinkTab, TableCell, TableHead, TableBody, TableRow, TableContainer } from '@mui/material';
// import { Box, Grid, Divider, NativeSelect, TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import Catdata from '../catdata.json';
// import Dogdata from '../dogdata.json';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


// type TabPanelProps = {
//   children: React.ReactNode;
//   index: number;
//   value: number;
// };

// const TabPanel = styled((props: TabPanelProps) => {
//   const { children, value, index, ...other } = props;

// // function TabPanel(props) {
// //   const { children, value, index, ...other } = props;

// //   return (
// //     <div
// //       role="tabpanel"
// //       hidden={value !== index}
// //       id={`vertical-tabpanel-${index}`}
// //       aria-labelledby={`vertical-tab-${index}`}
// //       {...other}
// //     >
// //       {value === index && (
// //         <Box sx={{ p: 3 }}>
// //           <Typography>{children}</Typography>
// //         </Box>
// //       )}
// //     </div>
// //   );
// // }

// // TabPanel.propTypes = {
// //   children: PropTypes.node,
// //   index: PropTypes.number.isRequired,
// //   value: PropTypes.number.isRequired,
// // };

// // function a11yProps(index) {
// //   return {
// //     id: `vertical-tab-${index}`,
// //     'aria-controls': `vertical-tabpanel-${index}`,
// //   };
// // }
// // const AntTabs = styled(Tabs)({
// //   borderBottom: '1px solid #e8e8e8',
// //   '& .MuiTabs-indicator': {
// //     backgroundColor: '#1890ff',
// //   },
// // });
// // const getHeadings = () => {
// // return Object.keys(Catdata[0]);
// //   }

// // const StyledTabs = styled((props) => (
// //   <Tabs
// //     {...props}
// //     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
// //   />
// // ))({
// //   '& .MuiTabs-indicator': {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     backgroundColor: 'transparent',
// //   },
// //   '& .MuiTabs-indicatorSpan': {
// //     maxWidth: 40,
// //     width: '100%',
// //     backgroundColor: '#635ee7',
// //   },
// // });

// // const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
// //   ({ theme }) => ({
// //     textTransform: 'none',
// //     fontWeight: theme.typography.fontWeightRegular,
// //     fontSize: theme.typography.pxToRem(15),
// //     marginRight: theme.spacing(1),
// //     color: 'black',
// //     '&.Mui-selected': {
// //       color: 'black',
// //     },
// //     '&.Mui-focusVisible': {
// //       backgroundColor: 'rgba(100, 95, 228, 0.32)',
// //     },
// //   }),
// // );



// const Petswehave = ({theadData, tbodyData}) => {
//   const [value, setValue] = React.useState(0);
//   const [show, setShow] = useState(true);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Grid sx={{ bgcolor: "#EBF9FF" }}>
//       <Card style={{ backgroundColor: "#EBF9FF", maxWidth: 580, padding: "20px 5px", margin: "0 auto" }}>
//       <IconButton
//           style={{ position: "absolute",  maxWidth: "580", marginLeft: "15rem" }}
//           onClick={() => setShow(false)}
//         >
//           <CloseIcon />
//         </IconButton>
//         <CardContent>
//           <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h4" align="start">
//             What all pets do we have ?
//           </Typography>
//           <Box>
//             <Box>
//           <TabContext value={value}>
//           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//     <TabList onChange={handleChange} aria-label="lab API tabs example">
//     <Tab label="DOGS" value="1"/>
//           <Divider
//               orientation="vertical"
//               style={{ height: 30, alignSelf: "center", color: "black" }}
//             />
//           <Tab label="CATS" value="2"/>

         
       
      
//             {/* <Tabs
//   value={value}
//   onChange={handleChange}
//   textColor="secondary"
//   indicatorColor="secondary"
//   aria-label="secondary tabs example"
// > */}
//   </TabList>
//   </Box>

// <TabPanel value="1" >
// <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Breed</TableCell>
//                             <TableCell>Age (months)</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {Dogdata.map((list, index) => (
//                         <TableRow key={index} >
//                             <TableCell style={{borderBottom:"none"}}>{list.Name}</TableCell>
//                             <TableCell style={{borderBottom:"none"}}>{list.Breed}</TableCell>
//                             <TableCell style={{borderBottom:"none"}}>{list.Age}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
// </TabPanel>
       
// <TabPanel value="2" >
// <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Name</TableCell>
//                             <TableCell>Breed</TableCell>
//                             <TableCell>Age (months)</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {Catdata.map((list, index) => (
//                         <TableRow key={index} >
//                             <TableCell style={{borderBottom:"none"}}>{list.Name}</TableCell>
//                             <TableCell style={{borderBottom:"none"}}>{list.Breed}</TableCell>
//                             <TableCell style={{borderBottom:"none"}}>{list.Age}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
// </TabPanel>
// </TabContext>   
//         <Box sx={{ p: 3 }} />
//       </Box>
//     </Box>
//     </CardContent>
//       </Card>
//     </Grid>
//   );
// }

// export default Petswehave