import { FC, memo } from 'react'
import styled from 'styled-components'
import { ChatgptAnswer } from '@/components/modules/ChatgptAnswer'
import { ChatgptMessage } from '@/components/modules/ChatgptMessage'

type Props = {
  answer: string
  prevMessage: string | null
}

export const ChatgptResult: FC<Props> = memo((props: Props) => {
  const { answer, prevMessage } = props

  return (
    <SChatgptResult>
      <section className='chatgpt-result-message'>
        <ChatgptMessage prevMessage={prevMessage}>
          <h3>質問</h3>
        </ChatgptMessage>
      </section>
      
      <section className='chatgpt-result-answer'>
        <ChatgptAnswer answer={answer}>
        <h3>回答</h3>
        </ChatgptAnswer>
      </section>
    </SChatgptResult>
  )
})

const SChatgptResult = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 600;
    padding-bottom: .1em;
    border-bottom: 1px solid #5f5f5f;
  }

  .chatgpt-result-message,
  .chatgpt-result-answer {
    padding-bottom: 30px;
  }
`