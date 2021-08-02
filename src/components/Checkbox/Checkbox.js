import { Checkbox, FormControlLabel, Link }  from '@material-ui/core'
import React, { useState } from 'react'

const CheckboxExample = () => {
  const [checked, setChecked]= useState(false)
  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        }
      label='En cochant cette case vous certifiez avoir lu les'
    />

    <Link  href="#" variant="body2">{"conditions générales de vente"}</Link>

</>
  )
}

export default CheckboxExample
