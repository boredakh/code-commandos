import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import NavBarIn from '../components/nav-bar-in';
import Listingvolin from '../components/listingvolin';
import Footer from '../components/footer';
import './listinginvol.css';
import { supabase } from '../components/supabaseclient';

const Listinginvol = (props) => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [organisationRating, setOrganisationRating] = useState(null);
  const [organisationReviews, setOrganisationReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Original listing fetch
        const { data, error } = await supabase
          .from('listing_details')
          .select('*')
          .eq('id', id)
          .single();

        if (error) throw error;
        setListing(data);

        // Modified to fetch reviews with comments
        const { data: reviewsData, error: reviewsError } = await supabase
          .from('reviews')
          .select('rating, comment, created_at')
          .eq('reviewed_id', data.created_by)
          .eq('reviewed_type', 'organisation')
          .order('created_at', { ascending: false });

        if (reviewsError) throw reviewsError;
        setOrganisationReviews(reviewsData);

        // Original rating calculation
        if (reviewsData.length > 0) {
          const totalRating = reviewsData.reduce((sum, review) => sum + review.rating, 0);
          const average = totalRating / reviewsData.length;
          setOrganisationRating(average.toFixed(1));
        } else {
          setOrganisationRating('No reviews yet');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!listing) return <div>Listing not found</div>;

  return (
    <div className="listinginvol-container">
      <Helmet>
        <title>Listinginvol - Which Second Hand Lion</title>
        <meta property="og:title" content="Listinginvol - Which Second Hand Lion" />
      </Helmet>
      
      <NavBarIn {...props.navProps} />
      
      <Listingvolin
        // All original props unchanged
        feature1Title={<span className="listinginvol-text26">{listing.job_title}</span>}
        text121={<span className="listinginvol-text27">{listing.commitment}</span>}
        text1={<span className="listinginvol-text28">{listing.organisation_name}</span>}
        text12={<span className="listinginvol-text29">{listing.industry}</span>}
        text11={<span className="listinginvol-text30">{listing.postcode}</span>}
        feature1Description={<span className="listinginvol-text31">{listing.listing_description}</span>}
        mainAction={<span className="listinginvol-text32">Apply</span>}
        listingId={listing.id}
        organisationRating={organisationRating}
        // Only addition:
        organisationReviews={organisationReviews}
        rootClassName="listingvolinroot-class-name"
      />
      
      <Footer {...props.footerProps} />
    </div>
  );
};

export default Listinginvol;