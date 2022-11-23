import { ArrowDownward } from '@mui/icons-material';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import React from 'react';


const Header = ({ Data }) => {


  return (
    <Box alignContent={"center"} textAlign={'center'}
      id='home'
      sx={{
        mx: "auto",
        p: "10%",
        color: "white"
      }}
    >

      <Grid container rowSpacing={2} direction="column"
        alignContent={'center'}
        mx={'auto'}

        p={4}
        justifyContent={'center'}
      >
        <Grid item >

          <Grid item>
            <Typography p={2} variant="h5">

              Hi, i am </Typography>
          </Grid>
        </Grid>
        <Grid item>

          <Typography variant={'h3'} justifyContent={'center'} textTransform='uppercase'>
            {Data.name}
          </Typography>

        </Grid>
        <Grid item>

          <Typography variant="h5">
            A
            {Data.profession + Data.myLikes.slice(0, 55)}
            < br />
            {Data.myLikes.slice(55, 150)}
          </Typography>
        </Grid>
      </Grid>
      <IconButton aria-label="btn-icon" pb={5} pt={10}>
        <ArrowDownward sx={{ color: "white", }} />
      </IconButton>
    </Box>
  );
};

export default Header;
