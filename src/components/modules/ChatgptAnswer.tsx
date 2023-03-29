import { FC, Fragment, memo, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  answer: string
  children: ReactNode
}

export const ChatgptAnswer: FC<Props> = memo((props: Props) => {
  const { answer, children } = props
  console.log(answer)

  return (
    <SChatAnswer>
      {children}
      <ul>{
        answer
        .split(/\n/)
        .map((item: string, index: number) => (
          <li key={index}>{ item.replace(/(^- )/, '') }</li>))
      }</ul>
    </SChatAnswer>
    
  )
})

const SChatAnswer = styled.div`
  li {
    line-height: 1.5em;
  }
`