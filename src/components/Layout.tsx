import Sidebar from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-auto h-screen">
            <Sidebar />
            <div className="grow">{children}</div>
        </div>
    )
}

export default Layout;