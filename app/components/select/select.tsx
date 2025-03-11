import './image.css'

interface SelectProps {
  src: string
  alt: string
  width?: string | number
  height?: string | number
}

export const Select = ({ src, alt, width = undefined, height = undefined }: SelectProps) => {
  return <img className="image" src={src} alt={alt} width={width} height={height}></img>
}
