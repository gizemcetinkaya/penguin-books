import Sidebar from "../Layout/Sidebar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex flex-auto h-screen">
            <Sidebar />
            <div className="grow overflow-y-auto">{children}</div>
        </div>
    )
}

export default Layout;