import styled from 'styled-components'

const Title = styled.h1`
font-family: 'Montserrat';
font-weight: 800;
font-style: oblique;
font-size: 6em;
color: #ececec;
margin: 0.5em 0em;
transition: all 0.2s;
@media (max-width: 767px) {
  font-size: calc(3em + 10vw);
  transition: all 0s;
}
`

export default Title
