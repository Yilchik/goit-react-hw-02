import React from "react";
import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <div className={css.feedback}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
    </div>
  );
};

export default Feedback;
