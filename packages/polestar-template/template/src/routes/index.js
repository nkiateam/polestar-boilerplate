import RouteWithSubRoutes from './RouteWithSubRoutes';

import Home from '../pages/App/components/Home';
import About from '../pages/App/components/About';
import Bus from '../pages/App/components/Bus';
import Cart from '../pages/App/components/Cart';

import ReduxPage from '../pages/ReduxPage';
import ReduxAsyncPage from '../pages/ReduxAsyncPage';

const routes = [
    // { path: '/',
    //   component: Home
    // },
    { path: '/home',
      component: Home
    },
    { path: '/about',
      component: About,
      routes: [
        { path: '/about/bus',
          component: Bus
        },
        { path: '/about/cart',
          component: Cart
        }
      ]
    },
    { path: '/redux',
      component: ReduxPage
    },
    { path: '/redux-async',
      component: ReduxAsyncPage
    }
  ];
  
  export {
    routes,
    RouteWithSubRoutes
  };