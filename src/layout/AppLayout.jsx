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
            <Aside open={isOpen} />
            
            <div className={`${isOpen ? 'ml-[255px]' : 'sm:ml-72'}`}>
                <NavBar openAside={handleOpen} open={isOpen} />
            </div>

        </>
    );
}

export default AppLayout;