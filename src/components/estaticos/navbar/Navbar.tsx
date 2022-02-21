import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar className='nav' >
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" className='blog'>
                            Blog Pessoal de uma
                        </Typography>
                        <Typography variant="h4" className='blog'> 
                            WalkerDev FullStack
                        </Typography>
                    </Box>

                    <Box className='nav2'>
                        <Box mx={1} className='cursor' >
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Novo Tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;