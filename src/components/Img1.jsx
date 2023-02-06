import React from "react";
import video_6 from "../assets/video_6.mp4"
export default function Img1() {
  return (
    <div className="block1">
        <video className="img1" src={video_6} autoPlay loop muted></video>
        <video className="img2" src={video_6} autoPlay loop muted></video>
    </div>
  );
}
