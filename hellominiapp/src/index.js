// hellominiapp/src/index.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Load Nuxt HTML from the public folder via fetch
    fetch('/nuxt/index.html')
      .then((res) => res.text())
      .then((data) => setHtmlContent(data))
      .catch((err) => console.error('Failed to load Nuxt HTML:', err));
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

ReactDOM.render(<App />, document.getElementById('root'));
