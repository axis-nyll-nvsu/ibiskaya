import {useState} from 'react';
import {LuSearch, LuCommand} from 'react-icons/lu';
import CommandMenu from './CommandMenu';

const Searchbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-2 text-sm">
                <LuSearch className="mr-2" />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
                />
                <span className="text-xs p-1 bg-stone-50 rounded shadow absolute right-2 flex gap-0.5 items-center">
                    <LuCommand /> + K
                </span>
            </div>

            <CommandMenu open={open} setOpen={setOpen} />
        </>
    );
};

export default Searchbar;