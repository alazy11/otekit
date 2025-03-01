import Header from "./components/Header";
import BottomMiddle from "./components/alert/BottomMiddle";

const Template = ({children})=> {
    return (
        <>
        <BottomMiddle />
        <Header />
        {children}
        </>
    )
};

export default Template;