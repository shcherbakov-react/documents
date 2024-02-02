import React, { Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { routeConfig } from "app/providers/router/config/routeConfig";
import { Spin } from "antd";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";
import { SidebarLayout } from "app/providers/router/config/SidebarLayout";
import { MainPage } from "pages/MainPage";
import { AuthPage } from "pages/AuthPage/ui/AuthPage";

const AppRouter = () => {
    const renderWithWrapper = useCallback((route) => {
        const element = (
            <div className="page-wrapper">
                <RequireAuth>
                    {route.element}
                </RequireAuth>
            </div>
        )

        return (
            <>
                <Route element={<SidebarLayout />}>
                    <Route key={route.path} path={route.path} element={element} />
                </Route>
                <Route>
                    <Route key={"auth"} path="/auth" element={<AuthPage />} />
                </Route>
            </>
        )
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
}

export default AppRouter;