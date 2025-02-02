import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Celebration = () => {
  const [searchParams] = useSearchParams();
  const initialQuestion =
    searchParams.get("message") || "Yay, see you on the soon!";
  const [question, setQuestion] = useState("Will you go out with me?");
  const [gifSrc, setGifSrc] = useState(
    "https://media.giphy.com/media/FTGah7Mx3ss04PcasF/giphy.gif"
  );
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    setQuestion(initialQuestion);
    setGifSrc("https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif");
  };

  const handleNoHover = () => {
    if (noBtnRef.current) {
      const noBtnRect = noBtnRef.current.getBoundingClientRect();
      const maxX = window.innerWidth - noBtnRect.width;
      const maxY = window.innerHeight - noBtnRect.height;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      noBtnRef.current.style.position = "absolute";
      noBtnRef.current.style.left = `${randomX}px`;
      noBtnRef.current.style.top = `${randomY}px`;
    }
  };

  return (
    <div className="main">
      <div className="wrapper">
        <h2 className="question font-bold">{question}</h2>
        <img className="gif" alt="gif" src={gifSrc} />
        <div className="btn-group">
          <button className="yes-btn" onClick={handleYesClick}>
            Yes
          </button>
          <button
            className="no-btn"
            ref={noBtnRef}
            onMouseOver={handleNoHover}
            onClick={handleNoHover}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};
