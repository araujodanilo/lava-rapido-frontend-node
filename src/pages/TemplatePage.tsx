import React from "react";
import Navbar from "../components/navbar";

const TemplatePage = ({ children }: { children: React.ReactElement }) => {
    return (
        <>
            <Navbar />

            {children}
        </>
    )
}

export default TemplatePage;