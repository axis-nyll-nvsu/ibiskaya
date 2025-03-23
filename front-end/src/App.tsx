import Sidebar from './components/Sidebar/Sidebar.tsx';
import Page from './components/Page.tsx';

function App() {
    return (
        <div className="grid gap-4 px-4 pt-4 grid-cols-[220px_1fr]">
            <Sidebar />
            <Page />
        </div>
    )
}

export default App
