import React from 'react'

import styled from 'styled-components'

const _Button = styled.label`
  width: 100%;
  display: inline-block;
  border: 0;
  outline: 0;
  padding: 8px 0px;
  text-align: center;
  border-radius: 8px;
  background-color: rgba(255,255,255,0.05);
  color: #ececec;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.25em;
`

function Button({ onChange, children }) {
  return (
    <div style={{width: '100%', margin: 0}}>
      <_Button for="file">{children}</_Button>
      <input id="file" type="file" name="file" onChange={onChange} style={{display: 'none'}}></input>
    </div>
  )
}

export default Button