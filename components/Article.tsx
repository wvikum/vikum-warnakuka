import Image from "next/image";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "../styles/Article.module.css";

interface ArticleProps {
  title: string;
  date: string;
  description: string;
  content: string;
  isExpanded: boolean;
  onClick: () => void;
}

const Article: React.FC<ArticleProps> = ({
  title,
  date,
  description,
  content,
  isExpanded,
  onClick,
}) => {
  return (
    <div className={styles.article}>
      <h2 onClick={onClick} className={styles.title}>
        {title}
      </h2>
      <p className={styles.date}>{date}</p>
      <p className={styles.description}>{description}</p>
      {isExpanded && (
        <div className={styles.content}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default Article;
