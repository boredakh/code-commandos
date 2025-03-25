import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Use useHistory
import { supabase } from '../../components/supabaseclient'; // Adjust the path
import './ListingReview.css';

const ListingReview = () => {
  const { listingId } = useParams(); // Get the listingId from the URL
  const history = useHistory(); // Use useHistory
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Get the current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error('You must be logged in to leave a review.');
      }

      // Fetch the listing to get the created_by value (organisation ID)
      const { data: listing, error: listingError } = await supabase
        .from('listing_details')
        .select('created_by') // Fetch the created_by value
        .eq('id', listingId) // Use the listingId from the URL
        .single();

      if (listingError) {
        throw listingError;
      }

      // Insert the review into the Supabase table
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            reviewer_id: user.id,
            reviewer_type: 'volunteer', // Assuming the reviewer is a volunteer
            reviewed_id: listing.created_by, // Use the created_by value as reviewed_id
            reviewed_type: 'organisation', // Assuming the reviewed entity is an organisation
            rating: rating,
            comment: comment,
          },
        ]);

      if (error) {
        throw error;
      }

      // Redirect back to the listing page after submission
      history.push(`/listinginvol/${listingId}`); // Use history.push instead of navigate
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="review-form-container">
      <h2>Leave a Review</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(parseInt(e.target.value))}
            required
          >
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your review here..."
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit Review'}
        </button>
      </form>
    </div>
  );
};

export default ListingReview;