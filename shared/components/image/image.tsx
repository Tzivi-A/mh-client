import './image.css';

interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

export const Image = ({ src, alt, width = undefined, height = undefined }: ImageProps) => {
  return <img className="image" src={src} alt={alt} width={width} height={height} />;
};
