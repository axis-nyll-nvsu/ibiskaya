import { LuChevronRight } from "react-icons/lu";

const Page = () => {
    return (
        <div className="mb-2 h-[200vh] p-2">
            <div className="pb-1 mb-2 border-b border-stone-200 text-stone-900">
                <h3 className="text-2xl font-bold">
                    Dashboard
                </h3>
                <span className="text-xs text-stone-500">
                   Home<LuChevronRight className="inline"/>Dashboard
                </span>
            </div>
        </div>
    );
};

export default Page;