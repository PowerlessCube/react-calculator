const DisplayResults = ({ calculation }) => {
  return <div>{calculation.length ? calculation.join("") : 0}</div>;
};

export default DisplayResults;
