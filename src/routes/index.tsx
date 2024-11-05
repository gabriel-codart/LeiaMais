import 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Book from '../pages/book';

function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/livro/:id" element={<Book/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    )
}

export default UserRoutes;