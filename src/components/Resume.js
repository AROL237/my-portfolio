import { Button, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Resume({ Data }) {
    return (
        <Box
            id="resume"
            alignContent={'center'}
            alignItems={"center"}
            textAlign={"center"}
            p={4}

        >

            <Typography
                variant={"h3"} align={'center'}>
                Resume
            </Typography>

            <Button
                component={Link}
                href={Data.resumeUrl}
                variant={"contained"}
                size='large'
                sx={{
                    mt: 5,
                    textAlign: 'center',
                    alignContent: "center",
                    alignSelf: 'center',
                    mx: 'auto'
                }}
                color='info'>
                Click here
            </Button>
        </Box>
    )
}
