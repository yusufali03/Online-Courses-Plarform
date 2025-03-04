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
const CourseGrid = lazy(() => import("./page/CoursesList/component/CourseGrid/CourseGrid"));
const ListCourse = lazy(() => import("./page/CoursesList/component/ListCourse/ListCourse"));
const CourseDetails = lazy(() => import("./page/CourseDetails/CourseDetails"));
const BlogStandart = lazy(() => import("./page/BlogStandart/BlogStandart"));
const BlogDetails = lazy(() => import("./page/BlogDetails/BlogDetails"));

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
    {path: "blog-standart", element: BlogStandart},
    {path: "blog-details", element: BlogDetails},
    {path: "blog-with-sidebar", element: BlogStandart},
    {path: "blog-without-sidebar", element: BlogStandart},
    {path: "courses-list/grid", element: CourseGrid},
    {path: "courses-list/item", element: ListCourse},
    {path: "courses-details", element: CourseDetails},
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
