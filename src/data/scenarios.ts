export interface Scenario {
  id: string;
  status: string;
  actionPrompt: string;
  baseVerb: string;
  correctTense: string;
  tenseName: string;
  failMessage: string;
  imageUrl: string;
}

export const scenarios: Scenario[] = [
  {
    id: '1',
    status: 'You\'re at the Marché Central, and a merchant screams as you accidentally knock over a pile of oranges. A massive, angry butcher is lunging at you with a cleaver.',
    actionPrompt: 'What are you doing right now?',
    baseVerb: 'dodge',
    correctTense: 'dodging',
    tenseName: 'present_continuous',
    failMessage: 'The cleaver bites into your shoulder because you were too slow to react.',
    imageUrl: 'https://loremflickr.com/800/450/casablanca,market'
    },
    {
    id: '2',
    status: 'You escape into a narrow alleyway, but a pack of street dogs blocks the exit. They look hungry and desperate.',
    actionPrompt: 'What did you do to avoid the dogs yesterday in the same alley?',
    baseVerb: 'climb',
    correctTense: 'climbed',
    tenseName: 'past_simple',
    failMessage: 'The dogs surround you. You forgot the wall you climbed before, and now it\'s too late.',
    imageUrl: 'https://loremflickr.com/800/450/alley,dog'      
    },
    {
    id: '3',
    status: 'A local guide offers to hide you, but he wants a bribe. You realize you have no dirhams left.',
    actionPrompt: 'You (lose) your wallet at the market. Complete the sentence in the Present Perfect.',
    baseVerb: 'lose',
    correctTense: 'have lost',
    tenseName: 'present_perfect',
    failMessage: 'The guide laughs at your empty pockets. You realize you still haven\'t found what you lost.',
    imageUrl: 'https://loremflickr.com/800/450/wallet,money'      
    },
    {
    id: '4',
    status: 'The police are searching the district. You need to look like a regular tourist to blend in.',
    actionPrompt: 'If they ask what you do every morning, you say: "I (drink) mint tea."',
    baseVerb: 'drink',
    correctTense: 'drink',
    tenseName: 'present_simple',
    failMessage: 'Your hesitation was obvious. Tourists don\'t think about their morning tea.',
    imageUrl: 'https://loremflickr.com/800/450/morocco,tea'   
    },
    {
    id: '5',
    status: 'A tram is speeding toward you as you cross the Boulevard Mohammed V.',
    actionPrompt: 'What are you doing right now?',
    baseVerb: 'jump',
    correctTense: 'jumping',
    tenseName: 'present_continuous',
    failMessage: 'The tram doesn\'t stop. You froze when you should have been jumping.',
    imageUrl: 'https://loremflickr.com/800/450/tram'   
    },
    {
    id: '6',
    status: 'You flag down a red Petit Taxi on a rainy afternoon near Twin Center. The driver says the meter is "broken" and quotes you a ridiculous price to Ain Diab.',
    actionPrompt: 'You (negotiate) for a better price before getting in.',
    baseVerb: 'negotiate',
    correctTense: 'negotiate',
    tenseName: 'present_simple',
    failMessage: 'You paid triple the normal fare. Your wallet is crying.',
    imageUrl: 'https://loremflickr.com/800/450/taxi,morocco'      
    },
    {
    id: '7',
    status: 'You are deep in the labyrinth of the Ancienne Medina. The sun is setting, and you realize you have been walking in circles for twenty minutes.',
    actionPrompt: 'What have you been doing for the last twenty minutes?',
    baseVerb: 'wander',
    correctTense: 'have been wandering',
    tenseName: 'present_perfect_continuous',
    failMessage: 'Night falls. The Medina is much scarier when you are lost in the dark.',
    imageUrl: 'https://loremflickr.com/800/450/medina,morocco'      
    },
    {
    id: '8',
    status: 'A street vendor offers you a steaming bowl of spicy snails (Babbouche). You want to prove you are not a typical tourist.',
    actionPrompt: 'You (eat) the entire bowl yesterday to impress your friends.',
    baseVerb: 'eat',
    correctTense: 'ate',
    tenseName: 'past_simple',
    failMessage: 'Your stomach gurgles in protest. Maybe one snail would have been enough.',
    imageUrl: 'https://loremflickr.com/800/450/moroccan,food'      
    },
    {
    id: '9',
    status: 'You are inside a traditional Hammam. The heat is intense, and the "Kessal" (masseur) is ready to scrub your skin off with a black glove.',
    actionPrompt: 'What are you doing as the steam fills the room?',
    baseVerb: 'sweat',
    correctTense: 'sweating',
    tenseName: 'present_continuous',
    failMessage: 'The heat overwhelmed you. You should have stayed hydrated.',
    imageUrl: 'https://loremflickr.com/800/450/hammam,steam'      
    },
    {
    id: '10',
    status: 'You finally reach your Riad, but the receptionist tells you they have no record of your booking.',
    actionPrompt: 'By the time you arrived, they (give) your room to someone else.',
    baseVerb: 'give',
    correctTense: 'had given',
    tenseName: 'past_perfect',
    failMessage: 'You are spending the night on a sofa in the courtyard. Book in advance next time.',
    imageUrl: 'https://loremflickr.com/800/450/riad,morocco'   
    }
];
