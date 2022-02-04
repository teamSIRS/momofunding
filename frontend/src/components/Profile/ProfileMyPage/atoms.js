import { atom, selector } from "recoil";

export const shortAnsQuestionTitleState = atom({
  key: "shortAnsQuestionTitle",
  default: "",
});

export const numQuestionTitleState = atom({
  key: "numQuestionTitle",
  default: "",
});

export const numQuestionState = atom({
  key: "numQuestion",
  default: [],
});

export const shortAnsQuestionSelector = selector({
  key: "shortAnsQuestionSelector",
  get: ({ get }) => {
    const shortAnsQuestion = get(shortAnsQuestionTitleState);
    return shortAnsQuestion;
  },
});

export const numQuestionSelector = selector({
  key: "numQuestionSelector",
  get: ({ get }) => {
    const numQuestionTitle = get(numQuestionTitleState);
    const numQuestions = get(numQuestionState);
    return [numQuestionTitle, numQuestions];
  },
});
