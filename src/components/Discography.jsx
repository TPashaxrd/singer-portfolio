import React, { useState, useEffect } from "react";

const Discography = () => {
  const [activeSong, setActiveSong] = useState(null);

  const songs = [
    {
      id: 1,
      image: "https://wallpapers.com/images/hd/3000x3000-4et4lyqb490tdtyh.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
    },
    {
      id: 2,
      image: "https://wallpaperaccess.com/full/2185792.png",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
    },
    {
      id: 3,
      image: "https://i.pinimg.com/736x/ce/dc/05/cedc05586a5e91a87c8ab5ac42c83b7d.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
    },
    {
      id: 4,
      image: "https://i.pinimg.com/736x/fd/aa/2b/fdaa2b9069b055660aa36be18c805e89.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
    },
    {
      id: 5,
      image: "https://wallpapers.com/images/hd/3000x3000-v6fxzckdvsinolps.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/",
    },
    {
      id: 6,
      image: "https://wallpaperaccess.com/full/3447067.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/"
    },
    {
      id: 7,
      image: "https://i.etsystatic.com/42139287/r/il/d44515/4980576428/il_fullxfull.4980576428_9gk2.jpg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/"
    },
    {
      id: 8,
      image: "https://wallpapers.com/images/hd/3000x3000-ey25zx9z5axbrxl1.jpg",
      spotfiy: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1634176866089-b633f4aec882?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/"
    },
    {
      id: 10,
      image: "https://4kwallpapers.com/images/wallpapers/juice-wrld-fighting-3000x3000-9496.jpeg",
      spotify: "https://open.spotify.com/",
      appleMusic: "https://music.apple.com/"
    }
  ];

  const handleClick = (id) => {
    setActiveSong(id);
  };

  const closeModal = () => {
    setActiveSong(null);
  };

  const redirectTo = (url) => {
    window.open(url, "_blank");
    setActiveSong(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = document.querySelectorAll(".song-item");
    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-white my-4">DISCOGRAPHY -</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {songs.map((song) => (
          <div
            key={song.id}
            className="song-item bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-xs fade-in"
          >
            <img
              src={song.image}
              alt={song.title}
              className="w-full h-auto rounded-md cursor-pointer"
              onClick={() => handleClick(song.id)}
            />
            <h2 className="text-xl font-bold mt-4">{song.title}</h2>
          </div>
        ))}
      </div>
      {activeSong && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-black text-white p-6 rounded-lg shadow-lg max-w-sm w-full border border-gray-600"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              style={{ marginLeft: "54px" }}
              src="http://www.yalinonline.com/assets/images/logo/logo.png"
              alt="Logo"
            />
            <h2 className="mt-2 text-xl font-bold mb-4">
              Hangi platforma gitmek istiyorsunuz?
            </h2>
            <div className="flex justify-around">
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
                onClick={() =>
                  redirectTo(
                    songs.find((song) => song.id === activeSong).spotify
                  )
                }
              >
                Spotify
              </button>
              <button
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
                onClick={() =>
                  redirectTo(
                    songs.find((song) => song.id === activeSong).appleMusic
                  )
                }
              >
                Apple Music
              </button>
            </div>
            <button
              className="mt-4 text-red-500 underline"
              onClick={closeModal}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discography;
