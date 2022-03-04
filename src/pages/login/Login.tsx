import { Grid, Box, Typography, TextField, Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import './Login.css';
import twd3 from "../../assets/img/twd3.jpg"


function Login(){
    return(
        <Grid container direction="row" justifyContent="center" alignItems="center" className='imagem'>
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant="h3" gutterBottom color="textPrimary" component='h3' align="center" className="font" > Entrar </Typography>
                        <TextField id='usuario' label='usuario' variant= 'outlined' name='usuario' margin="normal" fullWidth></TextField>
                        <TextField id='senha' label='senha' variant= 'outlined' name='senha' margin="normal" type='password' fullWidth></TextField>
                        <Box marginTop={2} textAlign="center">
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary' >
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display="flex" justifyContent="center" marginTop={2} >
                        <Box marginRight={1} >
                            <Typography variant="subtitle1" gutterBottom align="center" className="font">Ainda não é um Walker?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                        <Typography variant="subtitle1" gutterBottom align="center" className="font" >Cadastre-se aqui</Typography>
                        </Link>
                    </Box>
                </Box>


            </Grid>
        </Grid>

    )
}

export default Login;