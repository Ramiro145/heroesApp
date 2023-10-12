import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage, HeroPage,SearchPage } from "..";


export const childHeroesRoutes = [
    {
        path: "/marvel",
        element: <MarvelPage />,
    },
    {
        path: "/dc",
        element: <DcPage />,
    },
    {
        path:'/search',
        element:<SearchPage/>
    },
    {
        path:'/hero/:id',
        element:<HeroPage/>
    },
    {
        path:'/*',
        element: <Navigate to={'/marvel'}/>
    }

];