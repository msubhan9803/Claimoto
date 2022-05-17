import React, { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import useAgora from 'hooks/useAgoraRtc';
import MediaPlayer from 'components/ClaimOffice/VideoCall/MediaPlayer';
import call_end_img from 'assets/img/call/actions/call_end.png';
import full_screen_img from 'assets/img/call/actions/full_screen.png';
import mic_mute_img from 'assets/img/call/actions/mic_mute.png';
import recording_img from 'assets/img/call/actions/recording.png';
import screen_share_img from 'assets/img/call/actions/screen_share.png';
import off_cam_img from 'assets/img/call/actions/off_cam.png';
import send_attachment from 'assets/img/call/actions/send_attachment.png';
import send_message from 'assets/img/call/actions/send_message.png';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
import axios from 'axios';
import CountdownTimer from './CountdownTimer';
import { useParams } from 'react-router-dom';
import { capitalizeFirstLetter } from 'functions';

const client = AgoraRTC.createClient({ codec: 'h264', mode: 'rtc' });

function Call() {

    const {username, channel} = useParams();
    const { user_details } = useSelector(state => state.authReducer);
    const [appid, setAppid] = "5f611f72fa2d48798a9d13cc723447da" || process.env.REACT_APP_AGORA_APPID;
    const [token, setToken] = useState('');
    const [tokenMessage, setTokenMessage] = useState('');
    const [accountName, setAccountName] = useState('');
    const { localAudioTrack, localVideoTrack, leave, join, joinState, remoteUsers, toggleCamera, toggleMic, sendMessage } = useAgora(client);
    const handle = useFullScreenHandle();
    const [audioActive, setAudioActive] = useState(true);
    const [videoActive, setVideoActive] = useState(true);


    const THREE_DAYS_IN_MS = 3.01 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;


    const handleMicToggle = () => {
        toggleMic(!audioActive);
        setAudioActive(!audioActive);
    }

    const handleVideoToggle = () => {
        sendMessage()
        toggleCamera(!videoActive);
        setVideoActive(!videoActive);
    }


    const _getRTCToken = async () => {
        return new Promise(async (res, rej) => {
            let config = {
                method: 'get',
                url: `${process.env.REACT_APP_TOKEN_API_ENVIROMENT}/rtc/${channel}/audience/userAccount/0`,
                headers: {}
            };

            await axios(config)
                .then(function (response) {
                    let rtc_token = response.data.rtcToken;
                    res(rtc_token);
                })
                .catch(function (error) {
                    rej(error);
                });

        })

    }


    const _getRTMToken = async () => {
        return new Promise(async (res, rej) => {
            let config = {
                method: 'get',
                url: `${process.env.REACT_APP_TOKEN_API_ENVIROMENT}/rtm/${user_details.UserId}`,
                headers: {}
            };

            await axios(config)
                .then(function (response) {
                    let rtm_token = response.data.rtmToken;
                    res(rtm_token);
                })
                .catch(function (error) {
                    rej(error);
                });
        })

    }

    const _join = async () => {
        const [tokenrtc, tokenrtm] = await Promise.all([
            _getRTCToken(), _getRTMToken()
        ]);
        setToken(tokenrtc);
        setTokenMessage(tokenrtm);
        let app_id = "5f611f72fa2d48798a9d13cc723447da";
        // join(app_id, channel, "0065f611f72fa2d48798a9d13cc723447daIADcH9WzYl69vIhT1i1hqyOE8QDJcAJpcwXPOwSEnebS7HkMd3ch39v0EADwO5wwiPJgYgEAAQAYr19i");
        join(app_id, channel, tokenrtc);
    }

    useEffect(() => {
        setAccountName(user_details.UserId);
        _join();

        return () => {
            leave();
            toggleMic(false);
            toggleCamera(false)
        };

    }, []);


   

    return (
        <React.Fragment>
            <div className="body-wrapper">
                <div className="container-fluid section-video-call">

                    {/* <div className='row mb-3'>
                        <div className="col-4">
                            <label>
                                Token Call:
                                <input type='text' name='token' onChange={(event) => { setToken(event.target.value) }} value={token} />
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Account Name:
                                <input type='text' name='token' onChange={(event) => { setAccountName(event.target.value) }} value={accountName} />
                            </label>
                        </div>
                        <div className="col-4">
                            <label>
                                Token Messaging:
                                <input type='text' name='token' onChange={(event) => { setTokenMessage(event.target.value) }} value={tokenMessage} />
                            </label>
                        </div>
                        <div className="col-12">
                            <button id='join' type='button' className='btn btn-primary btn-sm mt-2' disabled={joinState} onClick={() => { join(appid, channel, token) }}>Join</button>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='call-header'>
                                <div className="ltnd__page-title-area">
                                    <h2>Call With {capitalizeFirstLetter(username)}</h2>
                                </div>
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
                                            <h3>{capitalizeFirstLetter(username)}</h3>
                                        </div>

                                        <div className="topright">
                                            <CountdownTimer targetDate={dateTimeAfterThreeDays} leaveMeeting={() => leave()} toggleTimmer={remoteUsers.length > 0} />
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
                                                <div role="button" onClick={() => { handleMicToggle() }} className={!audioActive ? "active_call_action" : "call_action"}>
                                                    <div className='call_action_img'>
                                                        <img src={mic_mute_img} />
                                                    </div>
                                                </div>
                                                {joinState ?
                                                    <div role="button" onClick={() => { leave() }} className='call_action'>
                                                        <div className='call_action_call_end_img'>
                                                            <img src={call_end_img} />
                                                        </div>
                                                    </div>
                                                    :
                                                    <div role="button" onClick={() => { join() }} className='call_action'>
                                                        <div className='call_action_call_end_img'>
                                                            <img src={call_end_img} />
                                                        </div>
                                                    </div>
                                                }
                                                <div role="button" onClick={() => { handleVideoToggle() }} className={!videoActive ? "active_call_action" : "call_action"}>
                                                    <div className='call_action_img'>
                                                        <img src={off_cam_img} />
                                                    </div>
                                                </div>
                                                <div role="button" onClick={() => { handleVideoToggle() }} className={!videoActive ? "active_call_action" : "call_action"}>
                                                    <div className='call_action_img'>
                                                        <img src={recording_img} />
                                                    </div>
                                                </div>
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
                            <Message appid={process.env.REACT_APP_AGORA_APPID} token={tokenMessage} accountName={accountName} channel={channel} joinState={joinState} />
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}








export default Call;
