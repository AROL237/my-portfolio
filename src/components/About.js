import { Box, Typography, Grid, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import Resume from './Resume'

export default function About({ Data }) {
    return (
        <Box
            id={'about'}
            sx={{
                backgroundColor: '#B2B4B5',
                boxShadow: 5,
                py: 4,
            }}
        >

            <Typography
                variant={'h3'}
                align={'center'}
                p={5}
            >
                About me
            </Typography>
            <Grid container spacing={8}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                direction="row"
                wrap='wrap'   >
                <Grid item textAlign={"center"} sx={{
                    justifyContent: 'center',

                }}

                >
                    <Typography
                        variant='h5'
                        justifyContent={'center'}
                        sx={{
                            width: 500
                        }}
                    >
                        {Data.aboutMe}
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        spacing={2}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                        wrap='wrap'
                    >
                        <Grid item>
                            <Typography variant='h5' align='center'>
                                Tools
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box sx={{ width: 500, height: 500, }}>
                                <ImageList variant="quilted" cols={3} gap={8} >
                                    {Data.techImages.map((item) => (
                                        <ImageListItem key={[item]}>
                                            <img
                                                src={`${item}?w=248&fit=crop&auto=format`}
                                                srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                                alt={[item]}
                                                loading="lazy"
                                            />
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Box>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>


            <Resume Data={Data} />
        </Box >
    )
}
