export interface Scenario {
  id: string;
  status: string;
  actionPrompt: string;
  baseVerb: string;
  correctTense: string;
  tenseName: string;
  failMessage: string;
}

export const scenarios: Scenario[] = [
  {
    id: '1',
    status: 'You\'re at the Marché Central, and a merchant screams as you accidentally knock over a pile of oranges. A massive, angry butcher is lunging at you with a cleaver.',
    actionPrompt: 'What are you doing right now?',
    baseVerb: 'dodge',
    correctTense: 'dodging',
    tenseName: 'present_continuous',
    failMessage: 'The cleaver bites into your shoulder because you were too slow to react.'
  },
  {
    id: '2',
    status: 'You escape into a narrow alleyway, but a pack of street dogs blocks the exit. They look hungry and desperate.',
    actionPrompt: 'What did you do to avoid the dogs yesterday in the same alley?',
    baseVerb: 'climb',
    correctTense: 'climbed',
    tenseName: 'past_simple',
    failMessage: 'The dogs surround you. You forgot the wall you climbed before, and now it\'s too late.'
  },
  {
    id: '3',
    status: 'A local guide offers to hide you, but he wants a bribe. You realize you have no dirhams left.',
    actionPrompt: 'You (lose) your wallet at the market. Complete the sentence in the Present Perfect.',
    baseVerb: 'lose',
    correctTense: 'have lost',
    tenseName: 'present_perfect',
    failMessage: 'The guide laughs at your empty pockets. You realize you still haven\'t found what you lost.'
  },
  {
    id: '4',
    status: 'The police are searching the district. You need to look like a regular tourist to blend in.',
    actionPrompt: 'If they ask what you do every morning, you say: "I (drink) mint tea."',
    baseVerb: 'drink',
    correctTense: 'drink',
    tenseName: 'present_simple',
    failMessage: 'Your hesitation was obvious. Tourists don\'t think about their morning tea.'
  },
  {
    id: '5',
    status: 'A tram is speeding toward you as you cross the Boulevard Mohammed V.',
    actionPrompt: 'What are you doing right now?',
    baseVerb: 'jump',
    correctTense: 'jumping',
    tenseName: 'present_continuous',
    failMessage: 'The tram doesn\'t stop. You froze when you should have been jumping.'
  }
];
