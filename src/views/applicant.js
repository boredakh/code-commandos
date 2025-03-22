import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the applicationId from the URL
import { Helmet } from 'react-helmet';
import { supabase } from '../components/supabaseclient'; // Import your Supabase client
import NavBarOut from '../components/nav-bar-out';
import Applicantcard from '../components/applicantcard';
import Footer from '../components/footer';
import './applicant.css';

const Applicant = (props) => {
  const { applicationId } = useParams(); // Get the applicationId from the URL
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the application details when the component mounts
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const { data, error } = await supabase
          .from('applications')
          .select(`
            *,
            first_name,
            last_name,
            experience,
            age_group,
            city_county,
            gender,
            telephone,
            volunteer_interest,
            previous_volunteer,
            previous_work_details,
            skills_experience,
            availability_days,
            availability_duration,
            languages,
            referee_name,
            referee_email,
            referee_relationship,
            applied_at,
            user_message,
            user_email
          `)
          .eq('id', applicationId)
          .single(); // Fetch a single application

        if (error) {
          setError(error.message);
        } else {
          setApplication(data);
        }
      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplication();
  }, [applicationId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!application) {
    return <div>Application not found.</div>;
  }

  return (
    <div className="applicant-container">
      <Helmet>
        <title>Applicant - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="Applicant - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarOut
        link1={
          <Fragment>
            <span className="applicant-text10">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="applicant-text11">Blogs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="applicant-text12">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="applicant-text13">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="applicant-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="applicant-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="applicant-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="applicant-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="applicant-text18">Find Opportunities</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="applicant-text19">Log in</span>
          </Fragment>
        }
        action11={
          <Fragment>
            <span className="applicant-text20">Find Volunteers</span>
          </Fragment>
        }
        rootClassName="nav-bar-outroot-class-name10"
        page1Description={
          <Fragment>
            <span className="applicant-text21">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="applicant-text22">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="applicant-text23">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="applicant-text24">Page Four Description</span>
          </Fragment>
        }
      />
      <Applicantcard
        feature1Title={
          <Fragment>
            <span className="applicant-text25">
              {application.first_name} {application.last_name}
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="applicant-text26">{application.experience}</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="applicant-text27">{application.user_message}</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="applicant-text28">{application.applied_at}</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="applicant-text29">{application.city_county || 'N/A'}</span>
          </Fragment>
        }
        text13={
          <Fragment>
            <span className="applicant-text30">{application.age_group}</span>
          </Fragment>
        }
        feature1Description1={
          <Fragment>
            <span className="applicant-text31">{application.user_email}</span>
          </Fragment>
        }
        // Additional fields
        text14={
          <Fragment>
            <span className="applicant-text32">{application.gender || 'N/A'}</span>
          </Fragment>
        }
        text15={
          <Fragment>
            <span className="applicant-text33">{application.telephone || 'N/A'}</span>
          </Fragment>
        }
        text16={
          <Fragment>
            <span className="applicant-text34">{application.volunteer_interest || 'N/A'}</span>
          </Fragment>
        }
        text17={
          <Fragment>
            <span className="applicant-text35">
              {application.previous_volunteer ? 'Yes' : 'No'}
            </span>
          </Fragment>
        }
        text18={
          <Fragment>
            <span className="applicant-text36">{application.previous_work_details || 'N/A'}</span>
          </Fragment>
        }
        text19={
          <Fragment>
            <span className="applicant-text37">{application.skills_experience || 'N/A'}</span>
          </Fragment>
        }
        text20={
          <Fragment>
            <span className="applicant-text38">{application.availability_days || 'N/A'}</span>
          </Fragment>
        }
        text21={
          <Fragment>
            <span className="applicant-text39">{application.availability_duration || 'N/A'}</span>
          </Fragment>
        }
        text22={
          <Fragment>
            <span className="applicant-text40">{application.languages || 'N/A'}</span>
          </Fragment>
        }
        text23={
          <Fragment>
            <span className="applicant-text41">{application.referee_name || 'N/A'}</span>
          </Fragment>
        }
        text24={
          <Fragment>
            <span className="applicant-text42">{application.referee_email || 'N/A'}</span>
          </Fragment>
        }
        text25={
          <Fragment>
            <span className="applicant-text43">{application.referee_relationship || 'N/A'}</span>
          </Fragment>
        }
        mainAction1={
          <Fragment>
            <span className="applicant-text44">Return</span>
          </Fragment>
        }
        rootClassName="applicantcardroot-class-name1"
      />
      <Footer
        link1={
          <Fragment>
            <span className="applicant-text33">About us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="applicant-text34">Help</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="applicant-text35">Contact us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="applicant-text36">Blogs</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="applicant-text37">Terms &amp; Privacy</span>
          </Fragment>
        }
        link7={
          <Fragment>
            <span className="applicant-text38">Find Opportunities</span>
          </Fragment>
        }
        link8={
          <Fragment>
            <span className="applicant-text39">Find Volunteers</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="applicant-text40">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="applicant-text41">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="applicant-text42">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footerroot-class-name24"
      />
    </div>
  );
};

export default Applicant;