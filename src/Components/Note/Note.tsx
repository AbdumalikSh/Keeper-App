import styles from "./Note.module.css";
export const Note = () => {
  return (
    <div className={styles.note}>
      <h1 className={styles.note_header}>This is the note title</h1>
      <p className={styles.note_text}>This is the note content</p>
    </div>
  );
};
