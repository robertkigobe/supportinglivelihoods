import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from '../routes/About/About';
import WebDesign from '../routes/Leadership/WebDesign';
import SEO from '../routes/Getinvolved/SEO';
import Services from '../routes/Sacraments/Services';
import Layout from './Layout';
import Frontend from '../routes/Sacraments/Frontend';
import PHP from '../routes/Sacraments/PHP';
import Node from '../routes/Getinvolved/Node';
import OurValues from '../routes/Leadership/OurValues';
import WebDev from '../routes/Sacraments/WebDev';
import ChoirNav from '../routes/About/ChoirNav';
import GroupList from "./GroupList";
import GroupEdit from "./GroupEdit";
import Home from "./homepage/Home";
import ProfessionalHoursBank from "./committees/ProfessionalHoursBank";
import ProfessionalHoursBankEdit from "./committees/ProfessionalHoursBankEdit";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="about" element={<About/>}/>
                    <Route path="services" element={<Services/>}/>
                    <Route path="web-design" element={<WebDesign/>}/>
                    <Route path="web-dev" element={<WebDev/>}/>
                    <Route path="frontend" element={<Frontend/>}/>
                    <Route path="node" element={<Node/>}/>
                    <Route path="seo" element={<SEO/>}/>
                    <Route path="php" element={<PHP/>}/>
                    <Route path="/profesisonalhoursbank" element={<ProfessionalHoursBank/>}/>
                    <Route path="profesisonalhoursbank/:id" element={<ProfessionalHoursBankEdit/>}/>
                    <Route path='/groups/:id' exact={true} element={<GroupEdit/>}/>
                    <Route path="who-we-are" element={<ChoirNav/>}/>
                    <Route path="our-values" element={<OurValues/>}/>
                    <Route path="*" element={<p>Not found!</p>}/>
                    <Route path='/groups' exact={true} element={<GroupList/>}/>
                    <Route path='/groups/:id' exact={true} element={<GroupEdit/>}/>
                </Route>
            </Routes>
        </Router>

    );
};

export default App;
