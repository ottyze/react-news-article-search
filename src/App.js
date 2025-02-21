import React, { useState } from "react";
import "./App.css";
import { IoIosBookmark } from "react-icons/io";
import Search from "./Search";
import Preferences from "./Preferences";

import User from "./components/User";
import ArticleList from "./components/ArticleList";

/**
 * @typedef ArticleData
 * @prop {string} content
 * @prop {string} domain
 * @prop {string} lang
 * @prop {string} large_image_url
 * @prop {string} link
 * @prop {string} published_date
 * @prop {string} title
 * @prop {string} topic
 * @prop {number} fleschIndex
 * @prop {number} fleschGrade
 * @prop {string} gradeLevel
 * @prop {number} syllableCount
 * @prop {number} wordCount
 * @prop {number} sentenceCount
 */

function App() {
    const [searchLevel, setSearchLevel] = useState("");
    const [showPreferences, setShowPreferences] = useState(false);

    return (
        <div className="app">
            <User>
                <div id="search-container">
                    <div id="search-header">
                        <header className="App-header">
                            <div className="title-container">
                                <h1 className="pgTitle">
                                    <IoIosBookmark size={40} color="#2b90ee" />
                                    <em className="bold">Article</em>Search
                                </h1>
                                <h2 className="authors">by Isaya Danice</h2>
                            </div>
                            <Search
                                searchLevel={searchLevel}
                                setSearchLevel={setSearchLevel}
                            />
                        </header>
                        <Preferences
                            showPreferences={showPreferences}
                            onClick={() => setShowPreferences(!showPreferences)}
                            onClose={() => setShowPreferences(false)}
                        />
                    </div>
                    <div id="search-article-list">
                        <ul>
                            <ArticleList searchLevel={searchLevel} />
                        </ul>
                    </div>
                </div>
            </User>
        </div>
    );
}

export default App;
