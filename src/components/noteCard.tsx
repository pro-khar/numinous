import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { useNote } from "@/context/noteContext";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

function NoteCard({ note }) {
  const { updateNote, deleteNote, pinNote } = useNote();

  const notePinner = () => {
    pinNote(note.id);
    console.log(note.isPinned);
  };

  return (
    <>
      <Card
        className={`h-[200px] md:w-[290px] md:min-h-[260px] xl:w-[290px] xl:min-h-[260px] 2xl:w-[290px] 2xl:min-h-[260px] drop-shadow-sm overflow-hidden ${
          note.isPinned ? "" : "hover:drop-shadow-xl"
        }`}
      >
        <CardHeader className="flex gap-2 p-4 bg-gray-100 dark:bg-background rounded-t-lg">
          <div className="flex gap-2">
            <div className="text-lg font-medium w-full ml-2">
              {note.title ? note.title : "Untitled"}
            </div>

            <Popover>
              <PopoverTrigger>
                <TrashIcon
                  className={`w-5 hover:text-red-500 ${
                    note.isPinned ? "hidden" : "block"
                  }`}
                />
              </PopoverTrigger>
              <PopoverContent className="p-0 w-[200px]">
                <div className="p-4 space-y-4">
                  <h3 className="text-lg font-medium text-center">
                    Are you sure?
                  </h3>
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost">
                      <XIcon className="h-5 w-5" />
                    </Button>
                    <Button variant="destructive">
                      <CheckIcon
                        className="h-5 w-5"
                        onClick={() => deleteNote(note.id)}
                      />
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <PinIcon
              className={`w-5  ${
                note.isPinned
                  ? "fill-blue-500 text-blue-500"
                  : "hover:text-blue-500"
              } `}
              onClick={notePinner}
            />
          </div>
        </CardHeader>
        <Dialog>
          <DialogTrigger className="w-full text-left">
            <CardContent className="text-sm pt-4 h-full">
              {note.text}
            </CardContent>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>
              {note.title ? note.title : "Untitled Note"}
            </DialogTitle>
          </DialogContent>
        </Dialog>
      </Card>
    </>
  );
}

export default NoteCard;

function PinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="3 0 18 18"
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
      <path d="M18 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
function CheckIcon(props) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
