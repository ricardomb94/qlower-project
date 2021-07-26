import {Box, Checkbox, FormControlLabel, TextField}  from '@material-ui/core'
import React, { useState } from 'react'


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
