const Loading = () => {
    return (
        <div className="flex flex-col w-full mb-5 rounded-md bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row animate-pulse">
            <div className="rounded-t-lg object-cover md:rounded-none md:rounded-l-lg w-[100px] h-[130px] bg-[color:#e0e0e0]"></div>
            <div className="flex flex-col justify-start p-6 w-full">
                <div className="h-2.5 bg-[color:#e0e0e0] rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-[color:#e0e0e0] rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2.5 bg-[color:#e0e0e0] rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
            <div className="flex flex-col p-6">
                <div className="h-2.5 bg-[color:#e0e0e0] rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            </div>
        </div>
    );
}

export default Loading;
