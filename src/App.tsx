import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/theme-toggle"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import { useState } from "react"
import { Textarea } from "./components/ui/textarea"
import { Ticket } from "lucide-react"




function App() {
  
  const [isEditing, setIsEditing] = useState(false);
  

  const handleMouseEnter = () => {
    setIsEditing(true);
  };

  const handleMouseLeave = () => {
    setIsEditing(false);
  };

 

  return (
    <>
    <ThemeProvider>
      <div className="bg-background h-screen text-gray-100">


        <div className=" h-10 py-6 border border-t-0 border-x-0 border-border flex items-center">
        <p className="font-bold tracking-tight text-xl relative w-full px-4 text-foreground">Notepad X</p>
          
          <Dialog>
            <DialogTrigger><Button className="w-1/8 mr-2">New note</Button></DialogTrigger>
            <DialogContent className="h-1/2">
                <DialogTitle className="pb-[-10px]">
                  <div className="max-h-5"
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                              contentEditable={isEditing} style={{
                                border: 'none',
                                padding: 0,
                                outline: isEditing? 'none':'none',
                                cursor: 'text'}}>
                                  Untitled Note
                  </div>
                
                        
                
                <form>
                <Textarea className="rounded-none h-full"/>
                <Button>Save</Button>
              
                </form>
                </DialogTitle> 
            </DialogContent>
          </Dialog>

          <ThemeToggle/>
          
        </div>


        {/* Input bar */}
        {/*Output content*/}
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
