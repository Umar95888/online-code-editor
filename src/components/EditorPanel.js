import React from "react";
import Editor from "@monaco-editor/react";

function EditorPanel({ language, value, onChange, darkMode }) {
  return (
    <div className="editor-container">
      <h3>{language.toUpperCase()}</h3>
      <Editor
        height="200px"
        language={language}
        value={value}
        theme={darkMode ? "vs-dark" : "light"}
        onChange={(val) => onChange(val)}
        options={{
          automaticLayout: true,
          autoClosingBrackets: "always",
          minimap: { enabled: false }
        }}
      />
    </div>
  );
}

export default EditorPanel;
