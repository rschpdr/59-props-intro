function Button(props) {
  console.log(props);
  return (
    <button style={{ backgroundColor: props.color, fontFamily: props.font }}>
      {props.children}
    </button>
  );
}

export default Button;
