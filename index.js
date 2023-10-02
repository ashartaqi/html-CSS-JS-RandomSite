// variables
let new_quote = document.querySelector("#new-quote");
let quote_author = document.querySelector("#quote-author");
let goat_btn = document.getElementById("goat");
let img = document.querySelector("#goat-in-picture");
let joke_btn = document.getElementById("joke");
let joke = document.querySelector("#funny-joke");
let quote_btn = document.getElementById("random_quote");
let riddle_btn = document.getElementById("riddle");
let riddle_question = document.querySelector("#riddle-question");
let answer_btn = document.getElementById("answer");
let riddle_answer = document.querySelector("#riddle-answer");

let button_clicked = false;

const jokes = [
  "Guess the number of programmers it takes to change a light bulb? Zero its a hardware problem",
  "There are only 10 kinds of people in this world: those who know binary and those who don’t.",
  "Real programmers count from 0.",
  "Why did the programmer quit his job? Because he didnt get arrays.",
  "A foo walks into a bar takes a look around and says Hello World",
  "0 is false 1 is true right? 1",
  "Things arent always #000000 and #FFFFFF.",
  "What is the most used language in programming? Profanity",
  "!False its funny because its True",
  "You had me at Hello World",
  "2b||!2b",
  "Yesterday I changed the name on my wifi to Hack if you can. Today I found it named Challenge Accepted",
  "A programmer is a person who fixed a problem that you didnt know you had in a way you dont understand",
  "How can you tell if a computer geek is an extrovert? They stare at your shoes when you talk instead of their own.",
  "I would love to change the world but they wont give me the source code.",
  "If at first you dont succedd call it version 1.0",
  "Computers make very fast very accurate mistakes",
  "I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.",
  "Knock Knock... Whos there? Art... Art Who? R2D2",
  "Hilarious and amazingly true thing: if a pizza has a radius (z) and a depth (a) that pizzas volume can be defined Pi*z*z*a.",
];
const quotes = [
  ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
  ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
  ["Argue with idiots, and you become an idiot.", "Paul Graham"],
  ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
  ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],
];
const riddles = [
  {
    question:
      "A man hijacks an aeroplane transporting both passengers(8 of them) and valuable cargo. After taking the cargo, the man demands nine parachutes, puts one of them on, and jumps, leaving the other eight behind. Why did he want eight?",
    answer:
      "If the officials thought he was jumping with a hostage, they would never risk giving him a faulty parachute.",
  },
  {
    question:
      "Mr. Black, Mr. Gray, and Mr. White are fighting in a truel. They each get a gun and take turns shooting at each other until only one person is left. Mr. Black, who hits his shot 1/3 of the time, gets to shoot first. Mr. Gray, who hits his shot 2/3 of the time, gets to shoot next, assuming he is still alive. Mr. White, who hits his shot all the time, shoots next, assuming he is also alive. The cycle repeats. If you are Mr. Black, where should you shoot first for the highest chance of survival?",
    answer:
      "He should shoot at the ground.  If Mr. Black shoots the ground, it is Mr. Gray's turn. Mr. Gray would rather shoot at Mr. White than Mr. Black, because he is better. If Mr. Gray kills Mr. White, it is just Mr. Black and Mr. Gray left, giving Mr. Black a fair chance of winning. If Mr. Gray does not kill Mr. White, it is Mr. White's turn. He would rather shoot at Mr. Gray and will definitely kill him. Even though it is now Mr. Black against Mr. White, Mr. Black has a better chance of winning than before.",
  },
  {
    question:
      "Alexander is stranded on an island covered in forest.One day, when the wind is blowing from the west, lightning strikes the west end of the island and sets fire to the forest. The fire is very violent, burning everything in its path, and without intervention the fire will burn the whole island, killing the man in the process.There are cliffs around the island, so he cannot jump off.How can the Alexander survive the fire? (There are no buckets or any other means to put out the fire)",
    answer:
      "Alexander picks up a piece of wood and lights it from the fire on the west end of the island.He then quickly carries it near the east end of he island and starts a new fire. The wind will cause that fire to burn out the eastern end and he can then shelter in the burnt area.Alexander survives the fire, but dies of starvation, with all the food in the forest burnt....lolzzz",
  },
  {
    question:
      "A man who lives on the tenth floor takes the elevator down to the first floor every morning and goes to work. In the evening, when he comes back; on a rainy day, or if there are other people in the elevator, he goes to his floor directly. Otherwise, he goes to the seventh floor and walks up three flights of stairs to his apartment.Can you explain why?",
    answer:
      "man is of a short stature. He can't reach the upper elevator buttons, but can push it with his umbrella on a rainy day",
  },
  {
    question:
      "Outside a room there are three light switches. One of switch is connected to a light bulb inside the room.Each of the three switches can be either 'ON' or 'OFF'.You are allowed to set each switch the way you want it and then enter the room(note: you can enter the room only once)Your task is to then determine which switch controls the bulb ??",
    answer:
      "Set the first switches on for abt 10min, and then switch on the second switch and then enter the room.Three cases are possible1.Bulb is on => second switch is the ans2.Bulb is off and on touching bulb , you will find bulb to be warm=>1st switch is the ans.3.Bulb is off and on touching second bulb , you will find bulb to be normal(not warm)=>3rd bulb is the ans.",
  },
];

// functions
function clear_all() {
  new_quote.innerText = "";
  quote_author.innerText = "";
  joke.innerText = "";
  img.setAttribute("height", "0px");
  img.setAttribute("width", "Opx");
  riddle_question.innerText = "";
  riddle_answer.innerText = "";
  if (answer_btn.style.display === "none") answer_btn.style.display = "block";
}
function quotes_func() {
  clear_all();
  let random = Math.floor(Math.random() * quotes.length);
  new_quote.innerText = quotes[random][0] + "\n -" + quotes[random][1];
}
function goat() {
  clear_all();
  let random = Math.floor(Math.random() * 5);
  img.setAttribute("src", `images/${random}.jpeg`);
  img.setAttribute("alt", "na");
  img.setAttribute("height", "150px");
  img.setAttribute("width", "200px");
}
function joke_generator() {
  clear_all();
  let random = Math.floor(Math.random() * jokes.length);
  joke.innerText = jokes[random];
}
function riddle_generator() {
  clear_all();
  button_clicked = true;
  let random = Math.floor(Math.random() * riddles.length);
  riddle_question.innerText = "Riddle:\n\n" + riddles[random].question;
  if (answer_btn.style.display === "none"){
     answer_btn.style.display = "block";
  }
}

// adding functionality
quote_btn.addEventListener("click", quotes_func);
goat_btn.addEventListener("click", goat);
joke_btn.addEventListener("click", joke_generator);
riddle_btn.addEventListener("click", riddle_generator);
answer_btn.addEventListener("click", function (event) {
  if (button_clicked === true) {
    let random = Math.floor(Math.random() * riddles.length);
    event.preventDefault();
    riddle_answer.innerText = "Answer:\n\n" + riddles[random].answer;
    if (answer_btn.style.display === "none"){
       answer_btn.style.display = "block";
      } else {
        answer_btn.style.display = "none";
      }
    button_clicked = false;
  } else event.preventDefault();
});
