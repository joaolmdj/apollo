import React, { useEffect, useRef } from 'react';

export const Banner = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <div className='banner'>
      <div>
        <video
          style={{ maxWidth: "100%", margin: "0 auto" }}
          playsInline
          loop
          muted
          alt="All the devices"
          src="/videos/maquitec.mp4"
          ref={videoEl}
        />
        <img src="images/slogan.png" alt="slogan"/>
      </div>
    </div>
  );
}