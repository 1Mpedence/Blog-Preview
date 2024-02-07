import '../../App.css';
import './Card.css'

function App() {
  return (
    <div className="card">
      <div className="card-img">
        <img src='assets/images/illustration-article.svg' alt="illustration-article" />
      </div>
      <div className="card-content">
        <div className="status fw-800">
          Learning
        </div>
        <div className="publish-date">
          Published 21 Dec 2023
        </div>
        <div className="title fw-900">
          HTML & CSS Foundations
        </div>
        <div className='content'>
          These languages are the backbone of every website, defining structure, content, and presentation. Greg Hooper
        </div>
      </div>
      <div className="footer">
        <div className='footer-img'>
          <img src='assets/images/image-avatar.webp' alt="avatar" />
        </div>
        <div className='footer-name fw-800'>Greg Hooper</div>
      </div>
    </div>
  );
}

export default App;
