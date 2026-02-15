import React, { useEffect, useRef } from "react";

function Preview({ html, css, js }) {
  const iframeRef = useRef();

  useEffect(() => {
    const doc = iframeRef.current.contentDocument;
    doc.open();
    doc.write(`
      <html>
        <style>${css}</style>
        <body>
          ${html}
          <script>${js}<\/script>
        </body>
      </html>
    `);
    doc.close();
  }, [html, css, js]);

  return <iframe ref={iframeRef} title="preview" className="preview" />;
}

export default Preview;
