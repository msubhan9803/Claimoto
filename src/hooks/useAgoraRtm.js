/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import randomColor from "randomcolor";

const useAgoraRtm = (userName, client, token, accountName, joinState) => {
  const [messages, setMessages] = useState([]);
  const channel = useRef(client.createChannel("test")).current;
  const color = useRef(randomColor({ luminosity: "dark" })).current;
  const initRtm = async () => {
    try {
      await client.login({
        uid: accountName, token
      });
      await channel.join();
      await client.setLocalUserAttributes({
        name: userName,
        color,
      });
    } catch (error) {
      // initRtm();
    }
  };
  useEffect(() => {
    if(joinState){
      initRtm();
    }else{
      if(client){
        client.logout();
      }
    }
    // eslint-disable-next-line consistent-return
  }, [joinState]);

  useEffect(() => {
    channel.on("ChannelMessage", (data, uid) => {
      handleMessageReceived(data, uid);
    });
  }, []);
  const handleMessageReceived = async (data, uid) => {
    const user = await client.getUserAttributes(uid);
    console.log(data);
    if (data.messageType === "TEXT") {
      const newMessageData = { user, message: data.text };
      setCurrentMessage(newMessageData);
    }
  };

  const [currentMessage, setCurrentMessage] = useState();
  const sendChannelMessage = async (text) => {
    channel
      .sendMessage({ text })
      .then(() => {
        setCurrentMessage({
          user: { name: accountName, color },
          message: text,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const sendChannelImage = async (media) => {
    channel
      .sendMessage(media)
      .then(() => {
        setCurrentMessage({
          user: { name: accountName, color },
          message: "text",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


  useEffect(() => {
    if (currentMessage) setMessages([...messages, currentMessage]);
  }, [currentMessage]);

  return { sendChannelMessage, messages, sendChannelImage };
};
export default useAgoraRtm;
