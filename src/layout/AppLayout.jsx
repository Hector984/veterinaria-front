import NavBar from "./NavBar";
import Aside from "./Aside";
import { useState } from "react";

const AppLayout = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <NavBar openAside={handleOpen} open={isOpen} />
            <Aside open={isOpen} />
        </>
    );
}

export default AppLayout;