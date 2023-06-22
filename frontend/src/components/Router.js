import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import Main_Page from "./Main_Page"
import Student_intro from "./student/Student_intro"
import Student_questioning from "./student/Student_questioning.js"
import Student_result from "./student/Student_result"
import Certain_vacancy from "./student/Certain_vacancy"
import Show_companies from "./employee/Companies"
import Company_create from "./employee/Company_create"
import Company_edit from "./employee/Company_edit"
import Company_layout from "./employee/Company_layout"
import Show_vacancies from "./employee/Vacancies"
import Vacancy_create from "./employee/Vacancy_create"
import Vacancy_edit from "./employee/Vacancy_edit"
import About_project from "./About_project"
import Contacts from "./Contacts"

export default function Router(){

    const Layout = () => {
        return(
            <>
            <Header/>
            <div className="main-class"><Outlet/></div>
            <Footer/>
            </>
        )
    }

    const Comp_Layout = () => {
        return(
            <>
            <Company_layout/>
            <div><Outlet/></div>
            </>
        )
    }

    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<Main_Page/>}/>
                    <Route path="student">
                        <Route index element={<Student_intro/>}/>
                        <Route path="questioning" element={<Student_questioning/>}/>
                        <Route path="result" element={<Student_result/>}/>
                        <Route path="vacancy/:vid" element={<Certain_vacancy/>}/>
                    </Route>
                    <Route path="companies">
                        <Route index element={<Show_companies/>}/>
                        <Route path="create" element={<Company_create/>}/>
                        <Route path="edit/:cid" element={<Company_edit/>}/>
                        <Route path=":cid" element={<Comp_Layout/>}>
                            <Route index element={<Show_vacancies/>}/>
                            <Route path="create" element={<Vacancy_create/>}/>
                            <Route path="edit/:vid" element={<Vacancy_edit/>}/>
                            {/* <Route path="preview/:vid" element={<Certain_vacancy/>}/> */}
                        </Route>
                        <Route path=":cid/preview/:vid" element={<Certain_vacancy/>}/>
                    </Route>
                        <Route path="about" element={<About_project/>}/>
                        <Route path="contacts" element={<Contacts/>}/>
                </Route>
                <Route path="*" element={<h2>Ресурс не знайдено</h2>}/>
            </Routes>
            </BrowserRouter>
        )
        
    }

    return (
        <>
        <BrowserRoutes/>
        </>
    )
}