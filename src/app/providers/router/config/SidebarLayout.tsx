import { Outlet } from 'react-router-dom';
import { Sidebar } from "widgets/Sidebar";
import classNames from "classnames";
import { Navbar } from "widgets/Navbar/ui/Navbar";
import React from "react";

export const SidebarLayout = () => {
    return (
        <>
            <Sidebar />
            <div className={classNames('content', {}, [])}>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}