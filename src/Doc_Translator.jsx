import React from "react";

function Doc_Translator() {
  return (
    <div className="input-wrapper">
      <textarea
        className="translator-input"
        id="translator-input"
        name="translator-input"
        placeholder="  type here..."
        rows={"10"}
        cols={"80"}
      ></textarea>
    </div>
  );
}

export default Doc_Translator;
