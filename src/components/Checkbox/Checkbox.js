import {Box, Checkbox, FormControlLabel, TextField}  from '@material-ui/core'
import React, { useState } from 'react'

// import ButtonStyled from '../MyButton/ButtonStyled'

// import {makeStyles} from '@material-ui/core/styles'

// import SaveIcon  from '@material-ui/icons/Save'

// const useStyles = makeStyles({
//   root:{
//     background:`linear-gradient(45deg, #FE6BBB, #FFBE53)`,
//     border:0,
//     borderRadius: 10,
//     color:'white',
//     padding: '0 30px',
//     marginBottom:'8px'
//   }
// })

// function ButtonStyled(){
//   const classes = useStyles()
//   return (
//     <>
//       <Box>
//         <Button className={classes.root}>
//           Test Styled Button
//         </Button>
//       </Box>
//     </>
//   )
// }
const CheckboxExample = () => {
  const [checked, setChecked]= useState(true)
  return (
    <Box>
      <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          // icon={<Delete />}
          // checkedIcon={<Save />}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        }
      label='En cochant cette case vous certifiez avoir lu les CGV'
    />
  </Box>
  )
}

export default CheckboxExample
