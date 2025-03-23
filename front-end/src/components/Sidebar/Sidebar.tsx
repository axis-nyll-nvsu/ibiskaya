import AccountToggle from "./AccountToggle";
import Searchbar from "./Searchbar";

const Sidebar = () => {
    return (
        <div>
            <div className="sticky relative top-6 h-[calc(100vh-32px)]">
                <AccountToggle />
                <Searchbar />
                <div>
                    {/* TODO: Menu */}
                    Menu
                </div>
                <div className="absolute bottom-2">
                    {/* TODO: Settings */}
                    Settings
                </div>
            </div>
        </div>
    );
};

export default Sidebar;