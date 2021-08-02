import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  // Link,
  OutlinedInput,
  TextField,
  Typography
} from '@material-ui/core'
import{ Visibility, VisibilityOff } from '@material-ui/icons';

import Checkbox from '../Checkbox/Checkbox';
import {
  IconFlagFR,
} from 'material-ui-flags';
import React from 'react'
import useStyles from './styles'

const Signup = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    lastname:'',
    firstname:'',
    tel: '',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('VALUES', values);
  }

  return (
    <div>

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
          name='lastname'
          value={values.lastname}
          onChange={handleChange('lastname')}
          variant="outlined"
         />
      <TextField
          style ={{marginBottom:'16px'}}
          label='Prénom'
          placeholder='Votre prénom'
          name='firstname'
          value={values.firstname}
          onChange={handleChange('firstname')}
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-flag">(exemple +33 6 xx xx xx xx)</InputLabel>
          <OutlinedInput
            id="outlined-adornment-flag"
            name='tel'
            value={values.tel}
            onChange={handleChange('tel')}
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
          style ={{marginBottom:'16px', marginTop:'16px'}}
          label='E-mail'
          placeholder='Votre e-mail'
          name='email'
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password"> Mot de passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name='password'
            // placeholder='Mot de Passe'
            onChange={handleChange('password')}
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
    </div>
  )
}

export default Signup
