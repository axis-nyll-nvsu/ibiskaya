import { Command } from 'cmdk';
import {Dispatch, SetStateAction, useEffect} from 'react';

const CommandMenu = ({open, setOpen} : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {

    // Toggle the menu when ⌘K is pressed
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0 bg-stone-950/50"
            onClick={() => setOpen(false)}
        >
            <div
                className="bg-white rounded shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
                onClick={(e) => e.stopPropagation()}
            >
                <Command.Input className="p-2 focus:outline-none border-stone-300 border-b w-full"/>
                <Command.List>
                    <Command.Empty>No results found.</Command.Empty>
                    <Command.Group heading="Menu">
                        <Command.Item>a</Command.Item>
                        <Command.Item>b</Command.Item>
                        <Command.Separator/>
                        <Command.Item>c</Command.Item>
                    </Command.Group>

                    <Command.Item>Apple</Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    );
}

export default CommandMenu;