import RouteWithSubRoutes from './RouteWithSubRoutes';

import Home from '../containers/App/components/Home';
import About from '../containers/App/components/About';
import Bus from '../containers/App/components/Bus';
import Cart from '../containers/App/components/Cart';

import ReduxPage from '../containers/ReduxPage';
import ReduxSagaPage from '../containers/ReduxSagaPage';

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
    { path: '/redux-saga',
      component: ReduxSagaPage
    }
  ];
  
  export {
    routes,
    RouteWithSubRoutes
  };