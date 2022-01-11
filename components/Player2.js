import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../lib/songAtom";
import useSpotify from "../hooks/useSpotify";

function Player2() {
  const spotifyApi = useSpotify();
  const [accessToken, setAccessToken] = useState();
  const { data: session, status } = useSession();
  // const [temp, setTemp] = useState(0);

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  useEffect(() => {
    const t = spotifyApi.getAccessToken();
    setAccessToken(t);
    // console.debug("My access token in player>>>>>>", accessToken);
  }, [spotifyApi, session, accessToken]);

  useEffect(() => {
    if (currentTrackId) {
      setIsPlaying(true);
    }
  }, [currentTrackId, spotifyApi, session]);

  if (!accessToken) return null;

  return (
    <div className="px-2">
      <SpotifyPlayer
        styles={{
          activeColor: "#fff",
          bgColor: "#181818",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
          height: "70px",
          sliderTrackColor: "#535353",
          sliderTrackBorderRadius: "4px",
          sliderHandleColor: "#fff",
          errorColor: "#fff",
        }}
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          setIsPlaying(state.isPlaying);
        }}
        play={isPlaying}
        uris={currentTrackId ? [currentTrackId] : []}
        magnifySliderOnHover={true}
        autoPlay={true}
      />
    </div>
  );
}

export default Player2;
