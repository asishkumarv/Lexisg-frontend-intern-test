// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const simulatedResponse = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "“as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects.” (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link:
              "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };

      setResponse(simulatedResponse);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="main-container">
      <h1 className="title">Lexi Legal Assistant</h1>
      <form onSubmit={handleSubmit} className="form-box">
        <label htmlFor="query" className="label">Enter your legal question:</label>
        <textarea
          id="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask a legal question..."
          className="textarea"
          required
        ></textarea>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? "Generating..." : "Submit"}
        </button>
      </form>

      {response && (
        <div className="response-card">
          <h2>Answer</h2>
          <p>{response.answer}</p>
          <h3>Citation</h3>
          {response.citations.map((citation, index) => (
            <div key={index} className="citation-box">
              <p className="citation-text">"{citation.text}"</p>
              <a
                href={citation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="citation-link"
              >
                View Source: {citation.source}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
