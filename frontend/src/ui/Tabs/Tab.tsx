import React from 'react'
import { ReactElement } from 'react'

type Props = {
  title: string,
  children: React.ReactNode
}

const Tab: React.FC<Props> = ({ children, title }: Props) => {
  return <div key={title}>{children}</div>
}

export default Tab