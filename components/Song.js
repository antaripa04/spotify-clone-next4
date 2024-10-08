import React from "react";
import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../lib/songAtom";

function Song({ order, track }) {
  // spotify api to play the song
  const spotifyApi = useSpotify();

  // which song is clicked, set the id
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(track.track.uri);
    setIsPlaying(true);
    spotifyApi
      .play({
        uris: [track.track.uri],
      })
      .catch((err) => {});
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img
          className="h-10 w-10"
          src={track.track.album.images[0].url}
          alt=""
        />
        <div className="sm:w-5/6  md:w-4/6">
          <p className="w-full truncate text-white">{track.track.name}</p>
          <p className="w-full truncate">
            {track.track.artists.map((artist, i) => (
              <React.Fragment key={i}>
                {artist.name}
                {track.track.artists.length !== i + 1 && <>,&nbsp;</>}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="hidden md:inline pl-4 w-40">{track.track.album.name}</p>
        <p>{millisToMinutesAndSeconds(track.track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
