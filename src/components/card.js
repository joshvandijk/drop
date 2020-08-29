import styled from 'styled-components'

const Card = styled.div`
  height: calc(100% - 6em);
  width: calc(100% - 6em);
  max-width: ${({ path }) => (path === '/' ? '600px' : '100%')};
  max-height: ${({ path }) => (path === '/' ? '700px' : '100%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0,0,0,0.1) 16px 16px 64px;
  transition: all 0.4s ease;
  background-image: linear-gradient(-60deg, #202045, #321032);
  border-radius: 32px;
  @media (max-width: 767px) {
    height: calc(100% - 3em);
    width: calc(100% - 3em);
    max-height: initial;
    max-width: initial;
  }
`

export default Card