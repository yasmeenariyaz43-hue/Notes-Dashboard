import { NotesProvider } from "./context/NotesProvider";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";

function App() {
  return (
    <NotesProvider>
      <div>
        <h1>Notes Dashboard</h1>
        <NoteInput />
        <NotesCount />
        <NotesList />
      </div>
    </NotesProvider>
  );
}

export default App;