const Random = (props) => {
  return (
    <div className="random-number">
      <h1>
        Random value between {props.min} and {props.max}
        {' => '}
        {Math.floor(Math.random() * props.max + props.min)}
      </h1>
    </div>
  );
};

export default Random;
