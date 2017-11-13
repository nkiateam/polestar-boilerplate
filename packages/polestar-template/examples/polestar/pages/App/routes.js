import Home from 'pages/Home';
import Sample from 'pages/Sample';
import Redux from 'pages/Redux';
import ReduxAsync from 'pages/ReduxAsync';

const routes = [
    // { path: '/',
    //   component: Home
    // },
    { path: '/home',
      component: Home
    },
    { path: '/sample',
      component: Sample
    },
    { path: '/redux',
      component: Redux},
    { path: '/redux-async',
      component: ReduxAsync
    }
  ];
  
  export default routes;