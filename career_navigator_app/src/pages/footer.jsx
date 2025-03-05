import { useState } from "react";
import "./footer.css";
import personImage from "../assets/person.png";

const Footer = () => {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [feedbackType, setFeedbackType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Feedback Submitted!\nType: ${feedbackType}\nRating: ${rating}\nMessage: ${feedback}`
    );
    setFeedback("");
    setRating(0);
    setFeedbackType("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="feedback-section">
          <h2>We Value Your Feedback</h2>
          <p>Help us improve by sharing your thoughts and suggestions.</p>
          <form onSubmit={handleSubmit} className="feedback-form">
            <label>
              Type of Feedback:
              <select
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
              >
                <option value="">Select</option>
                <option value="Bug Report">Bug Report</option>
                <option value="Feature Request">Feature Request</option>
                <option value="General Feedback">General Feedback</option>
              </select>
            </label>

            <label>
              How would you rate your experience?:
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={star <= rating ? "star selected" : "star"}
                    onClick={() => setRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </label>

            <label>
              Please share your thoughts with us:
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Start typing here..."
              />
            </label>

            <button type="submit">Submit Feedback</button>
          </form>

          {/* Footer bottom now inside feedback section for proper alignment */}
          <div className="footer-bottom">
            <h2>SANKALP.AI</h2>
            <p>© 2025 Sankalp.AI. All rights reserved.</p>
          </div>
        </div>

        {/* Image remains on the right */}
        <div className="footer-image">
          <img src={personImage} alt="Person Illustration" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
