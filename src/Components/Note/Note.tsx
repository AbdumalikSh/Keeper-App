import React from "react";
import styles from "./Note.module.css";

interface NoteProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}

export const Note: React.FC<NoteProps> = ({ id, title, content, onDelete }) => {
  const handleClick = () => {
    onDelete(id);
  };

  return (
    <div className={styles.note}>
      <h1 className={styles.note_header}>{title}</h1>
      <p className={styles.note_text}>{content}</p>
      <button onClick={handleClick} className={styles.note_del}>
        DELETE
      </button>
    </div>
  );
};
