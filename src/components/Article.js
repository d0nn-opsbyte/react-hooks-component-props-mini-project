import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const displayMinutes = () => {
    if (minutes > 30) {
      return "🍱 " + minutes + " min read";
    } else {
      const cups = Math.ceil(minutes / 5);
      return "☕".repeat(cups) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p><em>{displayMinutes()}</em></p>
    </article>
  );
}

export default Article;