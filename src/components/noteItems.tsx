import React from "react";
import { NoteCard } from "./note-card";
import { ScrollArea } from "./ui/scroll-area";

function NoteItems() {
  return (
    <>
      <div className="h-full p-6 flex gap-6 flex-wrap justify-around">
        {/* Notecard element has to be rendered using map() or any other suitable function */}
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
        <NoteCard />
      </div>
    </>
  );
}

export default NoteItems;
