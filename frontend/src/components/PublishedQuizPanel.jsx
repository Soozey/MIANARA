import { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizService } from '../services/quizService';
import {
    buildQuizAttemptPayload,
    getQuestionInputType,
    getSelectedChoiceIds,
    isQuizComplete,
    summarizeQuizAttempt,
} from '../services/quizUtils';

export default function PublishedQuizPanel({ quizzes, loading, error, onRetry, user }) {
    const [selectedChoices, setSelectedChoices] = useState({});
    const [attempts, setAttempts] = useState({});
    const [submittingQuizId, setSubmittingQuizId] = useState(null);
    const [submitError, setSubmitError] = useState(null);

    const toggleChoice = (question, choiceId) => {
        setSubmitError(null);
        setSelectedChoices((current) => {
            const questionKey = String(question.id);
            if (getQuestionInputType(question) === 'radio') {
                return { ...current, [questionKey]: [choiceId] };
            }

            const selected = getSelectedChoiceIds(current, question.id);
            const nextSelected = selected.includes(choiceId)
                ? selected.filter((id) => id !== choiceId)
                : [...selected, choiceId];

            return { ...current, [questionKey]: nextSelected };
        });
    };

    const submitQuiz = async (quiz) => {
        setSubmitError(null);
        setSubmittingQuizId(quiz.id);
        try {
            const payload = buildQuizAttemptPayload(selectedChoices);
            const attempt = await quizService.submitAttempt(quiz.id, payload);
            setAttempts((current) => ({ ...current, [quiz.id]: attempt }));
        } catch (err) {
            setSubmitError(err.message || "Impossible d'envoyer vos réponses.");
        } finally {
            setSubmittingQuizId(null);
        }
    };

    if (loading) {
        return (
            <section className="mt-12 pt-8 border-t-2 border-gray-100">
                <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-indigo-700">
                    Chargement des quiz publiés…
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="mt-12 pt-8 border-t-2 border-gray-100">
                <div className="bg-red-50 border border-red-100 rounded-2xl p-6 text-red-700">
                    <p className="font-semibold mb-3">{error}</p>
                    <button
                        onClick={onRetry}
                        className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                        Réessayer les quiz
                    </button>
                </div>
            </section>
        );
    }

    if (!quizzes || quizzes.length === 0) return null;

    return (
        <section className="mt-12 pt-8 border-t-2 border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-emerald-100 p-2 rounded-lg text-2xl">✅</span>
                Quiz publiés
            </h3>
            <p className="text-gray-600 mb-8">
                Répondez aux QCU/QCM liés à ce contenu. La correction est calculée par l’API MIANARA.
            </p>

            <div className="space-y-8">
                {quizzes.map((quiz) => {
                    const attempt = attempts[quiz.id];
                    const complete = isQuizComplete(quiz, selectedChoices);
                    return (
                        <div key={quiz.id} className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 shadow-sm">
                            <div className="mb-6">
                                <div className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">
                                    {quiz.subject || 'Quiz'} {quiz.level ? `• ${quiz.level}` : ''}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{quiz.title}</h4>
                                {quiz.description && <p className="text-gray-600 mt-2">{quiz.description}</p>}
                            </div>

                            <div className="space-y-6">
                                {quiz.questions.map((question, index) => {
                                    const inputType = getQuestionInputType(question);
                                    const selected = getSelectedChoiceIds(selectedChoices, question.id);
                                    const answer = attempt?.answers?.find((item) => item.question === question.id);
                                    return (
                                        <fieldset key={question.id} className="bg-white rounded-xl border border-gray-200 p-5">
                                            <legend className="font-semibold text-gray-900 mb-4">
                                                Question {index + 1} — {question.points || 1} point{(question.points || 1) > 1 ? 's' : ''}
                                            </legend>
                                            <p className="text-gray-800 mb-4">{question.prompt}</p>
                                            <div className="space-y-3">
                                                {question.choices.map((choice) => {
                                                    const checked = selected.includes(choice.id);
                                                    const isSelectedInAttempt = answer?.selected_choice_ids?.includes(choice.id);
                                                    return (
                                                        <label
                                                            key={choice.id}
                                                            className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${checked
                                                                ? 'border-emerald-500 bg-emerald-50'
                                                                : 'border-gray-200 hover:bg-gray-50'
                                                                }`}
                                                        >
                                                            <input
                                                                type={inputType}
                                                                name={`quiz-${quiz.id}-question-${question.id}`}
                                                                checked={checked}
                                                                onChange={() => toggleChoice(question, choice.id)}
                                                                disabled={Boolean(attempt)}
                                                                className="h-4 w-4 text-emerald-600 focus:ring-emerald-500"
                                                            />
                                                            <span className="flex-1 text-gray-700">{choice.text}</span>
                                                            {attempt && isSelectedInAttempt && (
                                                                <span className={`text-sm font-semibold ${answer.is_correct ? 'text-emerald-700' : 'text-red-600'}`}>
                                                                    {answer.is_correct ? 'Juste' : 'Choisi'}
                                                                </span>
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                            {answer?.explanation && (
                                                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-lg p-4 text-blue-900">
                                                    <span className="font-semibold">Explication : </span>{answer.explanation}
                                                </div>
                                            )}
                                        </fieldset>
                                    );
                                })}
                            </div>

                            {attempt ? (
                                <div className="mt-6 bg-emerald-600 text-white rounded-xl p-5 font-bold text-center">
                                    {summarizeQuizAttempt(attempt)}
                                </div>
                            ) : (
                                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    {!user && (
                                        <p className="text-sm text-gray-600">
                                            <Link to="/login" className="font-semibold text-emerald-700 hover:underline">Connectez-vous</Link> pour envoyer vos réponses et voir la correction.
                                        </p>
                                    )}
                                    <button
                                        onClick={() => submitQuiz(quiz)}
                                        disabled={!user || !complete || submittingQuizId === quiz.id}
                                        className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {submittingQuizId === quiz.id ? 'Envoi…' : 'Valider mes réponses'}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            {submitError && (
                <div className="mt-6 bg-red-50 text-red-700 border border-red-100 rounded-xl p-4">
                    {submitError}
                </div>
            )}
        </section>
    );
}
