import React, { FC, useState } from "react";
import { ProgressBar } from "react-bootstrap";

import Icon from "../Icon";

const ChallengeItem: FC<Challenge> = ({ title, quest_id, stars, xp }) => {
  const [checked, setChecked] = useState<string | null>(
    localStorage.getItem(quest_id)
  );
  const handleClick = () =>
    setChecked(prevChecked => {
      const nextChecked = prevChecked === "on" ? "off" : "on";
      localStorage.setItem(quest_id, nextChecked);
      return nextChecked;
    });
  return (
    <div className="ChallengeItem" onClick={handleClick}>
      <Icon name={`check-${checked || "off"}`} />
      <div className="ChallengeItem-title">{title}</div>
      <ProgressBar now={checked === "on" ? 100 : 0} />
      <span className="ChallengeItem-stars">
        {[...Array(stars)].map((_, key) => (
          <Icon name="star" key={key} />
        ))}
      </span>
      <span className="ChallengeItem-xp">{xp}</span>
    </div>
  );
};

export default ChallengeItem;
