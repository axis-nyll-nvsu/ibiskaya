import AccountToggle from "./AccountToggle";
import Searchbar from "./Searchbar";
import Menu from "./Menu";

const Sidebar = () => {
    return (
        <div>
            <div className="relative sticky top-2 bg-white border-1 border-stone-200 rounded-lg p-2 h-[calc(100vh-20px)] shadow">
                <AccountToggle />
                <Searchbar />
                <Menu />
                <div className="absolute bottom-2">
                    {/* TODO: Settings */}
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Sidebar;