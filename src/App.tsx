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

function App() {
  //popup-functionality
  const [isEditing, setIsEditing] = useState(false);

  const handleMouseEnter = () => {
    setIsEditing(true);
  };
  const handleMouseLeave = () => {
    setIsEditing(false);
  };

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

  //as soon as the app loads

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
        {/* INPUT AND TOP-BAR */}
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
              <Dialog>
                <DialogTrigger>
                  <Button className="w-1/8 mr-2">New note</Button>
                </DialogTrigger>
                <DialogContent className="h-1/2">
                  <DialogTitle className="pb-[-10px]">
                    <div
                      className="max-h-5"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      contentEditable={isEditing}
                      style={{
                        border: "none",
                        padding: 0,
                        outline: isEditing ? "none" : "none",
                        cursor: "text",
                      }}
                    >
                      Untitled Note
                    </div>

                    <form>
                      <Textarea className="rounded-lg 2xl:h-[350px] xl:h-[200px] my-3 text-md font-light dark:bg-gray-900 bg-gray-300" />
                      <Button className="w-full">Save</Button>
                    </form>
                  </DialogTitle>
                </DialogContent>
              </Dialog>
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
