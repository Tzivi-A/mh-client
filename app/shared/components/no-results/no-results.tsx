interface NoResultsProps {
  text?: string;
}

const NoResults = ({ text = 'אין תוצאות' }: NoResultsProps) => {
  return <div>{text}</div>;
};

export default NoResults;
