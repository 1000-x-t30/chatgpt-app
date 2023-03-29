import { ChangeEvent, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Loading } from '@/components/atoms/Loading'
import { ChatgptForm } from '@/components/organisms/ChatgptForm'
import { ChatgptResult } from '@/components/organisms/ChatgptResult'
import type { Conversation } from '@/types/Conversation.d'
import { chat } from '@/apis/chat'

const App = () => {
  const [message, setMessage] = useState('')
  const [answer, setAnswer] = useState('')
  const [conversation, setConversation] = useState<Conversation>([])
  const [loading, setLoading] = useState(false)
  const prevMessageRef = useRef<string | null>(null)

  // 回答が取得されたとき
  useEffect( () => {
    // 直前のチャット内容
    const newConversation = [{
        'role': 'user',  // ユーザー
        'content': message,  // 直前の質問内容
      }, {
        'role': 'assistant',  // ChatGPT
        'content': answer,  // 直前の回答
      }]
    // 会話の記録(直前のチャット内容の追加)
    setConversation([...conversation, ...newConversation])
    
    setMessage('')
  }, [answer])


  // メッセージの格納
  const handleMessageChange = (event: ChangeEvent<HTMLInputElement>)  => {
    setMessage(event.target.value)
  }

  // フォーム送信時の処理
  const handleSubmit = useCallback(async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault()

    if(!message) {
      alert('メッセージがありません')
      return
    }
    if(loading) return
    setLoading(true)
  
    try {
      const result = await chat(message, conversation)
      setAnswer(result)
    } catch ( error ) {
      console.error(error)
    } finally {
      setLoading(false)
      prevMessageRef.current = message
    }
  }, [loading, message, conversation])

  return (
    <SChatgpt>
      <div className='chatgpt__inner'>
        <h1>ChatGPTにタイトルを聞いてみる?</h1>

        <article className='chatgpt-ques'>
        <h2 hidden>ChatGPTメッセージ入力欄</h2>
          <ChatgptForm
            onSubmit={handleSubmit}
            message={message}
            onChange={handleMessageChange} />
        </article>

        <div className="chatgpt-loading">
          {loading && (
            <Loading />
          )}
        </div>

        <article className='chatgpt-result'>
          <h2 hidden>結果</h2>
          <ChatgptResult
            prevMessage={prevMessageRef.current}
            answer={answer} />
        </article>
      </div>
    </SChatgpt>
  )
}

const SChatgpt = styled.div`
  display: flex;
  padding-top: 50px;
  padding-right: 20px;
  padding-left: 20px;
  max-width: 500px;
  margin: 0 auto;

  h1 {
    padding-bottom: .2em;
  }

  .chatgpt-ques {
    padding-bottom: 30px;
  }

  .chatgpt-ques-input {
    padding-bottom: 30px;
  }

  .chatgpt-loading {
    padding-bottom: 30px;
  }
`

export default App