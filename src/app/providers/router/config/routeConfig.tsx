import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ClientsPage } from "pages/ClientsPage";
import { ClientPage } from 'pages/ClientPage';
import { AuthPage } from "pages/AuthPage/ui/AuthPage";

type RouteItemProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    CLIENTS = 'clients',
    CLIENT = 'client',
    AUTH = 'auth'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.CLIENTS]: '/clients',
    [AppRoutes.CLIENT]: '/clients/:id'

};

export const routeConfig: Record<AppRoutes, RouteItemProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage />,
        authOnly: false,
    },
    [AppRoutes.CLIENTS]: {
        path: RoutePath.clients,
        element: <ClientsPage />,
        authOnly: true,
    },
    [AppRoutes.CLIENT]: {
        path: RoutePath.client,
        element: <ClientPage />,
        authOnly: true,
    },
};
