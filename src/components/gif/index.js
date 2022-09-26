const Gif = (props) => {
  const src = `https://media2.giphy.com/media/${props.id}`
  return (
   <img src={src} alt="It's a gif, bro" className="gif"/>
  );
}

export default Gif;
