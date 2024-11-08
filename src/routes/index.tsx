import 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Book from '../pages/book';
import About from '../pages/about';

function UserRoutes() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/livro/:id" element={<Book/>}/>
            <Route path="/sobre" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default UserRoutes;