import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React from "react";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </div>
  );
}

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </Grid>

          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              onClick={(event) => {
                navigate("/details");
              }}
            >
              maak Route
            </Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
}

function Details() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={4}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Grid item>
                  <p>prijs</p>
                </Grid>
                <Grid item>
                  <p>tijd en km</p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <p>map</p>
            </Grid>
          </Grid>
        </Box>
      </main>
    </>
  );
}

export default App;
