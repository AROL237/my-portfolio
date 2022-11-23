import { LocationOnOutlined, Send, } from '@mui/icons-material'
import { Box, Button, Typography, ButtonGroup, Grid } from '@mui/material'
import React from 'react'

export default function Contact({ Data }) {
    const handleClick = (e) => {
        e.preventDefault()
        window.location.href = "mailto:" + Data.contacts.email;
        window.open()
    }



    return (
        <Box
            id="contact"
            bgcolor={"#1d5f99"}
            sx={{
                borderTopRightRadius: 3,
                borderTopLeftRadius: 3,
                boxShadow: 15
            }}
            p={5}
        >
            <Typography variant={'h4'} color={'white'} pb={3} align='center'>
                Contact
            </Typography>

            <Grid
                container
                spacing={10}
                direction="row"
                justifyContent="center"
                alignItems="left"
                alignContent="center"
                pb={2}
            >
                <Grid item>
                    <Grid
                        container
                        spacing={3}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap="wrap"

                    >
                        <Grid item>
                            <Typography variant='h6' align='center'>
                                Message me

                            </Typography>
                        </Grid>
                        <Grid item>
                            <ButtonGroup variant="contained" color="success" aria-label="contact-buttons">

                                <Button
                                    onClick={handleClick}
                                    startIcon={<Send />}
                                    size={'large'}
                                    sx={{ bgcolor: "#f2281d" }}
                                >{
                                        Data.contacts.email
                                    }</Button>
                            </ButtonGroup>
                        </Grid>
                        <Grid item>

                            <Typography variant='h6' align='center'>
                                Phone
                            </Typography>
                        </Grid>
                        <Grid item>

                            {Data.contacts.phone.map(item => <Typography color={'white'} variant={'h5'} key={[item]}>
                                {item}
                            </Typography>)}
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' align='center'>
                                Location
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} color={'white'}>
                                {<LocationOnOutlined sx={{ color: 'white' }} />}  {Data.location}
                            </Typography>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


        </Box >
    )
}
