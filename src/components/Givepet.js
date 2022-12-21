import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Grid, NativeSelect, TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useIndexedDB } from "react-indexed-db";

const Givepet = () => {
  const { add } = useIndexedDB("GivePetUser");
  const [show, setShow] = useState(true);
    const [pettype, setPettype] = useState("");
  const [breed, setBreed] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');

  const handleSubmit = (event) => {
    if (pettype && breed && name && email && phone) {
      add({
        pettype: pettype,
        breed: breed,
        name: name,
        email: email,
        phone: phone
      }).then(
        (event) => {
          console.log("Data added: ", event);
        },
        (error) => {
          console.log(error);
        }
      );
    }
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
            Give Away
          </Typography>

          <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h5" align="start">
            What pet do you want to give away ?
          </Typography>

          <form>
            <Box sx={{ marginBottom: "1rem", marginRight: "16rem" }}>
              <FormControl sx={{ width: "100%" }} onChange={(e) => setPettype(e.target.value)} >
                <InputLabel variant="standard"
                  htmlFor="uncontrolled-native" style={{ color: "red" }} required>
                  <span style={{ color: "black" }}>Pet type</span>
                </InputLabel>
                <NativeSelect
                  style={{ border: "solid 2px lightgrey", borderBottom: "none" }}

                  inputProps={{
                    name: 'pet',
                    id: 'uncontrolled-native',
                    required: "true",
                  }}
                >
                  <option disabled selected>
                    Cat
                  </option>
                  <option value="Cat">Cat</option>
                  <option value="Parrot">Parrot</option>
                  <option value="Dog">Dog</option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Box sx={{ marginBottom: "1rem", marginRight: "16rem" }}>
              <FormControl sx={{ width: "100%" }} onChange={(e) => setBreed(e.target.value)}>
                <InputLabel variant="standard"
                  htmlFor="uncontrolled-native" style={{ color: "red" }} required>
                  <span style={{ color: "black" }}>Breed</span>
                </InputLabel>
                <NativeSelect
                  style={{ border: "solid 2px lightgrey", borderBottom: "none" }}
                 
                  inputProps={{
                    name: 'breed',
                    id: 'uncontrolled-native',
                    required: "true",
                  }}
                >
                  <option disabled selected>
                  Persian cat
                  </option>
                  <option value="Persian cat">Persian cat</option>
                  <option value="German Shepherd">German Shepherd</option>
                  <option value="Lab">Lab</option>
                  <option value="Macaw">Macaw</option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Typography sx={{ marginBottom: "1rem" }} gutterBottom variant="h5" align="start">
              Please fill in your details
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={12}>
                <InputLabel variant="standard" sx={{ textAlign: "start", fontFamily: "Montserrat" }} >
                  Full Name <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField type="name" name="name" placeholder="Enter name" label="Name" onChange={(e) => setName(e.target.value)} value={name} style={{ width: "55%", marginRight: "20rem", marginBottom: "1rem" }} required />
              </Grid>
              <Grid item xs={12}>
                <InputLabel variant="standard" sx={{ textAlign: "start" }}>
                  Email <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField type="email" name="email" placeholder="Enter email" label="Email" onChange={(e) => setEmail(e.target.value)} value={email} variant="outlined" style={{ width: "55%", marginRight: "20rem", marginBottom: "1rem" }} required />
              </Grid>
              <Grid item xs={12}>
                <InputLabel variant="standard" sx={{ textAlign: "start" }}>
                  Phone <span style={{ color: "red" }}>*</span>
                </InputLabel>
                <TextField type="number" name="phone" placeholder="Enter phone number" label="Phone" variant="outlined" onChange={(e) => setPhone(e.target.value)} value={phone} style={{ width: "55%", marginRight: "20rem", marginBottom: "1rem" }} required />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit"
                  onClick={handleSubmit}
                  variant="contained" style={{ color: "white", backgroundColor: "#FF6584", borderRadius: "5px", width: "15rem", marginLeft: "18rem" }} fullWidth>REQUEST FOR ADOPTION</Button>
              </Grid>
            </Grid>
          </form>

        </CardContent>
      </Card>
    </Grid>
  );
}
export default Givepet