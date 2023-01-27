import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id: 1,
        question: 'Python Or JavaScript',
        answerA: 'Python',
        answerB: 'JavaScript',
        votesA: 9,
        votesB: 16,
    },
]);

export default PollStore;