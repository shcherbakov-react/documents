import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ClientsPage } from "pages/ClientsPage";
import { ClientPage } from 'pages/ClientPage';
import { AuthPage } from "pages/AuthPage/ui/AuthPage";
import {CreateClientPage} from "pages/CreateClientPage/ui/CreateClientPage";
import {Profile} from "pages/Profile";

type RouteItemProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    PROFILE = 'profile',
    CLIENTS = 'clients',
    CLIENT = 'client',
    CREATE_CLIENT = 'create_client',
    AUTH = 'auth'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.AUTH]: '/auth',
    [AppRoutes.CLIENTS]: '/clients',
    [AppRoutes.CLIENT]: '/clients/:id',
    [AppRoutes.CREATE_CLIENT]: '/clients/add',
    [AppRoutes.PROFILE]: '/profile',
};

export const routeConfig: Record<AppRoutes, RouteItemProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <Profile />,
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
    [AppRoutes.CREATE_CLIENT]: {
        path: RoutePath.create_client,
        element: <CreateClientPage />,
        authOnly: true,
    },
    [AppRoutes.CLIENT]: {
        path: RoutePath.client,
        element: <ClientPage />,
        authOnly: true,
    },
};
