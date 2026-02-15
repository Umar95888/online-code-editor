import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

function Navbar({ darkMode, setDarkMode, setHtml, setCss, setJs }) {

  const clearCode = () => {
    setHtml("");
    setCss("");
    setJs("");
  };

  const downloadZip = () => {
    const zip = new JSZip();
    zip.file("index.html", "<!-- Your HTML code -->");
    zip.file("style.css", "/* Your CSS code */");
    zip.file("script.js", "// Your JS code");

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "code.zip");
    });
  };

  return (
    <div className="navbar">
      <h2>Online Code Editor</h2>
      <div>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle Theme
        </button>
        <button onClick={clearCode}>Clear</button>
        <button onClick={downloadZip}>Download ZIP</button>
      </div>
    </div>
  );
}

export default Navbar;
