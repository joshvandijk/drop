import styled from 'styled-components'

export const TextInput = styled.input`
  background-color: rgba(255,255,255,0.05);
  color: #ececec;
  font-size: 1em;
  font-family: 'Montserrat';
  font-weight: 600;
  border: 0;
  border-radius: 8px;
  width: calc(100% - 32px);
  padding: 16px;
  margin: 8px 0px;
  outline: 0 !important;
  &::placeholder {
    color: #cecece;
  }
  
`