import { Box, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

export default function Education({ Data }) {
    return (
        <Box
            id="education"
            sx={{
                backgroundColor: '#afdaed',

                p: 8,

            }}

        >

            <Typography variant='h3' pb={5} align='center'>
                Education
            </Typography>
            <Table sx={{ boxShadow: 10, }} >

                <TableHead sx={{ bgcolor: "darkolivegreen", color: "white" }} >
                    <TableRow sx={{ alignContent: "justify", alignItems: "center", }}>
                        <TableCell align='center'>
                            <Typography variant={'h6'} >
                                <b> Degree</b>
                            </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography variant={'h6'}>
                                <b>  Field Of Study</b>
                            </Typography>
                        </TableCell>
                        <TableCell align='center'>
                            <Typography variant={'h6'}>
                                <b>  Other Info</b>
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Data.education.map(item => <TableRow key={item.name}>
                        <TableCell>
                            <Typography
                                variant={"h6"} align={"center"}
                            >
                                {item.name}
                            </Typography>


                        </TableCell>
                        <TableCell>
                            <Typography variant='body1' align='center' >
                                {item.fieldStudy}
                            </Typography>

                        </TableCell>
                        <TableCell align='left'>
                            <Typography
                                variant={"body1"}
                            >
                                <i> school:</i> <b>{item.school}</b>
                            </Typography>
                            <Typography
                                variant={"body1"}
                            >
                                <i> Obtain in:</i> <b>{item.ComplitionData}</b>
                            </Typography>
                        </TableCell>
                    </TableRow>
                    )}
                </TableBody>
            </Table>
        </Box>
    )
}
