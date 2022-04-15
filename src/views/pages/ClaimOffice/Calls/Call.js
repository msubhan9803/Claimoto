import React, { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from 'hooks/useAgora';
import MediaPlayer from 'components/ClaimOffice/VideoCall/MediaPlayer';
import call_end_img from 'assets/img/call/actions/call_end.png';
import full_screen_img from 'assets/img/call/actions/full_screen.png';
import mic_mute_img from 'assets/img/call/actions/mic_mute.png';
import screen_share_img from 'assets/img/call/actions/screen_share.png';
import off_cam_img from 'assets/img/call/actions/off_cam.png';
import send_attachment from 'assets/img/call/actions/send_attachment.png';
import send_message from 'assets/img/call/actions/send_message.png';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });

function Call() {
    const [appid, setAppid] = useState('63a66704256343f9ba018bd8ceaf78db');
    const [token, setToken] = useState('0065f611f72fa2d48798a9d13cc723447daIACNtcUxk5nJez/FlUup0h5IsOWA4h/r9SqRWzwwrS6taDLRTXgAAAAAEAA7zd8LCWpaYgEAAQAJalpi');
    const [channel, setChannel] = useState('Test');
    const { localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers, toggleCamera, toggleMic } = useAgora(client);
    const handle = useFullScreenHandle();
    const [audioActive, setAudioActive] = useState(true);
    const [videoActive, setVideoActive] = useState(true);


    const handleMicToggle = () => {
        toggleMic();
        setAudioActive(!audioActive);
    }

    const handleVideoToggle = () => {
        toggleCamera();
        setVideoActive(!videoActive);
    }


    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="container-fluid section-video-call">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ltnd__page-title-area">
                                <h2>Call With Khaled</h2>
                            </div>
                            <FullScreen handle={handle}>
                                <div style={{ height: handle.active ? "100%" : "650px", background: "black", borderRadius: "20px" }}>
                                    <div className="bgimg">
                                        {/* User and Local video */}
                                        {remoteUsers.length > 0 ?
                                            <MediaPlayer classUse={"remoteVideoBox"} videoTrack={remoteUsers[remoteUsers.length - 1].videoTrack} audioTrack={remoteUsers[remoteUsers.length - 1].audioTrack}></MediaPlayer>
                                            :
                                            ""
                                            // <MediaPlayer classUse={"remoteVideoBox"} videoTrack={localVideoTrack} audioTrack={undefined}></MediaPlayer>
                                        }

                                        {/* Name of User on Call */}
                                        <div className="topleft">
                                            <h3>Khaled</h3>
                                        </div>

                                        {remoteUsers.length < 1 ?
                                            <div className="middle">
                                                <h3>Waiting Other Participant to Join</h3>
                                                <hr />
                                                <p>...</p>
                                            </div>
                                        : ""}


                                        {/* Actions */}
                                        <div className="bottomCenter">
                                            <div className='call_actions'>
                                                <div role="button" onClick={() => { handle.active ? handle.exit() : handle.enter() }} className='call_action'>
                                                    <div className='call_action_img'>
                                                        <img src={full_screen_img} />
                                                    </div>
                                                </div>
                                                {/* <div role="button" onClick={() => { handleMicToggle() }} className={!audioActive ? "active_call_action" : "call_action"}>
                                                    <div className='call_action_img'>
                                                        <img src={mic_mute_img} />
                                                    </div>
                                                </div> */}
                                                <div role="button" onClick={() => { leave() }} className='call_action'>
                                                    <div className='call_action_call_end_img'>
                                                        <img src={call_end_img} />
                                                    </div>
                                                </div>
                                                {/* <div role="button" onClick={() => { handleVideoToggle() }} className={!videoActive ? "active_call_action" : "call_action"}>
                                                    <div className='call_action_img'>
                                                        <img src={off_cam_img} />
                                                    </div>
                                                </div> */}
                                            </div>
                                        </div>


                                        {/* Local Video */}
                                        <div className="bottomRight">
                                            <MediaPlayer classUse={"localVideoBox"} videoTrack={localVideoTrack} audioTrack={undefined}></MediaPlayer>
                                        </div>
                                    </div>
                                </div>
                            </FullScreen>




                            {/* <div className='player-container'>
                                    <div className='local-player-wrapper'>
                                        <p className='local-player-text'>{localVideoTrack && ``}{joinState && localVideoTrack ? `(${client.uid})` : ''}</p>
                                        <MediaPlayer videoTrack={localVideoTrack} audioTrack={undefined}></MediaPlayer>
                                    </div>
                                    {remoteUsers.map(user => (<div className='remote-player-wrapper' key={user.uid}>
                                        <p className='remote-player-text'>{`remoteVideo(${user.uid})`}</p>
                                        <MediaPlayer videoTrack={user.videoTrack} audioTrack={user.audioTrack}></MediaPlayer>
                                    </div>))}
                                </div> */}


                        </div>
                        <div className="col-lg-4">
                                <div className='chat-section'>
                                    <div>
                                    <h2>Chat</h2>
                                    </div>



                                    <div className='chat-actions'>
                                        <div>
                                        <div role="button" className={"msg_action"}>
                                                    <div className='msg_action_img'>
                                                        <img src={send_attachment} />
                                                    </div>
                                                </div>
                                        </div>
                                        <div className='msg_send_box'>
                                            <input />
                                            <img role="button" src={send_message} />
                                        </div>
                                    </div>
                                </div>



                            <div className="ltnd__page-title-area">
                                <h2>Chat</h2>
                            </div>
                            <form className='call-form'>
                                <label>
                                    AppID:
                                    <input type='text' name='appid' onChange={(event) => { setAppid(event.target.value) }} />
                                </label>
                                <label>
                                    Token(Optional):
                                    <input type='text' name='token' onChange={(event) => { setToken(event.target.value) }} />
                                </label>
                                <label>
                                    Channel:
                                    <input type='text' name='channel' onChange={(event) => { setChannel(event.target.value) }} />
                                </label>
                                <div className='button-group'>
                                    <button id='join' type='button' className='btn btn-primary btn-sm' disabled={joinState} onClick={() => { join(appid, channel, token) }}>Join</button>
                                    <button id='leave' type='button' className='btn btn-primary btn-sm' onClick={() => { leave() }}>Leave</button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}








export default Call;
