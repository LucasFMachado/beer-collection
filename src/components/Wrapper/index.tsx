import { ReactNode } from 'react'
import './styles.scss'

interface IWrapperProps {
  children: ReactNode
  flexColumn?: boolean
}

export default function Wrapper({
  children,
  flexColumn = false,
}: IWrapperProps) {
  console.log('flexColumn', flexColumn)
  return (
    <main>
      <div
        className={`${flexColumn ? ' page_content_column' : 'page_content'}`}
      >
        {children}
      </div>
    </main>
  )
}
