
import './App.css';
import { VscChevronDown, VscSearch } from "react-icons/vsc";
import React, { useState, useEffect } from "react";
import { countSentences, countWords, countSyllables, computeFleschIndex, classifyArticleReadability } from "./fleschUtils";
/**
 * @typedef {import('./App.js').ArticleData} ArticleData
 */

/**
 * Search Component for filtering articles by readability level
 * @param {{ articles: ArticleData[], setFilteredArticles: React.Dispatch<React.SetStateAction<ArticleData[]>> }} props
 */
function Search({ searchLevel: selectedLevel, setSearchLevel: setSelectedLevel }) {
    const handleLevelChange = (event) => {
        setSelectedLevel(event.target.value);
    };

    return (
        <div className='search-container'>
            {/* search icon */}
            <div className='search-icon'>
                <VscSearch size={30} color="#ffffff" />
            </div>
            {/* actual dropdown */}
            <select className='search-bar' id="show" name="showtypes" value={selectedLevel} onChange={handleLevelChange}>
                <option value="">All Levels</option>  {/* Option to show all articles */}
                <option value="5th grade">5th Grade</option>
                <option value="6th grade">6th Grade</option>
                <option value="7th grade">7th Grade</option>
                <option value="8th & 9th grade">8th-9th Grade</option>
                <option value="10th to 12th grade">10th-12th Grade</option>
                <option value="College">College</option>
                <option value="College graduate">College Graduate</option>
            </select>
            {/* dropdown icon */}
            <div className='dropdown-icon'>
                <VscChevronDown size={30} color="#ffffff" />
            </div>
        </div>
    );
}

export default Search;