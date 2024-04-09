import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Whole from "../Pages/Home/Whole";





const router = createBrowserRouter([
    {
        path : '/',
        element : <Root></Root>,
        children : [
            {
                path : '/',
                element: <Whole></Whole>
            }
        ]
    }
])

export default router;