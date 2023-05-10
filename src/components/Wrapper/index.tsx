import { ReactNode } from 'react'
import './styles.scss'

interface IWrapperProps {
  children: ReactNode
}

export default function Wrapper({ children }: IWrapperProps) {
  return (
    <main>
      <div className="page_content">{children}</div>
    </main>
  )
}
