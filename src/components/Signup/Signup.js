import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
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
      <FormGroup  style ={{width: '65%', margin:'0 auto', }}>
      <TextField
          style ={{marginBottom:'16px'}}
          label='Nom'
          placeholder='Votre nom'
          variant="outlined"
         />
      <TextField
          style ={{marginBottom:'16px'}}
          label='Prénom'
          placeholder='Votre prénom'
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-flag">(exemple +33 6 xx xx xx xx)</InputLabel>
          <OutlinedInput
            id="outlined-adornment-flag"
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
       </FormGroup>
       <br></br>
       <FormGroup  style ={{width: '65%', margin:'0 auto'}}>
       <TextField
          style ={{marginBottom:'16px'}}
          label='E-mail'
          placeholder='Votre e-mail'
          variant="outlined"
         />
       <FormControl className={classes.margin} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password"> Mot de passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.email ? 'text' : 'password'}
            value={values.password}
            // placeholder='Mot de Passe'
            onChange={handleChange('email')}
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
        </FormGroup>
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
