import React from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Doc_Translator from "./Doc_Translator";
import logo from "../src/assets/files/applogo.png";

function Doc_Viewer() {
  const docs = [
    {
      uri: "../src/assets/files/sample.pdf",
      fileType: "pdf",
      fileName: "sample.pdf",
    },
  ];
  return (
    <>
      <nav>
        <div className="container">
          <img src={logo} className="logo" />

          <div className="profile-area">
            <div className="search-bar">
              <span className="material-symbols-sharp">search</span>
              <input type="search" placeholder="search..." />
            </div>

            <div className="profile">
              <div className="profile-photo">
                <span className="material-symbols-outlined ">
                  notifications
                </span>

                <span
                  className="material-symbols-outlined"
                  style={{ width: "25px" }}
                >
                  account_circle
                </span>

                <span className="material-symbols-sharp mt-2">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="main">
        <aside>
          {/* <button id="close-btn">
            <span className="material-symbols-sharp">close</span>
          </button> */}

          <div className="sidebar">
            <a href="#" className="active redirect-button ">
              <span className="material-symbols-outlined">draft</span>
              <h4> SAVE DRAFT</h4>
            </a>
            <br />
            <a href="#" className="redirect-button  ">
              <span className="material-symbols-outlined">save</span>
              <h4>SUBMIT</h4>
            </a>
          </div>
        </aside>
        <div className="content">
        <div className="view-doc-wrapper">
          <div className="view-document">
            <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
          </div>
        </div>
        <div className="doc-translator">
          <Doc_Translator />
        </div>
        </div>
      </main>
    </>
  );
}

export default Doc_Viewer;
