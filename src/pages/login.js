import React, {useState} from 'react'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import Button from '../components/button'
import { TextInput } from '../components/inputs'
import Title from '../components/title'


const LoginForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LoginContainer = styled.div`
  height: calc(100% - 8em);
  width: calc(100% - 8em);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  max-height: 800px;
  border-radius: 8px;
  transition: all 0.2s;
  @media (max-width: 767px) {
    height: calc(100% - 3em);
    width: calc(100% - 3em);
  }
`

const Body = styled.p`
  font-family: 'Lora';
  font-weight: 700;
  font-size: 1.25em;
  color: #ececec;
  margin: 0.2em 0em;
  transition: all 0.2s;
  text-align: center;
  @media (max-width: 767px) {
    font-size:calc(0.75em + 2vw);
    transition: all 0s;
  }
`

export default function Login({ setPage }) {
  const [error, setError] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loggedIn = localStorage.getItem('loggedIn')

function handleOnClick() {
  if (username === 'josh' && password === 'Drl1Y!uJdYnz') {
    localStorage.setItem('loggedIn', "isLoggedIn")
    setUsername('')
    setPassword('')
  } else {
    setError(true)
  }
}

return (
      <LoginContainer>
        <Title id="logo">drop.</Title>
        <LoginForm id="loginForm">
          <TextInput id="username" placeholder="username" onChange={e => {
            setError(false)
            setUsername(e.target.value)
          }}/>
          <TextInput id="password" placeholder="password" type="password" onChange={e => {
            setError(false)
            setPassword(e.target.value)
          }}/>
          {error && <Body>incorrect login details. please try again</Body>}
          <Button onClick={() => handleOnClick()} id="loginButton">login</Button>
          {(loggedIn === 'isLoggedIn') && <Redirect push to="/dashboard" />}
        </LoginForm>
      </LoginContainer>
  )
}