import axios from 'axios'

export const chat = async (message: string, conversation: any) => {
  let API_URL: string | undefined = ''
  let MODEL: string | undefined = ''
  let API_KEY: string | undefined = ''
  
  if(import.meta.env.VITE_API_URL &&
    import.meta.env.VITE_APP_MODEL &&
    import.meta.env.VITE_API_KEY) {
    API_URL = import.meta.env.VITE_API_URL
    MODEL = import.meta.env.VITE_APP_MODEL
    API_KEY = import.meta.env.VITE_API_KEY
  }
  else if(process.env.REACT_APP_API_URL &&
    process.env.REACT_APP_APP_MODEL &&
    process.env.REACT_APP_API_KEY) {
    API_URL = process.env.REACT_APP_API_URL
    MODEL = process.env.REACT_APP_APP_MODEL
    API_KEY = process.env.REACT_APP_API_KEY
  }
  else {
    console.error('environmental error!!')
    return null
  }

  const question = '次の文章のタイトル候補をいくつか教えてください。'
  const question1 = '次の文章のタグ付けとなるワードをいくつか教えてください。'

  const editMessage = `
  質問:${question1}\n
  返答フォーマット:\n
  マークダウンのリスト形式で答えてください。\n
  ----------------------------------------------\n
  ${message}
  `

  try  {
    const res = await axios.post(`${API_URL}chat/completions`, {
      model: MODEL,
      messages: [
        ...conversation,
        {
        'role': 'user',
        'content': editMessage,
        }
      ]
    }, {
      // 送信する HTTP Header(認証情報)
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      }
    })

    const result = res.data.choices[0].message.content.trim()
    return result

  } catch(err) {
    console.error(err)
    return null
  }
}