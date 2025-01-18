import React from 'react';
import { FaApple, FaFacebook, FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const TubeSocial = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center py-8">
      <iframe
        width="100%"
        height="95%"
        src="https://www.youtube.com/embed/hQzmfMHA8ec"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="max-w-full max-h-full"
      ></iframe>
      <div className="social-icons text-white mt-4">
        <div className="social-icon flex gap-4 text-4xl justify-center sm:justify-start">
          <a href="https://tr-tr.facebook.com/"><FaFacebook /></a>
          <a href="https://x.com/"><FaXTwitter /></a>
          <a href="https://www.instagram.com//"><FaInstagram /></a>
          <a href="https://www.youtube.com/@motive.basarim"><FaYoutube /></a>
          <a href="https://open.spotify.com/user/315yeswf4qqxbacj5xhkmwy553ei?si=2a7b12fa0bcb4db7"><FaSpotify /></a>
          <a href="https://music.apple.com/your-apple-music-url"><FaApple /></a>
        </div>
      </div>
    </div>
  );
};

export default TubeSocial;
