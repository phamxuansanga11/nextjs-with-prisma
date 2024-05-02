"use client";

import React, { useState } from "react";

const VideoPlayer = ({ videoUrl }: { videoUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  //   const url = `D:\next-js-app\src\uploads\video-free.mp4`

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <video controls={true} width="600" height="400">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
    </div>
  );
};

export default VideoPlayer;
