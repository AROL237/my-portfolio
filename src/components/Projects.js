import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Link, styled, Typography } from '@mui/material'
import React from 'react'

export default function Projects({ Data, PersonalData }) {
    const ProjectCard = styled(Card)({
        maxWidth: 310,
        backgroundColor: '#f5e6f0',
        mx: "auto"
    })

    return (
        <Box
            id="projects"
            p={8}
            textAlign={'center'}
            backgroundColor="white"
            mx="auto"
        >
            <Typography variant='h3' align='center' pb={8}>
                Projects
            </Typography>
            <Grid container spacing={3}
                direction={'row'}
                justifyContent="center"
                alignItems="center"
                alignContent="center"
                wrap='wrap'

            >
                {
                    Data.map(item =>
                        <Grid item
                            lg={4}
                            key={item.name}

                        >
                            <ProjectCard >
                                <CardHeader title={
                                    <Typography variant='h6' align='center'>
                                        {item.name}
                                    </Typography>
                                }
                                />
                                <CardMedia
                                    component={'img'}
                                    image={item.image}
                                    alt="project-image"
                                    sx={{
                                        maxHeight: 100
                                    }}
                                />
                                <CardContent>
                                    <Typography className='project-description' variant='body2'>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                <CardActions >
                                    <Button
                                        component={Link}
                                        href={item.url}
                                        target={'_blank'}
                                        variant='contained'
                                    >
                                        view
                                    </Button>
                                </CardActions>
                            </ProjectCard>
                        </Grid>
                    )
                }
            </Grid>
        </Box >
    )
}
