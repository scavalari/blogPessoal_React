import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='texto' >Entre em contato comigo! </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/scavalari" target="_blank">
                                <GitHubIcon className='iconsG'/>
                            </a>
                            <a href="https://www.linkedin.com/in/ferreirasc09/" target="_blank">
                                <LinkedInIcon className='iconsL'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2' >
                        <Box paddingTop={2} >
                            <Typography variant="subtitle2" align="center" gutterBottom className='texto' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                                <Typography variant="subtitle2" gutterBottom className='texto' align="center">FullStack Developer Stephanie Ferreira</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;