import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Form from './components/Form';
import showUser from './components/showUser';
import Homepage from './components/pages/Homepage';
function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <button
          className='navbar-toggler collapsed'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/prowork-task'>
                Prowork
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/addUsers'>
                Add User
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/showUsers'>
                Show User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className='container-fluid'>
        <Route path='/prowork-task' exact component={Homepage} />
        <Route path='/addUsers' component={Form} />
        <Route path='/showUsers' component={showUser} />
      </main>
    </Router>
  );
}

export default App;
