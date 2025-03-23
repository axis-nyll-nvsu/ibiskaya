import { IconType } from "react-icons";
import { LuHouse, LuUserRound, LuUsersRound, LuBuilding2 } from "react-icons/lu";

const Menu = () => {
    return (
        <div className="space-y-1">
            <MenuItem
                selected={true}
                Icon={LuHouse}
                title="Dashboard"
            />
            <MenuItem
                selected={false}
                Icon={LuUserRound}
                title="Residents"
            />
            <MenuItem
                selected={false}
                Icon={LuUsersRound}
                title="Households"
            />
            <MenuItem
                selected={false}
                Icon={LuBuilding2}
                title="Businesses"
            />
        </div>
    );
};

const MenuItem = ({
    selected,
    Icon,
    title
} : {
    selected: boolean,
    Icon: IconType,
    title: string
}) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded p-2 text-sm transition-[background-color,_color] ${selected ? "bg-stone-100 text-green-800" : "hover:bg-stone-100 bg-transparent text-stone-800"}`}
        >
            <Icon className={selected ? "text-green-800" : ""}/>
            <span>{title}</span>
        </button>
    );
};

export default Menu;