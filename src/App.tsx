import { useState } from "react";
import CreateArea from "./Components/CreateArea/CreateArea";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Note } from "./Components/Note/Note";

interface NoteItem {
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  const addNote = (newNote: NoteItem) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes((prevNotes) =>
      prevNotes.filter((noteItem, index) => index !== id)
    );
  };

  return (
    <>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
