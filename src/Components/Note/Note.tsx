import React from "react";
import styles from "./Note.module.css";

interface NoteProps {
  title: string;
  content: string;
}

export const Note: React.FC<NoteProps> = (props) => {
  return (
    <div className={styles.note}>
      <h1 className={styles.note_header}>{props.title}</h1>
      <p className={styles.note_text}>{props.content}</p>
    </div>
  );
};
