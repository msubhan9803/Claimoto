import { ILocalVideoTrack, IRemoteVideoTrack, ILocalAudioTrack, IRemoteAudioTrack } from "agora-rtc-sdk-ng";
import React, { useRef, useEffect } from "react";

// export interface VideoPlayerProps {
//   videoTrack: ILocalVideoTrack | IRemoteVideoTrack | undefined;
//   audioTrack: ILocalAudioTrack | IRemoteAudioTrack | undefined;
// }

const MediaPlayer = (props) => {
  const container = useRef(null);
  useEffect(() => {
    if (!container.current) return;
    props.videoTrack?.play(container.current);
    return () => {
      props.videoTrack?.stop();
    };
  }, [container, props.videoTrack]);
  useEffect(() => {
    if (props.audioTrack) {
      props.audioTrack?.play();
    }
    return () => {
      props.audioTrack?.stop();
    };
  }, [props.audioTrack]);
  return (
    <div ref={container} className={props.classUse} ></div>
  );
}

export default MediaPlayer;