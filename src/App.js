import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { gsap } from 'gsap'

import LoginPage from './pages/login'
import Dashboard from './pages/dashboard'

import Environment from './components/environment'
import Card from './components/card'

export const play = (pathname, node, reloaded, setReloaded) => {
  const timeline = gsap.timeline()

  if (reloaded) {
      timeline
        .from('#mainCard', { display: 'none', scale: 0.96, opacity: 0, duration: 0.4 }, "0.5")
      setReloaded(false)
    } else {
      timeline
        .delay(0.1)
    }

  if (pathname === '/') {
    timeline
      .from(node, { display: 'none', duration: 0.2 }, "0")
      .from('#loginButton', { scale: 0.98, opacity: 0, duration: 0.6}, "+=0")
      .from('#logo', { opacity: 0, y: -30, duration: 0.2 }, "-=0.8")
      .from('#loginForm > input', { opacity: 0, y: -15, duration: 0.2, stagger: 0.1 }, "-=0.6")
  } if (pathname === '/dashboard') {
    timeline
      .from(node, { display: 'none', scale: 0.98, opacity: 0, duration: 0.4 }, "0.2")
  }

  timeline.play()
}

export default function App() {
  const [page, setPage] = useState('/')
  const [reloaded, setReloaded] = useState(true)

  return (
    <BrowserRouter>
        <Environment>
          <Card path={page} id="mainCard">
            <Route render={({ location }) => {
              const { pathname, key } = location

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={(node) => play(pathname, node, reloaded, setReloaded)}
                    timeout={{enter: 750, exit: 0}}
                  >

                      <Switch location={location}>
                        {setPage(location.pathname)}
                        <Route path="/" exact component={LoginPage} />
                        <Route path="/dashboard" component={Dashboard} />
                      </Switch>
                  </Transition>
                </TransitionGroup>
              )
            }} />
          </Card>
        </Environment>
    </BrowserRouter>
  )
}