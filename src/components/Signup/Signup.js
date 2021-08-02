import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  TextField,
  Typography
} from '@material-ui/core'
import React, { Fragment, useState } from 'react'
import{ Visibility, VisibilityOff } from '@material-ui/icons';

import Checkbox from '../Checkbox/Checkbox';
import {
  IconFlagFR,
} from 'material-ui-flags';
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    // lastname:'',
    // firstname:'',
    // tel: '',
    // password: '',
    showPassword: false,
  });
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };


  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault()
  }


  const onSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
    return;
    }

    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  const onCreate = () => {
  setSnackbarOpen(true);
  setSnackbarMessage(`Bienvenue ${firstname} ${lastname}. Merci d'avoir choisi Qlower `);

  };

  return (
    <Fragment>

      <Grid>
        <Typography variant="h3" className={classes.cardTitle} >
            Devenez un membre Qlower !
        </Typography>

        <Typography variant="subtitle2" component='p' style ={{marginBottom:'10px'}} >
            Créez un compte
        </Typography>
      </Grid>
      <FormGroup
        style ={{width: '65%', margin:'0 auto', }}
        onSubmit={handleSubmit}
        >
      <TextField
          style ={{marginBottom:'16px'}}
          label='Nom'
          placeholder='Votre nom'
          value={lastname}
          InputProps={{ name: 'lastname' }}
          onChange={e => setLastname(e.target.value)}
          variant="outlined"
          required
         />
      <TextField
          style ={{marginBottom:'16px'}}
          label='Prénom'
          placeholder='Votre prénom'
          InputProps={{ name: 'firstname' }}
          value={firstname}
          onChange={e => setFirstname(e.target.value)}
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-flag">(exemple +33 6 xx xx xx xx)</InputLabel>
          <OutlinedInput
            id="outlined-adornment-flag"
            // name='tel'
            inputProps={{name:'tel'}}
            value={tel}
            onChange={e => setTel(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                  <IconButton>
                    <IconFlagFR />
                  </IconButton> +33
              </InputAdornment>}
            labelWidth={205}
          />
       </FormControl>
       {/* </FormGroup> */}
       <br></br>
       {/* <FormGroup  style ={{width: '65%', margin:'0 auto'}}> */}
       <TextField
          style ={{marginBottom:'16px', marginTop:'2px'}}
          label='E-mail'
          placeholder='Votre e-mail'
          value={email}
          inputProps={{name:'email'}}
          onChange={e => setEmail(e.target.value)}
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password"> Mot de passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={password}
            inputProps={{name:'password'}}
            // placeholder='Mot de Passe'
            onChange={e => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={100}
          />
        </FormControl>
        <Grid>
            <Button
              onClick={onCreate}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Créer mon compte
            </Button>
          </Grid>
        </FormGroup>


        {/* <Grid>
          <Grid item>
            <Link href="#" variant="body2" className={classes.linkItems}>
              Mot de passe oublié?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2" className={classes.linkItems}>
              {"Vous n'avez pas de compte? S'inscrire"}
            </Link>
          </Grid>
        </Grid> */}
        <Checkbox/>
        <Snackbar
          open={snackbarOpen}
          message={snackbarMessage}
          onClose={onSnackbarClose}
          autoHideDuration={4000}
        />
    </Fragment>
  )
}

export default Signup
