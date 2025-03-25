import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './style.css';
import BlogsOut from './views/blogs-out';
import Applicant from './views/applicant';
import FindVolunteersIn from './views/find-volunteers-in';
import OpportunitiesOut from './views/opportunities-out';
import OpportunitiesIn from './views/opportunities-in';
import OrgSignUp from './views/org-sign-up';
import DashboardVolunteerIn from './views/dashboard-volunteer-in';
import AboutUsOut from './views/about-us-out';
import AboutUsInOrg from './views/about-us-in-org';
import Home from './views/home';
import CreateAccount from './views/create-account';
import AboutUsIn from './views/about-us-in';
import BlogsIn from './views/blogs-in';
import TermsandPoliciesIn from './views/termsand-policies-in';
import VolunteerSignUp from './views/volunteer-sign-up';
import VerifyEmail from './views/verify-email';
import FindVolunteersOut from './views/find-volunteers-out';
import BlogsInOrg from './views/blogs-in-org';
import OpportunitiesInorg from './views/opportunities-inorg';
import Role from './views/role';
import Homeinorg from './views/homeinorg';
import CreateListing from './views/create-listing';
import Homein from './views/homein';
import SignIn from './views/sign-in';
import FindVolunteersInOrg from './views/find-volunteers-in-org';
import Listinginvol from './views/listinginvol';
import Listingout from './views/listingout';
import ListinginOrg from './views/listingin-org';
import NotFound from './views/not-found';
import Editlisting from './views/editlisting';
import SignIn1 from './views/sign-in1';
import Orgorvol from './views/orgorvol';
import Results from './views/results';
import ApplicantReview from './views/ApplicantReview/ApplicantReview'; // Corrected import path
import ListingReview from './views/ListingReview/ListingReview'; // Import the new ListingReview component

// Corrected import paths
import { AuthProvider } from './AuthContext'; // Path to AuthContext
import ProtectedRoute from './components/ProtectedRoute'; // Path to ProtectedRoute

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={BlogsOut} exact path="/blogs-out" />
          <Route component={FindVolunteersIn} exact path="/find-volunteers-in" />
          <Route component={OpportunitiesOut} exact path="/opportunities-out" />
          <Route component={OpportunitiesIn} exact path="/opportunities-in" />
          <Route component={OrgSignUp} exact path="/org-sign-up" />
          <Route component={Results} exact path="/results" />
          <Route
            component={DashboardVolunteerIn}
            exact
            path="/dashboard-volunteer-in"
          />
          <Route component={Applicant} exact path="/applicant/:applicationId" />
          <Route component={AboutUsOut} exact path="/about-us-out" />
          <Route component={AboutUsInOrg} exact path="/about-us-in-org" />
          <Route component={CreateAccount} exact path="/create-account" />
          <Route component={AboutUsIn} exact path="/about-us-in" />
          <Route component={BlogsIn} exact path="/blogs-in" />
          <Route
            component={TermsandPoliciesIn}
            exact
            path="/termsand-policies-in"
          />
          <Route component={VolunteerSignUp} exact path="/volunteer-sign-up" />
          <Route component={VerifyEmail} exact path="/verify-email" />
          <Route
            component={FindVolunteersOut}
            exact
            path="/find-volunteers-out"
          />
          <Route component={BlogsInOrg} exact path="/blogs-in-org" />
          <Route
            component={OpportunitiesInorg}
            exact
            path="/opportunities-inorg"
          />
          <Route component={Role} exact path="/role" />
          <Route component={Homeinorg} exact path="/homeinorg" />
          <Route component={CreateListing} exact path="/create-listing" />
          <Route component={Homein} exact path="/homein" />
          <Route component={SignIn} exact path="/sign-in" />
          <Route
            component={FindVolunteersInOrg}
            exact
            path="/find-volunteers-in-org"
          />
          <Route component={Editlisting} exact path="/editlisting/:listingId" />
          <Route component={Listinginvol} exact path="/listinginvol/:id" />
          <Route component={Listingout} exact path="/listingout" />
          <Route component={ListinginOrg} exact path="/listingin-org" />
          <Route component={SignIn1} exact path="/sign-in1" />
          <Route component={Orgorvol} exact path="/orgorvol" />
          <Route component={ApplicantReview} exact path="/applicant/:id/review" /> {/* Route for applicant reviews */}
          <Route component={ListingReview} exact path="/listing/:listingId/review" /> {/* New route for listing reviews */}
          <Route component={NotFound} path="*" /> {/* Catch all unmatched routes */}
          <Redirect to="*" /> {/* Redirect to NotFound for unmatched routes */}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));