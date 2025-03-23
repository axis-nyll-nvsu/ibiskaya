import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Page from "./components/Page.tsx";

function App() {
    return (
        <div className="grid gap-2 px-2 pt-2 grid-cols-[250px_1fr]">
            <Sidebar />
            <Page />
        </div>
    )
}

export default App
