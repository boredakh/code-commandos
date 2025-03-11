import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom'; // Import useParams to access the id parameter
import NavBarIn from '../components/nav-bar-in';
import Listingvolin from '../components/listingvolin';
import Footer from '../components/footer';
import './listinginvol.css';
import { supabase } from '../components/supabaseclient'; // Adjusted import path

const Listinginvol = (props) => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const { data, error } = await supabase
          .from('listing_details')
          .select('*')
          .eq('id', id)
          .single(); // Fetch a single row based on the id

        if (error) {
          throw error;
        }

        setListing(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchListing();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!listing) {
    return <div>Listing not found</div>;
  }

  return (
    <div className="listinginvol-container">
      <Helmet>
        <title>Listinginvol - Which Second Hand Lion</title>
        <meta
          property="og:title"
          content="Listinginvol - Which Second Hand Lion"
        />
      </Helmet>
      <NavBarIn
        // ... (your existing NavBarIn props)
      />
      <Listingvolin
        feature1Title={
          <Fragment>
            <span className="listinginvol-text26">{listing.job_title}</span>
          </Fragment>
        }
        text121={
          <Fragment>
            <span className="listinginvol-text27">{listing.commitment}</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="listinginvol-text28">{listing.organisation_name}</span>
          </Fragment>
        }
        text12={
          <Fragment>
            <span className="listinginvol-text29">{listing.industry}</span>
          </Fragment>
        }
        text11={
          <Fragment>
            <span className="listinginvol-text30">{listing.postcode}</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="listinginvol-text31">{listing.listing_description}</span>
          </Fragment>
        }
        mainAction={
          <Fragment>
            <span className="listinginvol-text32">Apply</span>
          </Fragment>
        }
        listingId={listing.id} // Pass the listingId prop
        rootClassName="listingvolinroot-class-name"
      />
      <Footer
        // ... (your existing Footer props)
      />
    </div>
  );
};

export default Listinginvol;