import Home from "./pages/Home/Home";
import Register from './pages/Register/Register'
import Cart from './pages/Cart/Cart'
import Product from './pages/Productpage/Productpage'
import Women from './pages/Productpage/Women'
import Men from './pages/Productpage/Men'
import Kids from './pages/Productpage/Kids'
import Mainwomen from './pages/Productpage/Mainwomen'
import Mainmen from './pages/Productpage/Mainmen'
import Mainkids from './pages/Productpage/Mainkids'


let routes=[
    {path:'/' , element:<Home/>},
    {path:'/register', element:<Register />},
    {path:'/cart' , element:<Cart />},
    {
        path:'/product/*', element:<Product /> , children:[
            {path:'women', element: <Women />},
            {path:'men', element: <Men />},
            {path:'kids', element: <Kids />}
        ]
    
    },
    {path:'/product/women/:womenid' , element:<Mainwomen />},
    {path:'/product/men/:menid' , element:<Mainmen />},
    {path:'/product/kids/:kidsid', element:<Mainkids />}
]





export default routes