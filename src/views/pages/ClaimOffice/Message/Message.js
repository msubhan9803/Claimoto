import React, { useState } from "react";
import send_attachment from 'assets/img/call/actions/send_attachment.png';
import send_message from 'assets/img/call/actions/send_message.png';
import useAgoraRtm from "hooks/useAgoraRtm";
import AgoraRTM from "agora-rtm-sdk";

const client = AgoraRTM.createInstance("5f611f72fa2d48798a9d13cc723447da");

// const client = AgoraRTM.createInstance(process.env.REACT_APP_AGORA_APPID);
const randomUseName = "23421323";
function Message({ appid, token, channel, joinState, accountName }) {
    const [textArea, setTextArea] = useState("");
    const { messages, sendChannelMessage } = useAgoraRtm(
        randomUseName,
        client,
        token,
        accountName,
        joinState
    );
    const submitMessage = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            if (textArea.trim().length === 0) return;
            sendChannelMessage(e.currentTarget.value);
            setTextArea("");
        }
    };
    return (
        <React.Fragment>
            <div className='chat-section'>
                <div>
                    <h2>Chat</h2>
                </div>
                <div className='messages' id='log'>
                    {messages.map((data, index) => {
                        return (
                            data.user.name == accountName ?
                                <div key={index} className="message text-light p-1 text-end">
                                    <p className="bg-primary rounded text-light p-1 text-end">{data.message}</p>
                                </div>
                                :
                                <div key={index} className="message text-secondary p-1 text-start">
                                    <p className="bg-light rounded text-secondary p-1 text-start">{data.message}</p>
                                </div>
                        );
                    })}
                </div>
                <div className='chat-actions'>
                    <div>
                        <div role="button"
                            // onClick={_handleLogin}
                            className={"msg_action"}>
                            <div className='msg_action_img rounded-0'>
                                <img src={send_attachment} className="rounded-0" />
                            </div>
                        </div>
                    </div>
                    <div className='msg_send_box'>
                        <input onKeyPress={submitMessage} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                        <img role="button" onClick={submitMessage} src={send_message} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Message;