const image1 = document.getElementById("gs1");
const image2 = document.getElementById("gd1");
const image3 = document.getElementById("gs2");
const image4 = document.getElementById("gd2");

const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
  
  if (image1.style.display === "none") {
    image1.style.display = "block";
    } else {
    image1.style.display = "none";
    }

  if (image2.style.display === "none") {
    image2.style.display = "block";
    } else {
    image2.style.display = "none";
    } 

  if (image3.style.display === "none") {
    image3.style.display = "block";
    } else {
    image3.style.display = "none";
    }

  if (image4.style.display === "none") {
    image4.style.display = "block";
    } else {
    image4.style.display = "none";
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

