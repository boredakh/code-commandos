import React, { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { supabase } from '../components/supabaseclient';
import NavBarOut from '../components/nav-bar-org-in';
import Applicantcard from '../components/applicantcard';
import Footer from '../components/footer';
import './applicant.css';

const Applicant = (props) => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState(null);
  const [reviews, setReviews] = useState([]); // CHANGED TO ARRAY
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApplicationAndRating = async () => {
      try {
        // Fetch application - COMPLETELY UNCHANGED
        const { data: applicationData, error: applicationError } = await supabase
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
          .single();

        if (applicationError) throw applicationError;
        setApplication(applicationData);

        // MODIFIED TO FETCH REVIEWS WITH COMMENTS
        const { data: reviewsData, error: reviewsError } = await supabase
          .from('reviews')
          .select('rating, comment, created_at') // ADDED COMMENT FIELD
          .eq('reviewed_id', applicationData.user_id)
          .eq('reviewed_type', 'volunteer')
          .order('created_at', { ascending: false }); // NEWEST FIRST

        if (reviewsError) throw reviewsError;
        setReviews(reviewsData);

      } catch (err) {
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchApplicationAndRating();
  }, [applicationId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!application) return <div>Application not found.</div>;

  // Calculate average rating from reviews
  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 'No reviews yet';

  return (
    <div className="applicant-container">
      <Helmet>
        <title>Applicant - Which Second Hand Lion</title>
        <meta property="og:title" content="Applicant - Which Second Hand Lion" />
      </Helmet>
      
      {/* NAVBAR - COMPLETELY UNCHANGED */}
      <NavBarOut {...props.navProps} />

      {/* APPLICANT CARD - ONLY ADDED reviews PROP */}
      <Applicantcard
        applicationId={application.id}
        first_name={application.first_name}
        last_name={application.last_name}
        averageRating={averageRating}
        reviews={reviews} // NEW PROP ADDED
        // ALL OTHER PROPS REMAIN EXACTLY THE SAME
        feature1Title={<span className="applicant-text25">{application.first_name} {application.last_name}</span>}
        text1={<span className="applicant-text26">{application.experience}</span>}
        feature1Description={<span className="applicant-text27">{application.user_message}</span>}
        text11={<span className="applicant-text28">{application.applied_at}</span>}
        text12={<span className="applicant-text29">{application.city_county || 'N/A'}</span>}
        text13={<span className="applicant-text30">{application.age_group}</span>}
        feature1Description1={<span className="applicant-text31">{application.user_email}</span>}
        text14={<span className="applicant-text32">{application.gender || 'N/A'}</span>}
        text15={<span className="applicant-text33">{application.telephone || 'N/A'}</span>}
        text16={<span className="applicant-text34">{application.volunteer_interest || 'N/A'}</span>}
        text17={<span className="applicant-text35">{application.previous_volunteer ? 'Yes' : 'No'}</span>}
        text18={<span className="applicant-text36">{application.previous_work_details || 'N/A'}</span>}
        text19={<span className="applicant-text37">{application.skills_experience || 'N/A'}</span>}
        text20={<span className="applicant-text38">{application.availability_days || 'N/A'}</span>}
        text21={<span className="applicant-text39">{application.availability_duration || 'N/A'}</span>}
        text22={<span className="applicant-text40">{application.languages || 'N/A'}</span>}
        text23={<span className="applicant-text41">{application.referee_name || 'N/A'}</span>}
        text24={<span className="applicant-text42">{application.referee_email || 'N/A'}</span>}
        text25={<span className="applicant-text43">{application.referee_relationship || 'N/A'}</span>}
        mainAction1={<span className="applicant-text44">Return</span>}
        rootClassName="applicantcardroot-class-name1"
      />

      {/* FOOTER - COMPLETELY UNCHANGED */}
      <Footer {...props.footerProps} />
    </div>
  );
};

export default Applicant;