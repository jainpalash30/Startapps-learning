import '../styles/Error.css';

function Error({ message }) {
  
  return (
    <div className="error-container">
      <p className="error-text">{message}</p>
    </div>
  );
}

export default Error;