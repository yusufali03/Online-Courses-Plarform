import React, { lazy, Suspense, useContext } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Spinner from "./component/Spinner/Spinner";
// import ScrollTop from "./hoc/ScrollTop";
import Layout from "./component/Layout/Layout";
import NotFound from "./page/404/NotFound";

import AuthContext, { AuthProvider }   from "../src/contexts/AuthContext";
import Settings from "./component/Settings/Settings";
import MyLearning from "./component/MyLearning/MyLearning";

// Lazy-loaded pages
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

// Helper component to protect routes
const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/sign-in" replace />;
};

const RoutesContainer = () => (
  <AuthProvider>
    <Router>
      <Layout>
        <Suspense fallback={<Spinner position="full" />}>      
          <Routes>
            {/* Public */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            {/* Protected */}
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            {/* Other public pages */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/about" element={<About />} />
            <Route path="/team-details" element={<TeamDetails />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/blog-standart" element={<BlogStandart />} />
            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/blog-with-sidebar" element={<BlogStandart />} />
            <Route path="/blog-without-sidebar" element={<BlogStandart />} />
            <Route path="/courses-list/grid" element={<CourseGrid />} />
            <Route path="/courses-list/item" element={<ListCourse />} />
            <Route path="/courses-details" element={<CourseDetails />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/my-learning" element={<MyLearning />} />


            {/* Root & catch-all */}
            <Route
              path="/"
              element={
                <Navigate
                  to={
                    localStorage.getItem('access')
                      ? "/dashboard"
                      : "/sign-in"
                  }
                  replace
                />
              }
            />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  </AuthProvider>
);

export default RoutesContainer;
