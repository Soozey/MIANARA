import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildQuizAttemptPayload,
  getQuestionInputType,
  summarizeQuizAttempt,
} from './quizUtils.js';

test('buildQuizAttemptPayload maps selected choices to backend attempt payload', () => {
  const selectedChoices = {
    10: [100],
    11: [102, 103],
  };

  assert.deepEqual(buildQuizAttemptPayload(selectedChoices), {
    answers: [
      { question_id: 10, selected_choice_ids: [100] },
      { question_id: 11, selected_choice_ids: [102, 103] },
    ],
  });
});

test('getQuestionInputType uses radios for single choice and checkboxes for multiple choice', () => {
  assert.equal(getQuestionInputType({ type: 'single_choice' }), 'radio');
  assert.equal(getQuestionInputType({ type: 'multiple_choice' }), 'checkbox');
});

test('summarizeQuizAttempt returns a user-facing score summary', () => {
  assert.equal(
    summarizeQuizAttempt({ score: 2, max_score: 3, percentage: 66.67 }),
    'Résultat : 2 / 3 points — 66.67 %'
  );
});
