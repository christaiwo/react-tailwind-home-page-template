import {createBrowserRouter} from 'react-router-dom';
import Auth from './components/Auth';
import App from './App';
import Login from './views/Login';
import Register from './views/Register';


const router =  createBrowserRouter ([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/',
        element: <Auth />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default router;