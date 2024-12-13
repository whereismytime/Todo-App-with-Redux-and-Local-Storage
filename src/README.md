import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <Link to="/">Home</Link>
          {paths.length > 0 && ' > '}
        </li>
        {paths.map((path, index) => {
          const to = `/${paths.slice(0, index + 1).join('/')}`;
          return (
            <li key={to}>
              <Link to={to}>{path}</Link>
              {index < paths.length - 1 && ' > '}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;

