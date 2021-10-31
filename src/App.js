// import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/courses" exact>
          <Courses />
        </Route>
        <Route path="/courses/:courseId">
          <CourseDetail />
        </Route>
        <Route path="/profile" exact>
          <UserProfile />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
