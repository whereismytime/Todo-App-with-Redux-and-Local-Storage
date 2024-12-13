import { Link } from 'react-router-dom';

function Breadcrumbs() {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          padding: 0,
          justifyContent: 'flex-start',
          gap: '15px',
        }}
      >
        <li className="no-bg-border">
          <Link to="/" style={navLinkStyle}>
            Home
          </Link>
        </li>
        <li className="no-bg-border">
          <Link to="/tasks" style={navLinkStyle}>
            Tasks
          </Link>
        </li>
        <li className="no-bg-border">
          <Link to="/faq" style={navLinkStyle}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}

const navLinkStyle = {
  textDecoration: 'none',
  color: '#5865f2',
  fontWeight: 'bold',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  backgroundColor: '#e4e4e4',
  transition: 'background-color 0.3s ease',
};

export default Breadcrumbs;
