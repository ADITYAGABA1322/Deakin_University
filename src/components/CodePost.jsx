import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/jsx/jsx.js';
import Markdown from 'react-markdown';
const CodePost = (props) => {
  const [jsxCode, setJsxCode] = useState('');
  
  return (
    <div>
      <h2>Add Code</h2>
      <div className="code-editor">
        <CodeMirror
          value={jsxCode}
          options={{
            mode: 'jsx',
            theme: 'material',
          }}
          onBeforeChange={(editor, data, value) => {
            setJsxCode(value);
            props.setCode(value);
          }}
        />
     {/* <Markdown children={jsxCode}></Markdown> */}
      </div>
    </div>
  );
};

export default CodePost;
