import React, { useState, useEffect } from "react";
import EditorPanel from "./components/EditorPanel";
import Preview from "./components/Preview";
import Navbar from "./components/Navbar";
import Split from "react-split";
import "./App.css";

function App() {
  const [html, setHtml] = useState(localStorage.getItem("html") || "");
  const [css, setCss] = useState(localStorage.getItem("css") || "");
  const [js, setJs] = useState(localStorage.getItem("js") || "");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("html", html);
    localStorage.setItem("css", css);
    localStorage.setItem("js", js);
  }, [html, css, js]);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        setHtml={setHtml}
        setCss={setCss}
        setJs={setJs}
      />

      <Split className="split" direction="vertical" sizes={[60, 40]}>
        <div className="editors">
          <EditorPanel language="html" value={html} onChange={setHtml} darkMode={darkMode} />
          <EditorPanel language="css" value={css} onChange={setCss} darkMode={darkMode} />
          <EditorPanel language="javascript" value={js} onChange={setJs} darkMode={darkMode} />
        </div>

        <Preview html={html} css={css} js={js} />
      </Split>
    </div>
  );
}

export default App;
