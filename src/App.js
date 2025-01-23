import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
import ScrollTop from "./hoc/ScrollTop";
import Layout from "./component/Layout/Layout";
import NotFound from "./page/404/NotFound";


const Home = lazy(() => import("./page/Home/home"));
const SignIn = lazy(() => import("./page/Login/SignIn/SignIn"));
const SignUp = lazy(() => import("./page/Login/SignUp/SignUp"));
const OurTeam = lazy(() => import("./page/OurTeam/OurTeam"));
const About = lazy(() => import("./page/About/about"));
const TeamDetails = lazy(() => import("./page/TeamDetails/TeamDetails"));
const Contact = lazy(() => import("./page/contact/Contact"));
const TermsConditions = lazy(() => import("./page/TermsConditions/TermsConditions"));
const PrivacyPolicyPage = lazy(() => import("./page/PrivacyPolicyPage/PrivacyPolicyPage"));
const CoursesList = lazy(() => import("./page/CoursesList/CoursesList"));




const routes = [
    {path: "/", element: Home},
    {path: "/sign-in", element: SignIn},
    {path: "/sign-up", element: SignUp},
    {path: "/contact", element: Contact},
    {path: "our-team", element: OurTeam},
    {path: "about", element: About},
    {path: "team-details", element: TeamDetails},
    {path: "privacy-policy", element: PrivacyPolicyPage},
    {path: "terms-conditions", element: TermsConditions},
    {path: "courses-list", element: CoursesList},
];

const RoutesContainer = () => (
    <Router>
        <Layout>
            <Suspense fallback={<Spinner position="full"/>}>
                <Routes>
                    {routes.map((route, key) => {
                        const RouteComponent = ScrollTop(route.element);
                        return (
                            <Route key={key} path={route.path} element={<RouteComponent/>}/>
                        );
                    })}
                    <Route path="*" element={<Navigate to="/404" />} />
                    <Route path="/404" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Layout>
    </Router>
);

export default RoutesContainer;
