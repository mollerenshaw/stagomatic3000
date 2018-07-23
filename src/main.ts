basic.showString('STAGOMATIC 3000.');

const questions: string[] = [
    "What's your favourite suspension bridge? Why?",
    "Morcambe or Gloucester?",
    "Where have all the cowboys gone?",
    "Historical figure you'd most like to kick in the balls? (Not Hitler)",
    "What's the worst animal?",
    "What's the deal with Noel Edmunds?",
    "Would you rather have sex with an Android or an Apple?",
    "What's the worst idea you've ever had?",
    "What’s the biggest mammal you could fell with a punch?",
    "Who's the best Dave?",
    "Who's the worst Dave?",
    "What was your favourite experience on an aeroplane?",
    "Have you ever been on a boat?",
    "Who's your favourite octogenarian?",
    "What’s the most expensive thing you’ve ever broken?",
    "What’s the scariest thing you’ve fled?",
    "You're in a human centipede. Who’s in front/behind?",
    "Fist of ham, or nipple that dispenses suncream?"
];

const tasks: string[] = [
    "Furtive hugging",
    "Phil must never finish a drink",
    "Chris's beard is irresistable",
    "What would Col John Matrix do? Do that.",
    "Has Nik heard the gestapo joke? (Glove available)",
    "How low can you go?",
    "Tell someone everything you know about Germany.",
    "YOU MUST CONSTRUCT MORE PYLONS",
    "Collect a treasure from everyone; gift them to a stranger.",
    "High-five a building",
    "Wild applause",
    "TEQUILA",
    "Tell a hat-less stranger that you like their hat"
];

let currentText = "";

/**
 * Picks a random item from the provided array,
 * and displays it.
 */
function showRandomItem(items: string[]) {

    if (items.length === 0) {
        basic.showIcon(IconNames.No);
        basic.pause(1000);
        basic.clearScreen();
        return;
    }

    const index = Math.random(items.length - 1);
    currentText = items[index];

    basic.showString(currentText);

    // Don't show that one again.
    items.removeAt(index);
}

/**
 * Button A! Ask a question.
 */
input.onButtonPressed(Button.A, () => {
    music.beginMelody(music.getMelody(Melodies.Nyan));
    showRandomItem(questions);
});

/**
 * Button B! Set a task.
 */
input.onButtonPressed(Button.B, () => {
    music.beginMelody(music.getMelody(Melodies.Baddy));
    showRandomItem(tasks);
});

/**
 * Shake! Re-display the most recent string.
 */
input.onGesture(Gesture.Shake, () => {
    basic.showString(currentText);
});

/**
 * Both buttons! Cute message.
 */
input.onButtonPressed(Button.AB, () => {
    music.beginMelody(music.getMelody(Melodies.Wedding));
    basic.showString("STAG STAG STAG! Dave & Laura - 18 August 2018.");
});

