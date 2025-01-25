import React, { useContext, useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import { UserContext } from "./User";
import {
    classifyArticleReadability,
    computeFleschIndex,
    computeGradeLevel,
    countSentences,
    countSyllables,
    countWords,
} from "../fleschUtils";

/**
 * @typedef {import('../App').ArticleData} ArticleData
 */

/**
 *
 * @param {{searchLevel: string}} props
 */
export default function ArticleList({ searchLevel, onSelectArticle }) {
    const { preferences, setPreferences } = useContext(UserContext);
    /**
     * @type {[ArticleData[], React.Dispatch<React.SetStateAction<ArticleData[]>>]}
     */
    const [articles, setArticles] = useState([]);

    const [filteredArticles, setFilteredArticles] = useState([])

    /**
     * Calculate the stats for each article
     * @param {ArticleData[]} articles
     */
    function calculateGrades(articles) {
        articles.forEach((a) => {
            a.syllableCount = countSyllables(a.content);
            a.wordCount = countWords(a.content);
            a.sentenceCount = countSentences(a.content);
            a.fleschIndex = computeFleschIndex(
                a.syllableCount,
                a.wordCount,
                a.sentenceCount
            );
            a.fleschGrade = computeGradeLevel(
                a.syllableCount,
                a.wordCount,
                a.sentenceCount
            );
            a.gradeLevel = classifyArticleReadability(a.fleschIndex);
        });

        setArticles(articles);
    }

    useEffect(() => {
        fetch("./news_articles.json").then((resp) => {
            resp.json().then(calculateGrades);
        });
    }, []);

    // Filter articles based on selected categories
    const filterArticles = () => {
        console.log(`level: ${searchLevel}`, preferences);
        const preferenceSelected = Object.values(preferences).some((v) => v);
        console.log(preferenceSelected)

        const filtered = articles
            .filter(
                (article) =>
                    !preferenceSelected ||
                    preferences[article.topic.toLowerCase()]
            )
            .filter(
                (article) =>
                    searchLevel === "" || article.gradeLevel === searchLevel
            );

        return filtered;
    };

    useEffect(() => {
        const filteredArticles = filterArticles()

        setFilteredArticles(filteredArticles)
    }, [preferences, searchLevel, articles])

    return (
        <>
            {filteredArticles.map((a, i) => (
                <li key={`article_${i}`} onClick={() => onSelectArticle(a)}>
                    <ArticleCard article={a} />
                </li>
            ))}
        </>
    );
}
