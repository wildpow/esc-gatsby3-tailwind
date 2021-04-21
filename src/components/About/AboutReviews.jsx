import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NodeGroup } from "react-move";
import star from "../../images/stars.svg";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

const Reviews = ({ maxIndex, content }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(Math.random() * maxIndex - 1) + 1
  );
  const [isRunning, setIsRunning] = useState(true);
  useInterval(
    () => {
      setCurrentIndex(maxIndex === currentIndex ? 0 : currentIndex + 1);
    },
    isRunning ? 6000 : null
  );
  return (
    <div
      className="ReviewWrapper"
      onMouseEnter={() => setIsRunning(false)}
      onMouseLeave={() => setIsRunning(true)}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <img
          className="stars-image"
          src={star}
          alt="E.S.C mattress centers average review is 5 stars"
        />
        <NodeGroup
          style={{ position: "relative" }}
          data={[currentIndex]}
          keyAccessor={d => d}
          start={() => ({
            opacity: 0,
          })}
          enter={() => ({
            opacity: [1],
            timing: { duration: 1000 },
          })}
          update={() => ({
            opacity: [1],
            timing: { duration: 1000 },
          })}
          leave={() => ({
            opacity: [0],
            timing: { duration: 200 },
          })}
        >
          {nodes => (
            <div style={{ position: "relative" }} className="relativeWrapper">
              {nodes.map(({ key, data, state: { opacity } }) => (
                <div
                  key={key}
                  style={{ opacity, position: "relative" }}
                  className="relativeWrapper"
                >
                  <div className="InsideWrapper">
                    <p className="Review">{content[data].comment}</p>
                    <span className="Name">{`- ${content[data].nameOfReviewer} `}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </NodeGroup>
      </div>
    </div>
  );
};
Reviews.propTypes = {
  maxIndex: PropTypes.number.isRequired,
  content: PropTypes.instanceOf(Object).isRequired,
};

export default Reviews;
