import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./CreateArea.module.css";

interface Note {
  title: string;
  content: string;
}

interface CreateAreaProps {
  onAdd: (note: Note) => void;
}

const CreateArea: React.FC<CreateAreaProps> = ({ onAdd }) => {
  const [note, setNote] = useState<Note>({ title: "", content: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const submitNote = (e: FormEvent) => {
    e.preventDefault();
    onAdd(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div>
      <form className={styles.form}>
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={3}
        />
        <button onClick={submitNote} className={styles.form_btn}>
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateArea;
