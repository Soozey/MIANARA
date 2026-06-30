export const getQuestionInputType = (question) => (
    question?.type === 'multiple_choice' ? 'checkbox' : 'radio'
);

export const getSelectedChoiceIds = (selectedChoices, questionId) => {
    const value = selectedChoices[String(questionId)] ?? selectedChoices[questionId] ?? [];
    return Array.isArray(value) ? value : [value];
};

export const buildQuizAttemptPayload = (selectedChoices) => ({
    answers: Object.entries(selectedChoices)
        .map(([questionId, choiceIds]) => ({
            question_id: Number(questionId),
            selected_choice_ids: (Array.isArray(choiceIds) ? choiceIds : [choiceIds]).map(Number),
        }))
        .filter((answer) => answer.selected_choice_ids.length > 0),
});

export const isQuizComplete = (quiz, selectedChoices) => {
    const questions = quiz?.questions || [];
    return questions.length > 0 && questions.every((question) => getSelectedChoiceIds(selectedChoices, question.id).length > 0);
};

export const summarizeQuizAttempt = (attempt) => {
    if (!attempt) return '';
    const percentage = Number.isFinite(Number(attempt.percentage)) ? Number(attempt.percentage) : 0;
    return `Résultat : ${attempt.score} / ${attempt.max_score} points — ${percentage} %`;
};
