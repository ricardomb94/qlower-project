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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './assets/media/logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },

  appBar: {
    borderBottom: `0 ${theme.palette.divider}`,
    marginBottom:'35px'
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },

  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  mainContainer:{
    padding: '23px',
    textAlign:"center",
    boxShadow:' 0px 0px 10px rgb(0 0 0 / 25%)',
    borderRadius: '20px'
  },
  cardTitle: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '35px',
    lineHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    textAlign:' center',
    color: '#081244',
    margin: '0 0 16px 0'
  }
}));


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
            <Typography variant="h3" className={classes.cardTitle} >
              Profitez de Qlower, l'assistant gestion locative intelligent !
            </Typography>
            <CardContent>
              <Signin/>
            </CardContent>
          </Card>

        </Grid>
      </Container>
    </React.Fragment>
  );
}