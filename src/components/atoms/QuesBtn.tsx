import { FC } from 'react'
import styled from 'styled-components'

export const QuesBtn: FC = (() => (
  <SQuesBtn type='submit'>質問する</SQuesBtn>
))

const SQuesBtn = styled.button`
  display: inline-block;
  background-color: #5f5f5f;
  color: #fff;
  font-weight: 300;
  text-align: center;
  letter-spacing: .2em;
  padding: 1em 1.5em;
  width: 100%;
`