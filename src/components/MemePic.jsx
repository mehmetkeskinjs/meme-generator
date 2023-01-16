import React from 'react';

function MemePic(props) {
  const memeTextStyle = {
    letterSpacing: '1px',
    textShadow:
      '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000, 2px 2px 5px #000',
  };

  return (
    <div>
      <button
        className="rounded-md bg-sky-600 hover:bg-sky-700 text-white font-semibold text-lg w-full mt-5 h-12 py-1 shadow-lg  hover:shadow-none"
        onClick={props.handleClick}
      >
        Get Image
      </button>
      <div className="mt-5 bg-gray-800 rounded-md overflow-hidden w-full relative text-4xl text-center text-white font-black uppercase">
        <div className="absolute top-3 left-1/3 w-60 break-words">
          <span style={memeTextStyle}>{props.topText}</span>
        </div>
        <img
          src={props.randomImg}
          alt="Meme Image"
          className="w-full h-96 object-contain"
        />
        <div className="absolute bottom-3 left-1/3  w-60 break-words">
          <span style={memeTextStyle}>{props.bottomText}</span>
        </div>
      </div>
    </div>
  );
}

export default MemePic;
