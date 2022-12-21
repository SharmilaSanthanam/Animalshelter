import React, { useState, useEffect } from "react";
import { Box, Grid, NativeSelect, TextField, Button, Card, CardContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { NavLink } from 'react-router-dom';
import { USER_DATA } from "./data";

const idb =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const createCollectionsInIndexedDB = () => {
  if (!idb) {
    console.log("This browser doesn't support IndexedDB");
    return;
  }
  // console.log(idb);

  const request = idb.open("GivepetData", 8);

  request.onerror = function (event) {
    console.error("An error occurred with IndexedDB");
    console.error("Error", event);
  };

  request.onupgradeneeded = function (event) {
    var db = request.result;

    if (!db.objectStoreNames.contains("userData")) {
      var objectStore = db.createObjectStore("userData", {
        keyPath: "id"
      });

      objectStore.createIndex("users", "users", {
        unique: false,
      });
    }

  };

  request.onsuccess = function () {
    console.log("Database opened successfully");

    const db = request.result;

    var tx = db.transaction(["userData"], "readwrite");
    var userData = tx.objectStore("userData");

    USER_DATA.forEach((item) => userData.add(item));

    return tx.complete;
  };
};

const Givepet = () => {

  const [show, setShow] = useState(true);
  const [allUsers, setAllUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');

  useEffect(() => {
    createCollectionsInIndexedDB();
    getAllData();
  }, []);

  const getAllData = () => {
    const dbPromise = idb.open("GivepetData", 8);

    dbPromise.onsuccess = () => {
      const db = dbPromise.result;

      var tx = db.transaction(["userData"], "readonly");
      var userData = tx.objectStore("userData");
      const users = userData.getAll();

      users.onsuccess = (query) => {
        setAllUsers(query.srcElement.result);
      };

      users.onerror = (query) => {
        alert("Error ocurred while loading data ")
      };

      tx.oncomplete = function (event) {
        db.close();
      };
    };
  };

  const handleSubmit = (event) => {
    const dbPromise = idb.open("GivepetData", 8);
    if (name && email && phone) {
      dbPromise.onsuccess = () => {
        const db = dbPromise.result;

        var tx = db.transaction(["userData"], "readwrite");
        var userData = tx.objectStore("userData");

        console.log(userData);

        const users = userData.put({
          id: allUsers?.length + 1,
          name,
          email,
          phone,
        });

        console.log("add");
        users.onsuccess = () => {
          tx.oncomplete = () => {
            db.close();
          };

        };
        users.onerror = (event) => {
          console.log(event);
          alert("Error occured");
        }
      }
    };
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
              <FormControl sx={{ width: "100%" }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{ color: "red" }} required>
                  <span style={{ color: "black" }}>Pet Type</span>
                </InputLabel>
                <NativeSelect
                  style={{ border: "solid 2px lightgrey" }}
                  defaultValue={10}
                  inputProps={{
                    name: 'pet',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Cat</option>
                  <option value={20}>Parrot</option>
                  <option value={30}>Dog</option>
                </NativeSelect>
              </FormControl>
            </Box>

            <Box sx={{ marginBottom: "1rem", marginRight: "16rem" }}>
              <FormControl sx={{ width: "100%" }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native" style={{ color: "red" }} required>
                  <span style={{ color: "black" }}>Breed</span>
                </InputLabel>
                <NativeSelect
                  style={{ border: "solid 2px lightgrey" }}
                  defaultValue={10}
                  inputProps={{
                    name: 'breed',
                    id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Persian cat</option>
                  <option value={20}>German Shepherd</option>
                  <option value={30}>Lab</option>
                  <option value={40}>Macaw</option>
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
                  onClick={handleSubmit()}
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