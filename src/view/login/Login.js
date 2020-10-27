import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import {blueGrey} from '@material-ui/core/colors';

const ColorButton = withStyles(theme =>({
    root:{
        color: '#fff',
        backgroundColor: blueGrey[800],
        '& hover':{
            backgroundColor: blueGrey[900]
        }
    }
}))(Button)


export class Login extends Component {
    render() {
        return (
            <div>
                <Container Component = "main"  maxWidth = "xs">
                    <div className = "mt-3 mt-md-5">
                        <div className = "text-center">
                            <img src = "elogroup.png"/>
                            <Typography className = "mt-3 font-weight-normal" component ="h1"variant = "h6" > Cadastro de leads </Typography>
                        </div>
                        <div className = "mt-4">
                            <TextField 
                            variant = "outlined"
                            margin = "normal"
                            required
                            fullWidth
                            id = "usuario"
                            label = "Usuário"
                            name = "username"
                            type = "usuario"
                            />
                               <TextField 
                            variant = "outlined"
                            margin = "normal"
                            required
                            fullWidth
                            id = "passoword"
                            label = "Passoword"
                            name = "passoword"
                            type = "passoword"
                            />
                                 <TextField 
                            variant = "outlined"
                            margin = "normal"
                            required
                            fullWidth
                            id = "passoword"
                            label = "Confirmação passoword"
                            name = "passoword"
                            type = "passoword"
                            />
                           
                            <Link href = "/register">
                                <ColorButton
                                type = "button"
                                fullWidth
                                size = "large"
                                variant = "contained"
                                className = "mt-md-4"
                                >
                                    Registrar
                                </ColorButton>

                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => ({


})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

/*
<Button
type = "button"
variant = "contained"
fullWidth
color = "primary"
size = "large"
className = "mb-3 mb-md-4 mt-4 "
>
    Cadastrar
</Button>
*/