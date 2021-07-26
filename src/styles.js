import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
    margin: '0 0 16px 0',
    marginTop: '50px'
  }
}));
