// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import Layout from './components/Layout/Layout';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import UserProfile from './pages/UserProfile';

import { setAuthenticate } from './store/authAction';

function App() {
  const [isInitial, setIsInitial] = useState(false);
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setAuthenticate());
    setIsInitial(true);
  }, [dispatch]);

  return (
    <Layout>
      {isInitial ? 'true' : 'false'}
      {isAuthenticated ? 'true' : 'false'}
      <Switch>
        {!isAuthenticated && (
          <Route path="/login" exact>
            <Login />
          </Route>
        )}
        {isInitial && isAuthenticated && (
          <Route path="/courses" exact>
            <Courses />
          </Route>
        )}
        {isInitial && isAuthenticated && (
          <Route path="/courses/:courseId">
            <CourseDetail />
          </Route>
        )}
        {isInitial && isAuthenticated && (
          <Route path="/profile" exact>
            <UserProfile />
          </Route>
        )}
        <Route path="*">
          {isInitial && !isAuthenticated && <Redirect to="/login" />}
          {isInitial && isAuthenticated && <Redirect to="/courses" />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
