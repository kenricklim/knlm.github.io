document.addEventListener('DOMContentLoaded', function () {
  // Define the function to start the flower animation
  function startFlowerAnimation() {
    const flowers = document.querySelectorAll(".flower");
    flowers.forEach((flower, index) => {
      flower.style.animation = `float 5s ease-in-out ${index * 0.2}s infinite`;
      flower.style.animationPlayState = "running";
    });
  }

  
  function handleUserInteraction() {
    
    alert('Hi there! Please accept this as my mini gift for u HAHAHAHAHAH.');
    const userName = prompt("Please enter your name:");
    const userAge = prompt("Please enter your age:");

    const greeting = `Happy ${userAge}th Birthday, Ma'am ${userName}!`;

    
    const greetingElement = document.getElementById("personalizedGreeting");
    greetingElement.textContent = greeting;

    alert("If nababasa mo 'to, i hope na gumagana yung whole program");
    alert('If incase di gumana animation sa una, pls refresh the page and kunwari first time mo ulit makita HAAHAHAH');
    alert('And also sowwy if eto lang muna :<');
    alert('I do have something for u but wala pa dito so eto muna AHAHAHAHA');
    alert('I hope to give that if may chance na magkita us, I know u are very busy at the moment but if u have the time or di kana busy and kung want mo lang naman');
    alert("I'd be really happy to know more about u and hangout with u sometime :))");
    alert('ANYWAYSS......');
    alert("I hope that you'll enjoy your day!");
    alert("More birthdays to come!");
    alert("May God bless you and your fam!");
    alert("GL to your works!");
    alert('Suprise in 3');
    alert('Suprise in 2');
    alert('Suprise in 1');

    
    document.body.style.visibility = "visible";

    
    startFlowerAnimation();
  }

  
  handleUserInteraction();
});


window.onload = () => {
  const flowers = document.querySelectorAll(".flower");
  flowers.forEach((flower, index) => {
    flower.style.animation = `float 5s ease-in-out ${index * 0.2}s infinite`;
    flower.style.animationPlayState = "running";
  });
};










