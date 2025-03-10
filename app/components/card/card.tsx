import type { ReactNode } from 'react'
import './card.css'

export interface CardProps {
  children: ReactNode
}

export const Card = ({ children }: CardProps) => {
  return <div className="card">{children}</div>
}
