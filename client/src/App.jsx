import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Projects from './pages/Projects';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PrivateRoute from './Components/PrivateRoute';
import OnlyyAdminPrivateRoute from './Components/OnlyAdminPrivateRoute.jsx';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatedPost.jsx';
import PostPage from './pages/PostPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route element= {<PrivateRoute/>}>
        <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route element= {<OnlyyAdminPrivateRoute/>}>
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/update-post/:postId' element={<UpdatePost/>} />
        </Route>
        
        <Route path='/about' element={<About/>} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/sign-in' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/post/:postSlug' element={<PostPage/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}
