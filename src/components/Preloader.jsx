import React from "react";


export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#171717] text-white z-50 overflow-hidden">
      {/* Centered Video Loader */}
      {/* <video
        src={loader}
        autoPlay
        loop
        muted
        playsInline
        className="w-60 h-60 object-contain"
      /> */}

      {/* Optional text below video */}
      <p className="mt-6 text-sm text-gray-400 animate-pulse">
        Assets resources...
      </p>
    </div>
  );
}
