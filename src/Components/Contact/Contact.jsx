import React, { useState } from 'react';
import './Contact.css';
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaWhatsapp
  ,FaGithub
} from 'react-icons/fa';

export const Contact = () => {
  const [comments, setComments] = useState([
    { name: 'John Doe', comment: 'Great portfolio!', responses: [] },
  ]);
  const [newComment, setNewComment] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  const handleAddComment = () => {
    if (newComment && newCommentName) {
      setComments([
        ...comments,
        { name: newCommentName, comment: newComment, responses: [] },
      ]);
      setNewComment('');
      setNewCommentName('');
    }
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope />
          <p>Email: pavankumarkolli21@gmail.com</p>
        </div>
        <div className="contact-item">
          <FaPhone />
          <p>Call: +919505048122</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt />
          <p>Location: 4-38 chinna patiya vari vedi doddanapudi kalla madalam Andhrapradesh</p>
        </div>
      </div>
      <div className="social-media">
          <a href="https://www.facebook.com/pavankumar.kolli.14/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/pavan-kumar-kolli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/PavanKumarKolli" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://wa.me/+919505048122" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      <div className="comments-section">
        <h3>Comments</h3>
        <div className="comments-list">
          {comments.map((comment, index) => (
            <div key={index} className="comment-item">
              <p><strong>{comment.name}:</strong> {comment.comment}</p>
              {comment.responses.length > 0 && (
                <div className="responses">
                  {comment.responses.map((response, idx) => (
                    <p key={idx}><strong>Response:</strong> {response}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="add-comment">
          <input
            type="text"
            placeholder="Your Name"
            value={newCommentName}
            onChange={(e) => setNewCommentName(e.target.value)}
          />
          <textarea
            placeholder="Your Comment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button onClick={handleAddComment}>Add Comment</button>
        </div>
      </div>
      <footer>
        <p>&copy; Mr Kolli. All rights reserved.</p>
      </footer>
    </section>
  );
};
