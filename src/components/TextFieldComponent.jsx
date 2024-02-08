import React from 'react'

const TextFieldComponent = ({id,label,name,autoComplete,value}) => {
  return (
    <TextField
              required
              fullWidth
              id="last"
              label="Last Name"
              name="last"
              autoComplete="family-name"
              value={inputsValue.last}
              onChange={handleInputsChange}
    />
  )
}

export default TextFieldComponent
