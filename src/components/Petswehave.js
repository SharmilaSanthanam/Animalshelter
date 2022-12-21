import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Catdata from '../catdata.json';
import Dogdata from '../dogdata.json';
import { Table, Divider, TableCell, TableHead, TableBody, TableRow, TableContainer } from '@mui/material';
import { Box, Grid, Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const Petswehave = ({ theadData, tbodyData }) => {
  const [value, setValue] = useState('');
  const [show, setShow] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Grid sx={{ bgcolor: "#EBF9FF" }}>
      <Card style={{ backgroundColor: "#EBF9FF", maxWidth: 580, padding: "20px 5px", margin: "0 auto" }}>

        <IconButton
          style={{ position: "absolute", maxWidth: "580", marginLeft: "15rem" }}
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
                <TabList defaultvalue="1" onChange={handleChange} aria-label="lab API tabs example">
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
                          <TableCell style={{ borderBottom: "none" }}>{list.Name}</TableCell>
                          <TableCell style={{ borderBottom: "none" }}>{list.Breed}</TableCell>
                          <TableCell style={{ borderBottom: "none" }}>{list.Age}</TableCell>
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
                          <TableCell style={{ borderBottom: "none" }}>{list.Name}</TableCell>
                          <TableCell style={{ borderBottom: "none" }}>{list.Breed}</TableCell>
                          <TableCell style={{ borderBottom: "none" }}>{list.Age}</TableCell>
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