import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { Note } from "./Components/Note/Note";
import notes from "./db/notes";

interface NoteItem {
  title: string;
  content: string;
  key: number;
}

const App = () => {
  return (
    <>
      <Header />
      {notes.map((noteItem: NoteItem) => (
        <Note
          key={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
        />
      ))}
      <Footer />
    </>
  );
};

export default App;
