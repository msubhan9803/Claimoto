import instance from "config/axios/instance";
import React, { useEffect } from "react";

export default function Home() {



  //Test Request 
  useEffect(() => {
    const err =  instance.get('/status/404').
      then((err) => {
        // console.log(err);
      });
  }, [])


  
  return (
    <React.Fragment>
      <h4>Home</h4>
    </React.Fragment>

  );
}
