import React from "react";
import { NoteCard } from "./note-card";
import { ScrollArea } from "./ui/scroll-area";

function NoteItems() {
  return (
    <>
      <div className="h-full p-6">
        {/* Notecard element has to be rendered using map() or any other suitable function */}
        <div className="flex gap-6 flex-wrap justify-center">
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </div>
      </div>
    </>
  );
}

export default NoteItems;
