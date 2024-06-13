import React from "react";
import Header from "./Header";
import Note from "./Note";
import '../styles/styles.css';

function App() {
  const [notes, setNotes] = React.useState([]);
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });
  const [isExpanded, setIsExpanded] = React.useState(false);

  function addNote() {
    // if note is empty
    if (note.title === "" && note.content === "") {
      return;
    }
    setNotes(prevNotes => {
      return [...prevNotes, note];
    });

    setNote({
      title: "",
      content: ""
    });
    setIsExpanded(false);
  }

  function handleExpand() {
    setIsExpanded(true);
  }

  return (
    <div>
      <Header />
      <div className="container">
        <div className="form">
          {isExpanded && (
            <input
              name="title"
              onChange={e => setNote({ ...note, title: e.target.value })}
              value={note.title}
              placeholder="Title"
            />
          )}
          <textarea
            name="content"
            onClick={handleExpand}
            onChange={e => setNote({ ...note, content: e.target.value })}
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? "3" : "1"}
          />
          {isExpanded && <button onClick={addNote}>+</button>}
        </div>
        <div className="notes">
          {notes.map((note, index) => (
            <Note
              key={index}
              title={note.title}
              content={note.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
