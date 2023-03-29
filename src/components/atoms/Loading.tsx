import { FC } from 'react'
import styled from 'styled-components'

export const Loading: FC = (() => (
  <SLoading className='loading'>
    回答中
    <span className='loading-dot'>.</span>
    <span className='loading-dot'>.</span>
    <span className='loading-dot'>.</span>
  </SLoading>
))

const SLoading = styled.p`
  display: flex;

  .loading-txt {
    font-size: 1.6rem;
  }

  .loading-dot {
    display: block;
    animation-name: loading;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      animation-delay: .1s;
    }
    &:nth-of-type(3) {
      animation-delay: .2s;
    }
  }

  @keyframes loading {
    0%{
      transform: translateY(0em)
    }
    40%{
      transform: translateY(-.3em)
    }
    80%{
      transform: translateY(0em)
    }
    100%{
      transform: translateY(0em)
    }
  }
` 