import { FC, memo } from 'react'
import { QuesBtn } from '@/components/atoms/QuesBtn'

type Props = {
  onSubmit: (event: any) => Promise<void>
  onChange: (event: any) => void
  message: string
}

export const ChatgptForm: FC<Props> = memo((props: Props) => {
  const { onSubmit, onChange, message } = props

  return (
    <form onSubmit={onSubmit}>
      <div className='chatgpt-ques-input'>
        <label>
          <textarea
            rows={5}
            cols={50}
            value={message}
            onChange={onChange} />
        </label>
      </div>
      <div>
        <QuesBtn />
      </div>
    </form>
  )
})