import {
  Button,
  FormControl,
  FormGroup,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput
} from '@material-ui/core'
import{ Visibility, VisibilityOff } from '@material-ui/icons';

import {
  IconFlagFR,
} from 'material-ui-flags';
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // margin: {
  //   margin: theme.spacing(1),
  // },
  //  withoutLabel: {
  //    marginTop: theme.spacing(3),
  //  },
  textField: {
    width: '25ch',
  },
}));

const Signin = () => {
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
      <FormGroup>
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
       <FormGroup>
       <FormControl className={classes.margin} variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password"> Mot de passe</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
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
        </FormGroup>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Se connecter
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Mot de passe oublié?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Vous n'avez pas de compte? S'inscrire"}
            </Link>
          </Grid>
        </Grid>
    </div>
  )
}

export default Signin