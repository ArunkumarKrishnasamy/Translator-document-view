import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const HandleFile = (e) => {
    navigate("/doc-viewer");
  };
  return (
    <div className="content-wrapper" id="content-wrapper-id">
      <label className="custom-file-upload">
        <input
          type="file"
          name="doc-upload"
          id="doc-upload"
          onInput={() => {
            HandleFile();
          }}
        />
      </label>
    </div>
  );
}

export default Home;
