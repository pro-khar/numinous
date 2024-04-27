import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useState } from "react";
import { useNote } from "@/context/noteContext";
import { Input } from "./ui/input";

function Noteform() {
  const { addNote } = useNote();
  const [text, settext] = useState("");
  const [title, settitle] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (!text) return;
    console.log(text);
    addNote({ title, text });
    settext("");
    settitle("");
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-1/8 mr-2">New note</Button>
      </DialogTrigger>
      <DialogContent className="w-[90%] p-4 rounded-lg top-[22%] 2xl:top-[50%] md:top-[50%] xl:top-[50%]">
        <DialogTitle className="pb-[-10px]">
          <form onSubmit={add}>
            <Input
              className="text-xl"
              placeholder="Untitled Note"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />

            <Textarea
              className="rounded-lg h-[200px] 2xl:h-[350px] xl:h-[200px] my-3 text-md dark:bg-gray-900 bg-gray-300 p-5 font-normal tracking-wide"
              placeholder="Write something..."
              value={text}
              onChange={(e) => settext(e.target.value)}
            />
            <DialogClose asChild>
              <Button type="submit" className="w-full">
                Add
              </Button>
            </DialogClose>
          </form>
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

export default Noteform;
