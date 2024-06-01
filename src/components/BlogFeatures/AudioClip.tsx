import React from "react";

export default function AudioClip({ children, color, file_path, file_type }) {
  return (
    <div>
      <audio controls>
        <source src={file_path} type={file_type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
