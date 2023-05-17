import React, { useState } from "react";

const AnalyzeText = () => {
  const [wordsCount, setWordsCount] = useState(0);
  const [charactersCount, setCharactersCount] = useState(0);
  const [sentencesCount, setSentencesCount] = useState(0);
  const [paragraphsCount, setParagraphsCount] = useState(0);
  const [pronounsCount, sePronounsCount] = useState(0);
  return (
    <div className="parent">
      <div
        class="row"
        style={{
          border: "1px solid black",
          marginTop: "50px",
          marginLeft: "10%",
          marginRight: "10%",
          height:"70px",
        }}
      >
        <div class="col-sm-2" style={{ textAlign: "center" }}>
          <label>Words</label>
          <br />
          {wordsCount}
        </div>
        <div class="col-sm-2" style={{ textAlign: "center" }}>
          <label>Characters</label>
          <br />
          {charactersCount}
        </div>
        <div class="col-sm-4" style={{ textAlign: "center" }}>
          <label>Sentences</label>
          <br />
          {sentencesCount}
        </div>
        <div class="col-sm-2" style={{ textAlign: "center" }}>
          <label>Paragraphs</label>
          <br />
          {paragraphsCount}
        </div>
        <div class="col-sm-2" style={{ textAlign: "center" }}>
          <label>Pronouns</label>
          <br />
          {pronounsCount}
        </div>
      </div>
      <div className='content' style={{
                height:"300px",
                marginTop:"50px",
                border:"1px solid black",
                marginLeft: "10%",
                marginRight: "10%",
            }}>

            </div>
            <div className='content' style={{
                height:"70px",
                marginTop:"50px",
                border:"1px solid black",
                marginLeft: "10%",
                marginRight: "10%",
            }}>

            </div>


    </div>
  );
};

export default AnalyzeText;
