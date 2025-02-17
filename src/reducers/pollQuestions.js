import {GET_QUESTIONS, ADD_POLL, ADD_RESPONSE} from "../actions/pollQueries";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ADD_RESPONSE:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.author])
          }
        }};

    default:
      return state;
  }
}
