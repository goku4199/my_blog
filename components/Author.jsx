import React from 'react';
import Image from 'next/image';



const Author = ({ author }) => (
  <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
    <div className="absolute right-0 left-0 -top-14">
      <Image
        unoptimized
        
        alt={author.name}
        height="200"
        width="200"
        className=" mx-auto rounded-full"
        src={author.photo.url}
      />
    </div>
    <h3 className="text-white mt-4 mb-4 text-xl font-bold pt-20">{author.name}</h3>
    <p className="text-white text-ls">{author.bio}</p>
  </div>
);

export default Author;