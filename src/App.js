import React, { createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormElements from './component/FormElemtns';
import IncrementDecrement from './component/IncrementDecrement';
import News from './component/News';
import TodoList from './component/TodoList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Accordion from './component/accordion/Accordion';
import HBKUKeep from './component/hbkuKeep/HBKUKeep';
import ContAPI from './component/contextAPI/ContextAPI';
import UseeffectCom from './component/UseeffectCom';
import Covid19Data from './component/covid19/Covid19Data';
import AxiosAPI from './component/Axios';
import Layout from './component/Layout';
import UserParams from './component/UserParams';
import Search from './component/search/Search';
import Error from './component/Error';

export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<FormElements/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/todolist" element={<TodoList/>} />
        <Route path="/incdec" element={<IncrementDecrement/>} />
        <Route path="/accordion" element={<Accordion/>} />
        <Route path="/hbkukeep" element={<HBKUKeep/>} />
        <Route path="/useeffcom" element={<UseeffectCom/>} />
        <Route path="/covid19" element={<Covid19Data/>} />
        <Route path="/axiosapi" element={<AxiosAPI/>} />
        <Route path="/user/:fname/:lname" element={<UserParams/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Layout>
    </>
   
  );
}

export default App;
