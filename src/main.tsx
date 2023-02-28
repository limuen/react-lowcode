import ReactDOM from 'react-dom/client';

// 路由
import Router from './router';

// 状态管理
import { Provider } from 'react-redux';
import { store } from './store';

import 'antd/dist/reset.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Router />
  </Provider>
);
