import { useState } from "react";

export default function QuestionWithState({ question, index, onScoreChange }) {
    const [userAnswer, setUserAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [evaluation, setEvaluation] = useState(null); // null, 0, 0.5, 1

    const handleEvaluation = (score) => {
        setEvaluation(score);
        if (onScoreChange) {
            onScoreChange(score);
        }
    };

    const isQCM = question.choices && question.choices.length > 0;

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mb-6 transition-all hover:shadow-md">
            {/* Header: Type + Index */}
            <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
                    {question.type || "Question"}
                </span>
                <span className="text-gray-500 text-sm font-medium">
                    Question {index + 1}
                </span>
            </div>

            {/* Prompt */}
            <div className="mb-6">
                <h3 className="text-gray-900 font-medium text-lg leading-relaxed">
                    {question.prompt}
                </h3>
            </div>

            {/* User Input Area */}
            <div className="mb-6">
                {isQCM ? (
                    <div className="space-y-3">
                        {question.choices.map((choice, idx) => (
                            <label
                                key={idx}
                                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${userAnswer === choice
                                        ? "border-blue-500 bg-blue-50 ring-1 ring-blue-500"
                                        : "border-gray-200 hover:bg-gray-50"
                                    }`}
                            >
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={choice}
                                    checked={userAnswer === choice}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                    disabled={showAnswer} // Disable changing answer after showing correction? Optional.
                                />
                                <span className="ml-3 text-gray-700">{choice}</span>
                            </label>
                        ))}
                    </div>
                ) : (
                    <textarea
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        placeholder="Écrivez votre réponse ici..."
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-[120px] text-gray-700 resize-y"
                        disabled={showAnswer && evaluation !== null} // Disable only if evaluated? Or just let them edit.
                    />
                )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4">
                {/* Show/Hide Answer Button */}
                <div>
                    <button
                        onClick={() => setShowAnswer(!showAnswer)}
                        className={`px-5 py-2 rounded-lg font-medium text-sm transition-colors ${showAnswer
                                ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm"
                            }`}
                    >
                        {showAnswer ? "Masquer la correction" : "Afficher la correction"}
                    </button>
                </div>

                {/* Correction & Evaluation Section */}
                {showAnswer && (
                    <div className="animate-fadeIn mt-2">
                        <div className="bg-green-50 border border-green-100 rounded-lg p-5 mb-6">
                            <h4 className="text-green-800 font-bold text-sm uppercase mb-2">
                                Réponse attendue
                            </h4>
                            <p className="text-gray-800 leading-relaxed whitespace-pre-line">
                                {question.answer}
                            </p>
                        </div>

                        {/* Self Evaluation */}
                        <div className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                            <p className="text-center text-gray-700 font-medium mb-4">
                                Comment évaluez-vous votre réponse ?
                            </p>
                            <div className="flex justify-center gap-3 sm:gap-6">
                                <button
                                    onClick={() => handleEvaluation(0)}
                                    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg border transition-all ${evaluation === 0
                                            ? "bg-red-100 border-red-300 text-red-800 font-bold ring-2 ring-red-200"
                                            : "bg-white border-gray-300 text-gray-600 hover:bg-red-50 hover:border-red-200"
                                        }`}
                                >
                                    😞 Faux (0)
                                </button>
                                <button
                                    onClick={() => handleEvaluation(0.5)}
                                    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg border transition-all ${evaluation === 0.5
                                            ? "bg-yellow-100 border-yellow-300 text-yellow-800 font-bold ring-2 ring-yellow-200"
                                            : "bg-white border-gray-300 text-gray-600 hover:bg-yellow-50 hover:border-yellow-200"
                                        }`}
                                >
                                    😐 À moitié (0.5)
                                </button>
                                <button
                                    onClick={() => handleEvaluation(1)}
                                    className={`flex-1 sm:flex-none px-4 py-2 rounded-lg border transition-all ${evaluation === 1
                                            ? "bg-green-100 border-green-300 text-green-800 font-bold ring-2 ring-green-200"
                                            : "bg-white border-gray-300 text-gray-600 hover:bg-green-50 hover:border-green-200"
                                        }`}
                                >
                                    😃 Juste (1)
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
