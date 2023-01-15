import React, { useState } from 'react';
import MemePic from './MemePic';
import memesData from '../data/memesData';
import noImage from '../assets/no-image.png';

function GenerateMemeText() {
  const [memeData, setMemeData] = useState({
    topText: '',
    bottomText: '',
    randomImg: noImage,
  });

  function getMemeImg() {
    const randomNum = Math.floor(Math.random() * 100);
    const memes = memesData.data.memes;
    // set new image url to memeImg
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      randomImg: memes[randomNum].url,
      topText: '',
      bottomText: '',
    }));
  }

  function handleMemeText(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setMemeData((prevMemeData) => ({
      ...prevMemeData,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col-reverse md:flex-col">
      <div className="form mt-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Top text"
            className="w-full h-12 rounded-md px-4 bg-transparent border-gray-700 border-2 text-white"
            onChange={handleMemeText}
            name="topText"
            value={memeData.topText}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="w-full h-12 rounded-md px-4 bg-transparent border-gray-700 border-2 text-white"
            onChange={handleMemeText}
            name="bottomText"
            value={memeData.bottomText}
          />
        </div>
      </div>

      <MemePic {...memeData} handleClick={getMemeImg} />
    </div>
  );
}

export default GenerateMemeText;
