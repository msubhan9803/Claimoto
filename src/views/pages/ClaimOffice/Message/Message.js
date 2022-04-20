import React, { useRef, useState } from "react";
import send_attachment from 'assets/img/call/actions/send_attachment.png';
import send_message from 'assets/img/call/actions/send_message.png';
import useAgoraRtm from "hooks/useAgoraRtm";
import AgoraRTM from "agora-rtm-sdk";
import { dataURLToBlob } from "hooks/agoraFunctions";
import { imageToBlob } from "hooks/agoraFunctions";
import { fileOrBlobToDataURL } from "hooks/agoraFunctions";

const client = AgoraRTM.createInstance("5f611f72fa2d48798a9d13cc723447da");

// const client = AgoraRTM.createInstance(process.env.REACT_APP_AGORA_APPID);
const randomUseName = "23421323";
function Message({ appid, token, channel, joinState, accountName }) {
    const attachment_ref = useRef();
    const [textArea, setTextArea] = useState("");
    const { messages, sendChannelMessage, sendChannelImage } = useAgoraRtm(
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

    const sendMsgClick = () => {
        if (textArea.trim().length === 0) return;
        sendChannelMessage(textArea);
        setTextArea("");
    }




    const _attachmentHandler = (e) => {
        try {


            let selectedFile = e.target.files[0];
            fileOrBlobToDataURL(selectedFile, async function (dataurl) {
                imageToBlob(dataurl, async (blob) => {
                    const mediaMessage = await client.createMediaMessageByUploading(blob, {
                        messageType: 'IMAGE',
                        fileName: 'agora.jpg',
                        description: 'send image',
                        thumbnail: blob,
                        // width: 100,
                        // height: 200,
                        // thumbnailWidth: 50,
                        // thumbnailHeight: 200, 
                    })
                    sendChannelImage(mediaMessage);

                })
            })

        } catch (error) {
            console.log(error);
        }


    }

    const _sendAttachment = () => {
        attachment_ref.current.value = "";
        attachment_ref.current.click();
    }

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
                        {/* <div role="button"
                            // onClick={_handleLogin}
                            className={"msg_action"}>
                            <div className='msg_action_img rounded-0'>
                                <img onClick={_sendAttachment} src={send_attachment} className="rounded-0" />
                            </div>
                        </div> */}
                    </div>
                    <div className='msg_send_box'>
                        <input onKeyPress={submitMessage} value={textArea} onChange={(e) => setTextArea(e.target.value)} />
                        <img role="button" onClick={() => { sendMsgClick() }} src={send_message} />
                    </div>
                </div>

                <input
                    type="file"
                    id="agora_attachment"
                    name="Image1"
                    style={{ display: "none" }}
                    onChange={_attachmentHandler}
                    ref={attachment_ref}
                />


            </div>
        </React.Fragment>
    );
}

export default Message;