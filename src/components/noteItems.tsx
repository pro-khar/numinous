import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useNote } from "@/context/noteContext";
import { useState } from "react";
import { Label } from "./ui/label";

function NoteItems({ note }) {
  const { updateNote, deleteNote, pinNote } = useNote();
  const [notetext, setNotetext] = useState(note.text);

  const notePinner = () => {
    pinNote(note.id);
    console.log(note.isPinned);
  };

  return (
    <>
      <Card className="w-[290px] min-h-[260px] drop-shadow-sm hover:drop-shadow-xl">
        <CardHeader className="flex gap-2 p-4 bg-gray-100 dark:bg-background rounded-t-lg">
          <div className="flex gap-2">
            <div className="text-lg font-medium w-full ml-2">{note.title}</div>
            <TrashIcon
              className={`w-5 hover:text-red-500`}
              onClick={() => deleteNote(note.id)}
            />
            <PinIcon
              className={`w-5  ${
                note.isPinned
                  ? "fill-blue-500 text-blue-500"
                  : "hover:text-blue-500"
              }`}
              onClick={notePinner}
            />
          </div>
        </CardHeader>
        <CardContent className="text-sm pt-4">{note.text}</CardContent>
      </Card>
    </>
  );
}

export default NoteItems;

function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
