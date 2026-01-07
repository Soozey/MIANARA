import React, { useState } from "react";
import { DEMO_CONTENTS } from "../data/demoContent";
import QuestionWithState from "../components/QuestionWithState";

const MianaraDemoPage = () => {
    const [expandedId, setExpandedId] = useState(null);
    const [articleScores, setArticleScores] = useState({});

    const contents = DEMO_CONTENTS;

    const toggleExpand = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const handleScoreChange = (articleId, questionIndex, score) => {
        setArticleScores((prev) => ({
            ...prev,
            [articleId]: {
                ...(prev[articleId] || {}),
                [questionIndex]: score,
            },
        }));
    };

    const getArticleTotalScore = (articleId) => {
        const scores = articleScores[articleId] || {};
        return Object.values(scores).reduce((acc, curr) => acc + (curr || 0), 0);
    };

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "16px" }}>
            {/* En-tête MIANARA */}
            <header style={{ marginBottom: "16px" }}>
                <h1 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "4px" }}>
                    Contenus pédagogiques MIANARA (démo)
                </h1>
                <p style={{ fontSize: "13px", color: "#555" }}>
                    Choisis un article, lis le résumé puis développe le contenu pour voir les
                    explications complètes et les questions avec leurs réponses.
                </p>
            </header>

            {/* Liste des articles */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {contents.map((item) => {
                    const isExpanded = expandedId === item.id;
                    const totalQuestions = item.questions ? item.questions.length : 0;
                    const currentScore = getArticleTotalScore(item.id);

                    return (
                        <article
                            key={item.id}
                            style={{
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                padding: "12px",
                                backgroundColor: "#fff",
                            }}
                        >
                            {/* Titre + infos */}
                            <div style={{ marginBottom: "8px" }}>
                                <h2
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: 600,
                                        marginBottom: "4px",
                                    }}
                                >
                                    {item.title}
                                </h2>
                                <div
                                    style={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        gap: "6px",
                                        fontSize: "11px",
                                        color: "#555",
                                    }}
                                >
                                    <span
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "999px",
                                            padding: "2px 8px",
                                        }}
                                    >
                                        {item.category}
                                    </span>
                                    <span
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "999px",
                                            padding: "2px 8px",
                                        }}
                                    >
                                        Niveau : {item.level}
                                    </span>
                                    <span
                                        style={{
                                            border: "1px solid #ccc",
                                            borderRadius: "999px",
                                            padding: "2px 8px",
                                        }}
                                    >
                                        Questions : {totalQuestions}
                                    </span>
                                </div>
                            </div>

                            {/* Résumé */}
                            <p
                                style={{
                                    fontSize: "13px",
                                    color: "#333",
                                    marginBottom: "8px",
                                }}
                            >
                                {item.summary}
                            </p>

                            {/* Bouton développer / masquer l’article */}
                            <button
                                type="button"
                                onClick={() => toggleExpand(item.id)}
                                style={{
                                    fontSize: "12px",
                                    color: "#0056b3",
                                    textDecoration: "underline",
                                    border: "none",
                                    background: "none",
                                    cursor: "pointer",
                                    padding: 0,
                                    marginBottom: "8px",
                                }}
                            >
                                {isExpanded ? "Masquer l’article" : "Lire l’article complet"}
                            </button>

                            {/* Corps + questions */}
                            {isExpanded && (
                                <div
                                    style={{
                                        borderTop: "1px solid #eee",
                                        marginTop: "8px",
                                        paddingTop: "8px",
                                    }}
                                >
                                    {/* Body */}
                                    <p
                                        style={{
                                            fontSize: "13px",
                                            color: "#222",
                                            lineHeight: 1.5,
                                            whiteSpace: "pre-line",
                                            marginBottom: "20px",
                                        }}
                                    >
                                        {item.body}
                                    </p>

                                    {/* Questions Section */}
                                    {item.questions && item.questions.length > 0 && (
                                        <section className="mt-8 pt-6 border-t border-gray-100">
                                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                                <span>📝</span> Exercices pratiques
                                            </h3>

                                            <div className="space-y-6">
                                                {item.questions.map((q, index) => (
                                                    <QuestionWithState
                                                        key={index}
                                                        question={q}
                                                        index={index}
                                                        onScoreChange={(score) => handleScoreChange(item.id, index, score)}
                                                    />
                                                ))}
                                            </div>

                                            {/* Score Summary */}
                                            <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 flex justify-between items-center">
                                                <div>
                                                    <h4 className="font-bold text-indigo-900">Votre résultat</h4>
                                                    <p className="text-sm text-indigo-700">Auto-évaluation basée sur vos réponses</p>
                                                </div>
                                                <div className="text-3xl font-black text-indigo-600">
                                                    {currentScore} <span className="text-lg text-indigo-400 font-medium">/ {totalQuestions}</span>
                                                </div>
                                            </div>
                                        </section>
                                    )}
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default MianaraDemoPage;
