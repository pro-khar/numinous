import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";

import { useEffect, useState } from "react";

import { NotesProvider } from "./context/noteContext";
import { ScrollArea } from "./components/ui/scroll-area";
import Noteform from "./components/noteform";
import NoteCard from "./components/noteCard";

function App() {
  //main-working

  const [note, setnote] = useState([]);

  const addNote = (text) => {
    setnote((prev) => [{ id: Date.now(), ...text }, ...prev]);
  };
  const updateNote = (id, text) => {
    setnote((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id ? { ...prevNote, text } : prevNote
      )
    );
  };
  const deleteNote = (id) => {
    setnote((prev) => prev.filter((prevNote) => prevNote.id !== id));
  };
  const pinNote = (id) => {
    setnote((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id
          ? { ...prevNote, isPinned: !prevNote.isPinned }
          : prevNote
      )
    );
  };

  //Local storage implementation using useEffect()

  //Loading data from Local Storage
  useEffect(() => {
    const note = JSON.parse(localStorage.getItem("note"));

    if (note && note.length > 0) {
      //loads the 'notes' from local storage through setnote()
      setnote(note);
    }
  }, []);

  //Storing Data into the local Storage
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(note));
  }, [note]);

  return (
    <>
      <ThemeProvider>
        <NotesProvider
          value={{ note, addNote, updateNote, deleteNote, pinNote }}
        >
          <div className="bg-background h-screen text-gray-100">
            <div
              id="top-bar"
              className=" h-10 py-6 border border-t-0 border-x-0 border-border flex items-center fixed w-full z-10 bg-background"
            >
              <p className="font-bold tracking-tight text-xl relative w-full px-4 text-foreground">
                Numinous
              </p>
              <Noteform /> {/*INPUTTTTTT*/}
              <ThemeToggle />
            </div>

            <ScrollArea className="pt-12">
              <div className="flex flex-wrap justify-items-center gap-3 p-5 md:gap-8 xl:gap-8 2xl:gap-8 2xl:p-10 md:p-10 2xl:flex-row xl:flex-row md:flex-row 2xl:flex-wrap xl:flex-wrap md:justify-center 2xl:justify-normal xl:justify-normal md:flex-wrap transition duration-500 ease-in-out">
                {note.map((note) => (
                  <div
                    key={note.id}
                    className="w-[48%] min-h-[200px] md:w-[inherit] xl:w-[inherit] 2xl:w-[inherit]"
                  >
                    <NoteCard note={note} />
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </NotesProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
