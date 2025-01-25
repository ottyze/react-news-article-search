import React from "react";
import "./ArticleCard.css";

const TimeFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
});

/**
 * @typedef ArticleCardProps
 * @prop {import('../App').ArticleData} article
 * @prop {(article: ArticleData) => void|undefined} onClick
 */

/**
 * @param {ArticleCardProps} props
 * @returns {React.JSX.Element}
 */
export default function ArticleCard({ article, onClick }) {
    const date = new Date(article.published_date);

    return (
        <button
            className="card"
            onClick={() => {
                if (onClick) onClick(article);
            }}
        >
            <div className="thumbnail">
                <p className="topic">{article.topic}</p>

                <img
                    className="picture"
                    src={article.large_image_url}
                    alt="Article Picture"
                />
            </div>
            <div className="content">
                <a className="url" href={article.link} target={"_blank"}>
                    {article.domain}
                </a>
                <p className="title">{article.title}</p>
                <p className="date">{TimeFormatter.format(date)}</p>
                <p className="description">
                    {article.content.substring(0, 150)}
                    {article.content.length > 150 ? "..." : ""}
                </p>
            </div>
        </button>
    );
}
