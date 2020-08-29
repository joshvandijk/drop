import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  padding: ${({ small }) => small ? '8px 16px' : '24px'};
  border: 0;
  outline: 0;
  text-align: center;
  background-color: ${({ disabled }) => disabled ? 'rgba(50,50,50,0.3)' : '#be8bbe'};
  border-radius: 8px;
  color: ${({ disabled }) => disabled ? '#5a5a5a' : '#321032'};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1.25em;
  margin: ${({ small }) => small ? '0px' : '16px 0px'};
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.1) 4px 4px 16px'};
  &:hover {
    transform: ${({ disabled }) => disabled ? '' : 'scale(1.02) !important'};
    box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.15) 8px 8px 32px'};
  }
  &:active {
    transform: ${({ disabled }) => disabled ? '' : 'scale(1.01) !important'};
    box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.1) 6px 6px 24px'};
    background-color: ${({ disabled }) => disabled ? '' : '#9e4e9e'};
  }
`

export const SmallButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  border: 0;
  outline: 0;
  text-align: center;
  background-color: ${({ disabled }) => disabled ? 'rgba(50,50,50,0.6)' : 'rgba(255,255,255,0.05)'};
  border-radius: 8px;
  color: ${({ disabled }) => disabled ? '#5a5a5a' : '#ececec'};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1em;
  margin: '0px';
  transition: background-color 0.2s, box-shadow 0.2s, transform 0.2s;
  box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.1) 4px 4px 16px'};
  &:hover {
    transform: ${({ disabled }) => disabled ? '' : 'scale(1.02) !important'};
    box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.15) 8px 8px 32px'};
  }
  &:active {
    transform: ${({ disabled }) => disabled ? '' : 'scale(1.01) !important'};
    box-shadow: ${({ disabled }) => disabled ? '' : 'rgba(0,0,0,0.1) 6px 6px 24px'};
    background-color: ${({ disabled }) => disabled ? '' : '#9e4e9e'};
  }
`

export default Button