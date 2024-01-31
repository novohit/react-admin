import ManagerLayout from '@/layouts/ManagerLayout';
import Login from '@/pages/login/Login';
import Register from '@/pages/register/Register';
import UserList from '@/pages/system/user';
import DeptList from '@/pages/system/dept';
import MenuList from '@/pages/system/menu';
import Welcome from '@/pages/Welcome';
import { createBrowserRouter } from 'react-router-dom';

export const HOME_PATH = '/';
export const LOGIN_PATH = '/login';
export const REGISTER_PATH = '/register';
export const MANAGER_PATH = '/manager';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    /* 绝对路径 / 开头 相对路径不能用 / */
    path: '/manager',
    element: <ManagerLayout />,
    children: [
      { path: 'welcome', element: <Welcome /> },
      { path: 'users', element: <UserList /> },
      { path: 'dept', element: <DeptList /> },
      { path: 'menu', element: <MenuList /> },
    ],
  },
  {
    path: LOGIN_PATH,
    element: <Login />,
  },
  {
    path: REGISTER_PATH,
    element: <Register />,
  },
]);

export default router;
