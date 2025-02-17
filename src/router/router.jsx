 import {createBrowserRouter, createRoutesFromElements ,Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import Home from "../Pages/Home"
import Course from "../Pages/Course"
import Cv from "../Pages/Cv"
import Latest from "../Pages/Latest"
import Path from "../Pages/Path"
import Adr from "../Pages/Adr"
import Jodi from "../Pages/Jodi"
import Legal from "../Pages/Legal"
import Drafting from "../Pages/Drafting"
import Jobs from "../Pages/Jobs"


 export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/latest" element={<Latest />} />
            <Route path="/path" element={<Path />} />
            <Route path="/adr" element={<Adr />} />
            <Route path="/judi" element={<Jodi />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/drafting" element={<Drafting />} />
            <Route path="/jobs" element={<Jobs />} />
        </Route>
    )
 )