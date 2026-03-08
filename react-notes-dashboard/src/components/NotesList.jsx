import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";

function NotesList() {
  const { notes } = useContext(NotesContext);
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <ul>
      {notes.map((note, index) => (
        <li
          key={index}
          onClick={() => setSelectedIndex(index)}
          style={{
            cursor: "pointer",
            background: selectedIndex === index ? "yellow" : "transparent"
          }}
        >
          {note}
        </li>
      ))}
    </ul>
  );
}

export default NotesList;