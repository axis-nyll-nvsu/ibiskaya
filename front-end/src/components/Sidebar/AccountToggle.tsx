import { LuChevronsUpDown } from "react-icons/lu";

const AccountToggle = () => {
    return (
        <div className="border-b mb-2 pb-2 border-stone-200">
            <button className="flex p-2 hover:bg-stone-100 rounded transition-colors relative gap-2 w-full items-center">
                <img
                    src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Alexander"
                    alt="avatar"
                    className="size-8 rounded shrink-0 bg-green-400 shadow"
                />
                <div className="text-start">
                    <span className="text-sm font-semibold block">Vernyll Jan P. Asis</span>
                    <span className="text-xs text-stone-500 block">Administrator</span>
                </div>
                <LuChevronsUpDown className="absolute right-2" />
            </button>
        </div>
    );
};

export default AccountToggle;