import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'; // Use useHistory
import { supabase } from '../../components/supabaseclient'; // Adjust the path
import './ApplicantReview.css';

const ApplicantReview = () => {
  const { id } = useParams();
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

      // Fetch the application to get the user_id
      const { data: application, error: applicationError } = await supabase
        .from('applications')
        .select('user_id') // Fetch the user_id instead of the id
        .eq('id', id) // Use the id from the URL
        .single();

      if (applicationError) {
        throw applicationError;
      }

      // Insert the review into the Supabase table
      const { data, error } = await supabase
        .from('reviews')
        .insert([
          {
            reviewer_id: user.id,
            reviewer_type: 'organization', // Assuming the reviewer is an organization
            reviewed_id: application.user_id, // Use the user_id from the application
            reviewed_type: 'volunteer', // Assuming the reviewed entity is a volunteer
            rating: rating,
            comment: comment,
          },
        ]);

      if (error) {
        throw error;
      }

      // Redirect back to the applicant page after submission
      history.push(`/applicant/${id}`); // Use history.push instead of navigate
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

export default ApplicantReview;