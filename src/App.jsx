import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [originalText, setOriginalText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);

  const resultText = originalText.replaceAll(find,replace);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000); 
    }
    catch (e) {
      console.log("Failed to copy text: ", e);
    }
  }

  return (
    <>
      <div className="header">
        ONLINE MULTI-LINE FIND AND REPLACE TEXT EDITOR
      </div>
      <div className="siteBody">
        <div className="description">
          Want to quickly open up a website to find and replace multi-line text? Use this simple editor to find and replace text across multiple lines. No premium AI features, no account needed, no subscriptions.
        </div><br/>
        <div id="center">
          <div className="textareaContainers">
            <textarea id="originalTextArea"
            name="originalTextArea"
            rows="10"
            cols="40"
            placeholder="Insert your text"
            value={originalText}
            onChange={(e)=>setOriginalText(e.target.value)}
            >
            </textarea>
            <div className="smallContainers">
              <textarea id="findTextArea"
              name="findTextArea"
              rows="6"
              cols="30"
              placeholder="Find..."
              value={find}
              onChange={(e)=>setFind(e.target.value)}
              ></textarea>
              <textarea id="replaceTextArea"
              name="replaceTextArea"
              rows="6"
              cols="30"
              placeholder="Replace with..."
              value={replace}
              onChange={(e)=>setReplace(e.target.value)}
              ></textarea>
            </div>
            <div className="rightColumn">
              <textarea id="resultTextArea"
              name="resultTextArea"
              rows="10"
              cols="40"
              placeholder="Result text"
              value={resultText}
              readOnly={true}
              ></textarea>
              <button id="copy" onClick={handleCopy} disabled={!resultText}>Copy text</button>
              {copied && <span>Copied to clipboard!</span>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
