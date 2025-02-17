 import {createBrowserRouter, createRoutesFromElements ,Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import Course from "../Pages/Course"
import Cv from "../Pages/Cv"


 export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/cv" element={<Cv />} />
        </Route>
    )
 )