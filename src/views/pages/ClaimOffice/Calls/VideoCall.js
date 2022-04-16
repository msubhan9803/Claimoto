import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import AgoraRTC from "agora-rtc-sdk";
import { Action } from "history";

let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
});

client.init("63a66704256343f9ba018bd8ceaf78db");

let handleError = function (err) {
    console.log("Error: ", err);
};

const VideoCall = () => {
    const [load, setLoad] = useState(false);
    const [active, setActive] = useState([]);
    const [room, setRoom] = useState("Test");
    const [conn_state, setConn_state] = useState("");
    const [stream_id, setStreamId] = useState(0);
    const [mute, setMute] = useState(false);
    const [stream, setstream] = useState();
    const [state, setState] = useState(false);
    const [volume, setVolume] = useState(50);
    const [profiles, setProfiles] = useState([
        "speech_low_quality",
        "speech_standard",
        "music_standard",
        "standard_stereo",
        "high_quality",
        "high_quality_stereo",
    ]);
    const [audio_input, setAudio_input] = useState([]);
    const [audio_output, setaudio_output] = useState([]);
    const [hostId, setHostId] = useState("");


    async function addVideoStream(elementId) {
        console.log(elementId);
        let remoteContainer = document.getElementById("remote");

        // Creates a new div for every stream
        let streamDiv = document.createElement("div");
        // Assigns the elementId to the div.
        streamDiv.id = elementId;
        // Takes care of the lateral inversion
        streamDiv.style.transform = "rotateY(180deg)";
        // Adds the div to the container.
        remoteContainer.appendChild(streamDiv);
    }

    async function removeVideoStream(elementId) {
        let remoteDiv = document.getElementById(elementId);
        if (remoteDiv) {
            remoteDiv.parentNode.removeChild(remoteDiv);
        }
    }

    const join = async () => {
        setLoad(true);
        const { token, uid } = await (
            await fetch(
                `https://agora-token.azurewebsites.net/api/trigger?name=${room}`
            )
        ).json();
        client.join(token, room, uid, async (userId) => {
            setStreamId(userId);
            localStorage.setItem("ID", 1232);
            localStorage.setItem("streamId", userId);
            // let new_active = active.filter((user) => user.uid != currentUser.uid);
            // new_active.push({
            //     uid: currentUser.uid,
            //     pic: currentUser.photoURL,
            //     name: currentUser.displayName,
            //     userId: userId,
            // });
            let new_active = active;
            let localStream = AgoraRTC.createStream({
                audio: true,
                video: false,
            });
            setstream(localStream);
            localStream.init(() => {
                localStream.play("me");
                client.publish(localStream, handleError);
            }, handleError);
            setLoad(false);
            setConn_state(client.getConnectionState());
            setStreamId(userId);
        });
    };

    useEffect(() => {
        window.onbeforeunload = (event) => {
            const e = event || window.event;
            console.log("hey");
            e.preventDefault();
            if (e) {
                e.returnValue = "";
                console.log("ehy");
            }
            return "";
        };

        setstream(null);

        AgoraRTC.getDevices((devices) => {
            setAudio_input([]);
            setaudio_output([]);
            devices.forEach((device) => {
                if (device.kind === "audioinput") {
                    setAudio_input((p) => [...p, device]);
                } else if (device.kind === "audiooutput") {
                    setaudio_output((p) => [...p, device]);
                }
            });
        });

        client.on("stream-added", function (evt) {
            client.subscribe(evt.stream, handleError);
        });
        client.on("stream-subscribed", function (evt) {
            let stream = evt.stream;
            let streamId = String(stream?.getId());
            addVideoStream(streamId);
            stream.play(streamId);
        });
        client.on("connection-state-change", (evt) => {
            setConn_state(evt.curState);
        });
        client.on("stream-removed", async function (evt) {
            let stream = evt.stream;
            let streamId = String(stream?.getId());
            stream.close();
            localStorage.removeItem("streamId");
            removeVideoStream(streamId);
        });
        client.on("peer-leave", async function (evt) {
            let stream = evt.stream;
            let streamId = String(stream.getId());
            stream.close();

            localStorage.removeItem("streamId");
            removeVideoStream(streamId);
        });

        return () =>
            client.leave(async () => {
                if (localStorage.getItem("streamId")) {


                    localStorage.removeItem("streamId");

                };
            })
    }, []);

    if (load) return <p size="large">Joining</p>;

    return (
        <div>
            {conn_state == "CONNECTED" ? (
                <div>

                    <div id="me"></div>
                    <div id="remote"></div>
                </div>
            ) : (
                <button
                    onClick={join}
                    size="large"
                    style={{ display: "block", width: "100%" }}
                >
                    Join room
                </button>
            )}
            {stream && (
                <div>
                    <div
                        style={{
                            position: "absolute",
                            bottom: 10,
                            padding: 10,
                            width: "90%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <div>
                            {mute ? (
                                <p
                                    color="red"
                                    onClick={() => {
                                        stream.unmuteAudio();
                                        setMute(false);
                                    }}

                                >UnMute</p>
                            ) : (
                                <p
                                    onClick={() => {
                                        stream.muteAudio();
                                        setMute(true);
                                    }}
                                >Mute</p>
                            )}
                        </div>
                        {/* <Popover
                        placement="top"
                        enterDelay={0}
                        content={() => (
                            <>
                                <Popover.Item title>
                                    <span>Select output device</span>
                                </Popover.Item>
                                {audio_output.map((d, i) => (
                                    <Popover.Item
                                        key={i}
                                        onClick={() =>
                                            stream.setAudioOutput(d.deviceId, () => {
                                                console.log("success");
                                            })
                                        }
                                    >
                                        {d.label}
                                    </Popover.Item>
                                ))}
                            </>
                        )}
                    >
                        <Speaker size={32} />
                    </Popover> */}
                        {/* <Popover
                        placement="top"
                        enterDelay={0}
                        content={() => (
                            <>
                                <Popover.Item title>
                                    <span>Select input device</span>
                                </Popover.Item>
                                {audio_input.map((d, i) => (
                                    <Popover.Item
                                        key={i}
                                        onClick={() =>
                                            stream.switchDevice("audio", d.deviceId, () => {
                                                console.log("success");
                                            })
                                        }
                                    >
                                        {d.label}
                                    </Popover.Item>
                                ))}
                            </>
                        )}
                    >
                        <Music size={32} />
                    </Popover> */}
                        <p size={32} onClick={() => setState(true)} >Test </p>
                        <p
                            size={32}
                            color="red"
                            onClick={() => {
                                client.leave(() => { });
                            }}
                        >Leave </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default VideoCall;
