// import 'fontsource-roboto'

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

// import CardActions from '@material-ui/core/CardActions';

// import CardHeader from '@material-ui/core/CardHeader';









// import StarIcon from '@material-ui/icons/StarBorder';
// import Box from '@material-ui/core/Box';


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
  // image:{
  //   padding:'26 126'
  // },
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
  // Card: {
  //   boxShadow:' 0px 0px 10px rgb(0 0 0 / 25%)',

  // },
  mainContainer:{
    padding: '23px',
    textAlign:"center",
    // color: '#081244',
    boxShadow:' 0px 0px 10px rgb(0 0 0 / 25%)',
    borderRadius: '20px'
  },
  cardTitle: {
    // fontSize:'26px',
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

// const tiers = [
//   // {
//   //   title: 'Free',
//   //   price: '0',
//   //   description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
//   //   buttonText: 'Sign up for free',
//   //   buttonVariant: 'outlined',
//   // },
//   // {
//   //   title: 'Pro',
//   //   subheader: 'Most popular',
//   //   price: '15',
//   //   description: [
//   //     '20 users included',
//   //     '10 GB of storage',
//   //     'Help center access',
//   //     'Priority email support',
//   //   ],
//   //   buttonText: 'Get started',
//   //   buttonVariant: 'contained',
//   // },
//   // {
//   //   title: 'Enterprise',
//   //   price: '30',
//   //   description: [
//   //     '50 users included',
//   //     '30 GB of storage',
//   //     'Help center access',
//   //     'Phone & email support',
//   //   ],
//   //   buttonText: 'Contact us',
//   //   buttonVariant: 'outlined',
//   // },
// ];


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
      <Container  maxWidth="md" boxShadow={8}>
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