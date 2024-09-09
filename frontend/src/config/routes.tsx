import App from "../App"
import Appp from "../Appp"
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import Protectedpage from "../pages/Protectedpage"
import RegisterPage from "../pages/RegisterPage"

const routes = [
    {
        path: '/',
        Component: App,
        children: [
            { path: '/', index: true, element: <AboutPage/>},
            { path: '/home', element: <HomePage/> },
            { path: '/login', element: <LoginPage/> },
            { path: '/register/:type', element: <RegisterPage/> },
            { path: '/',  element: <Appp/>, 
                children: [
                    { path: '/protected', element: <Protectedpage/> },
                ] 
            },
        ]
    },
]

export default routes