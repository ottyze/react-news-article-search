import React from "react";
import { IoIosBookmark } from "react-icons/io";

// import styles from "./ArticleView.css";

const TimeFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
});
function getGradeLevel(grade) {
    const rounded_grade = Math.round(grade)
    if (rounded_grade > 16) {
        return "College Graduate";
    }
    if (rounded_grade > 12) {
        return "College";
    }
    if (rounded_grade > 3) {
        return `${rounded_grade}th Grade`;
    }
    if (rounded_grade === 3) {
        return "3rd Grade";
    }
    if (rounded_grade === 2) {
        return "2nd Grade";
    }
    return "1st Grade";
}


function ArticleView({ article, onClose }) {
    if (!article) return null;
    const url = new URL(article.link);
    const simpleUrl = url.origin;
    const date = new Date(article.published_date)
    return (
        <div className="article-container">
            <div className="article-view">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="title-container">
                    <h1 className="pgTitle">
                        <IoIosBookmark size={40} color="#2b90ee" />
                        <em className="bold">Article</em>Search
                    </h1>
                    <h2 className="authors">by Isaya Danice</h2>
                </div>

                <img
                    className="article-picture"
                    src={article.large_image_url}
                    alt="Article Picture"
                />
                <br></br>
                <a class="source-link" href={article.link} target="_blank" >{simpleUrl}</a>
                <h2 className="full-article-title">{article.title}</h2>
                <p class="article-date">{TimeFormatter.format(date)}</p>
                <p >{article.topic}</p>
                <p className="article-content">{article.content}</p>
                <table class="article-stats">
                    <tr>
                        <td>Word Count</td>
                        <td>{article.wordCount}</td>
                    </tr>
                    <tr>
                        <td>Sentence Count</td>
                        <td>{article.sentenceCount}</td>
                    </tr>
                    <tr>
                        <td>Syllable Count</td>
                        <td>{article.syllableCount}</td>
                    </tr>
                    <tr>
                        <td>Flesch Index</td>
                        <td>{article.fleschIndex.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Grade Level</td>
                        <td>{getGradeLevel(article.fleschGrade)}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default ArticleView;