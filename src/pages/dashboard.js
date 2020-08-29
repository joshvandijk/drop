import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import Button, { SmallButton } from '../components/button'
import UploadButton from '../components/upload-button'
import Title from '../components/title'

const DashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(100% - 6em);
  height: calc(100% - 6em);
  max-width: 600px;
  max-height: 700px;
  @media (max-width: 767px) {
    width: calc(100% - 3em);
    height: calc(100% - 3em);
  }
`

const LogoutContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  margin: 3em;
  @media (max-width: 767px) {
  margin: 1.5em;
  }
`

export default function Dashboard({ setPage }) {
  const [file, setFile] = useState(null)

  const loggedIn = localStorage.getItem('loggedIn')

  function onChangeHandler(event) {
    setFile(event.target.files[0])
  }

  function onClickHandler() {
    const data = new FormData()
    data.append('file', file)
    alert('Starting upload')
    axios.post("https://api.drop.joshvandijk.com/upload", data, {}).then((res, err) => {
      if(res) {
        alert("File uploaded successfully. Server response: '" + res.statusText + "'")
      } else {
        alert('Something went wrong')
        alert(err)
      }
    })
  }

  function logout() {
    localStorage.setItem('loggedIn', 'notLoggedIn')
    window.location.href = '/'
  }

  return (
    <React.Fragment>
    <LogoutContainer><SmallButton small onClick={() => logout()}>logout</SmallButton></LogoutContainer>
    <DashContainer>
        <Title id="logo">drop.</Title>
        <UploadButton onChange={(e) => onChangeHandler(e)}>select file</UploadButton>
        <Button disabled={(file == null)} onClick={() => onClickHandler()}>upload</Button>
        <div style={{height: '48px'}}></div>
        {loggedIn !== 'isLoggedIn' && <Redirect to="/" />}
    </DashContainer>
    </React.Fragment>
  )
}
