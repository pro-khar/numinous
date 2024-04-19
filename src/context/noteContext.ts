import { createContext, useContext } from "react";

const NoteContext = createContext({
  note: [
    ///array because there will be multiple notes of same type
    {
      id: 1,
      title: "Note title",
      text: "Notes body text",
      isPinned: false,
    },
  ],
  addNote: (title, text) => {},
  updateNote: (id, title, text) => {},
  deleteNote: (id) => {},
  pinNote: (id) => {},
});

export const useNote = () => useContext(NoteContext); //() instead of {} to avoid writing 'return', shortcut 'useNote' created for importing/calling 'NoteContext'

export const NotesProvider = NoteContext.Provider;
