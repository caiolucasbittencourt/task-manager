function Button(props) {
  return (
    <button
      {...props}
      className="bg-zinc-700 hover:bg-zinc-600 p-2 rounded-lg text-white transition"
    >
      {props.children}
    </button>
  );
}

export default Button;