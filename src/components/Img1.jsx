import React from "react";

import video_1 from "../assets/video_1.mp4"
import video_6 from "../assets/video_6.mp4"
export default function Img1() {
  return (
    <div className="block1">
      <video className="img1" src={video_1} autoPlay muted loop></video>
      <video className="img2" src={video_6} autoPlay muted loop></video>
    </div>
  );
}
