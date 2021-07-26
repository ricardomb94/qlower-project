import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Signin from './components/Signin/Signin'
 import Signup from './components/Signup/Signup'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './assets/media/logo.png';
import useStyles from './styles'

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <img
              src={logo}
              alt="Boutique"
              height="26 126"
              className={classes.image}
            />
          </Typography>
            <ButtonGroup>
              <Button href="#" color="primary" variant="contained" className={classes.link}>
                Devenir membre
              </Button>
              <Button href="#" color="primary" variant="outlined" className={classes.link}>
                Déja membre
              </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container  maxWidth="md">
        <Grid>
          <Card className={classes.mainContainer}>
            <CardContent>
              <Signup/>
            </CardContent>
          </Card>

        </Grid>
      </Container>
    </React.Fragment>
  );
}