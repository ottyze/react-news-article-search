import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { IoIosBookmark } from "react-icons/io";
import Search from "./Search";
import Preferences from "./Preferences";
import ArticleCard from "./components/ArticleCard";
import FullArticle from "./components/FullArticle";
import User, { UserContext } from "./components/User";

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
const SENTENCE_REGEX = /^\w+[.:;?!]/i;
const SYLLABLE_REGEX = /((?!ed|es|e$)[aeiou]{1,2})+/i;

function App() {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchLevel, setSearchLevel] = useState("");
    const [showPreferences, setShowPreferences] = useState(false);
    



    const onCloseArticle = () => {
        setSelectedArticle(null);
    };
    
    return (
        <div className="app">
            <User>
                {!selectedArticle && (
                    <div id="search-container">
                        <div id="search-header">
                            <header className="App-header">
                                <div className="title-container">
                                    <h1 className="pgTitle">
                                        <IoIosBookmark
                                            size={40}
                                            color="#2b90ee"
                                        />
                                        <em className="bold">Article</em>Search
                                    </h1>
                                    <h2 className="authors">by Group 10</h2>
                                </div>
                                    <Search
                                        searchLevel={searchLevel}
                                        setSearchLevel={setSearchLevel}
                                    />
                            </header>
                            <Preferences
                                showPreferences={showPreferences}
                                onClick={() =>
                                    setShowPreferences(!showPreferences)
                                }
                                onClose={() => setShowPreferences(false)}
                            />
                        </div>
                        <div id="search-article-list">
                            <ul>
                                <ArticleList searchLevel={searchLevel} onSelectArticle={setSelectedArticle}/>
                            </ul>
                        </div>
                    </div>
                )}
                {selectedArticle && (
                    <FullArticle
                        article={selectedArticle}
                        onClose={onCloseArticle}
                    />
                )}
            </User>
        </div>
    );
}

export default App;
