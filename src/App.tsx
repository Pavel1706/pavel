import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./Projects/Projects";
import {RemoteWork} from "./RemoteWork/RemoteWork";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <RemoteWork/>
            <Contacts />
            <Footer/>
        </div>
    );
}

export default App;
