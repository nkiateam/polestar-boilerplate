import Home from 'pages/Home';
import Sample from 'pages/Sample';
import Redux from 'pages/Redux';
import ReduxAsync from 'pages/ReduxAsync';

import Dashboard from 'pages/Dashboard';
import CRUD from 'pages/CRUD';
import Wizard from 'pages/Wizard';
import CollectionSearch from 'pages/CollectionSearch';
import ExecSearch from 'pages/ExecSearch';
import FileManager from 'pages/FileManager';
import Settings from 'pages/Settings';

const routes = [
    // { path: '/',
    //   component: Home
    // },
    {
        path: '/dashboard',
        component: Dashboard,
    },
    {
        path: '/crud',
        component: CRUD,
    },
    {
        path: '/wizard',
        component: Wizard,
    },
    {
        path: '/collectionSearch',
        component: CollectionSearch,
    },
    {
        path: '/execSearch',
        component: ExecSearch,
    },
    {
        path: '/fileManager',
        component: FileManager,
    },
    {
        path: '/settings',
        component: Settings,
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/sample',
        component: Sample,
    },
    {
        path: '/redux',
        component: Redux,
    },
    {
        path: '/redux-async',
        component: ReduxAsync,
    },
];

export default routes;
