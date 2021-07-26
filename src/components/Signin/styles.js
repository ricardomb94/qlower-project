import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({


    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      width: '25ch',
    },
    submit:{
      marginTop: '20px'
    },
    link: {
      marginTop: '10px, 15px',
    },
    cardTitle: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '2.2em;',
      lineHeight: '48px',
      display: 'flex',
      alignItems: 'center',
      textAlign:' center',
      color: '#081244',
      margin: '0 0 16px 51px',
      marginTop: '50px'
    },
    subtitle2:{
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '22px',
      textAlign: 'center',
      color: '#9396a6',
      margin: '6px 0 30px 0'
    }
  }));