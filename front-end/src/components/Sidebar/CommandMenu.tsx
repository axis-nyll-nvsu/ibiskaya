import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { LuLayoutDashboard, LuUserRound, LuUsersRound, LuBuilding2 } from "react-icons/lu";

const CommandMenu = ({open, setOpen} : {open: boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
    const [value, setValue] = useState('');

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
            className="fixed inset-0 bg-stone-700/50"
            onClick={() => setOpen(false)}
        >
            <div
                className="bg-white rounded shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
                onClick={(e) => e.stopPropagation()}
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder="What do you need?"
                    className="relative p-2 focus:outline-none border-stone-300 text-stone-900s border-b w-full"
                />
                <Command.List
                    className="p-2"
                >
                    <Command.Empty>
                        No results found for "
                        <span className="text-green-600">{value}</span>".
                    </Command.Empty>
                    <Command.Group
                        heading="General"
                        className="text-xs text-stone-400"
                    >
                        <Command.Item
                            className="relative flex items-center gap-2 p-2 transition-colors text-sm text-stone-800 hover:bg-stone-200 rounded"
                        >
                            <LuLayoutDashboard />
                            Dashboard
                        </Command.Item>
                        <Command.Item
                            className="flex items-center gap-2 p-2 transition-colors text-sm text-stone-800 hover:bg-stone-200 rounded"
                        >
                            <LuUserRound />
                            Residents
                        </Command.Item>
                        <Command.Item
                            className="flex items-center gap-2 p-2 transition-colors text-sm text-stone-800 hover:bg-stone-200 rounded"
                        >
                            <LuUsersRound />
                            Households
                        </Command.Item>
                        <Command.Item
                            className="flex items-center gap-2 p-2 transition-colors text-sm text-stone-800 hover:bg-stone-200 rounded"
                        >
                            <LuBuilding2 />
                            Businesses
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </div>
        </Command.Dialog>
    );
}

export default CommandMenu;