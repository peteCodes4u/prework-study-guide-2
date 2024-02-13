var image = document.getElementById("g-skull");
var toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
  if (image.style.display === "none") {
  image.style.display = "block";
  } else {
  image.style.display = "none";
  }
  });

const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
const randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (let x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
 }

function selectTopic() {
 if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
 } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
 } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
 } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
 } else {
   console.log('Please try again!');
 }
}
listTopics();
console.log('Here are the topics we learned through Prework:');
selectTopic();

