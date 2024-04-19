import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Button } from "./components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useEffect, useState } from "react";

import { Textarea } from "./components/ui/textarea";
import { NotesProvider } from "./context/noteContext";
import NoteItems from "./components/noteItems";
import { ScrollArea } from "./components/ui/scroll-area";
import Noteform from "./components/noteform";

function App() {
  //main-working

  const [note, setnote] = useState([]);
  const addNote = (title, text) => {
    setnote((prev) => [{ id: Date.now(), ...title, text }, ...prev]);
  };
  const updateNote = (id, title, text) => {
    setnote((prev) =>
      prev.map((prevNote) =>
        prevNote.id === id ? { ...prevNote, title, text } : prevNote
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
        <div className="bg-background h-screen text-gray-100">
          <div
            id="top-bar"
            className=" h-10 py-6 border border-t-0 border-x-0 border-border flex items-center fixed w-full z-10 bg-background"
          >
            <p className="font-bold tracking-tight text-xl relative w-full px-4 text-foreground">
              Notepad X
            </p>

            <NotesProvider
              value={{ note, addNote, updateNote, deleteNote, pinNote }}
            >
              <Noteform /> {/*INPUTTTTTT*/}
            </NotesProvider>

            <ThemeToggle />
          </div>

          <ScrollArea className="pt-12">
            <NoteItems />
          </ScrollArea>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
