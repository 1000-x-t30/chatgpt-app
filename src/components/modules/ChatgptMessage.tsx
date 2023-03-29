import { FC, memo, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
  prevMessage: string | null
}

export const ChatgptMessage: FC<Props> = memo((props: Props) => {
  const { children, prevMessage } = props

  return (
    
    <SChatMessage>
      {children}
      <p>{prevMessage}</p>
    </SChatMessage>
  )
})

const SChatMessage = styled.div`
  p {
    line-height: 1.5em;
  }
`