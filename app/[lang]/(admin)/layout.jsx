import SideNav from "./components/SideNav";
// import Header from "./components/Header";

const DashboardRootLayout = async ({children})=> {
    return (
        <div className="w-full flex h-dvh">
            <SideNav />
            <div className="h-full flex-1 overflow-y-auto">
            {/* <Header /> */}
            {/* <Suspense fallback={<PageSkeleton />}> */}
            {children}
            {/* </Suspense> */}
            </div>
        </div>
    )

}

export default DashboardRootLayout;