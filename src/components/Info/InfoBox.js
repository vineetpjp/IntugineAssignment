import React from "react";

const InfoBox = ({ active, infoValue, infoKey, onCounterClick }) => {
  let css;
  if (active === infoKey) {
    css = "info--box info--box__active";
  } else {
    css = "info--box";
  }
  return (
    <div className={css} onClick={() => onCounterClick(infoKey)}>
      <div>
        <h4 className="info--box__text1">{infoKey}</h4>
      </div>
      <div className="info--box__text2">
        <p>{infoValue}</p>
      </div>
    </div>
  );
};

export default InfoBox;
