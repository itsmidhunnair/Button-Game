// <!----------------Javascript---------------------->

const heading = document.querySelector('h1');

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var element = document.getElementById('text');
if (isMobile) {
    heading.innerText = 'This game only works on desktop, so please Open this link in DESKTOP and ENJOY!!!';


} else {


    //first we'll grab everything we want
    const crazyButton = document.querySelectorAll('.btn-crazy');
    const celebrations = document.querySelectorAll('.confetti-piece');
    //define our functions

    function moveBtn(abc) {
        console.log(abc);
        const button = abc.target;
        //we need to get a random number for the left offset
        const offsetLeft = Math.random() * (window.innerWidth - button.clientWidth);

        //and a random number for top offset
        const offsetTop = Math.random() * (window.innerHeight - button.clientHeight - 40);

        console.log(offsetLeft, offsetTop);

        //and apply those number to the button
        button.style.top = offsetTop + 'px';
        button.style.left = offsetLeft + 'px';
    }

    function celebrate() {
        document.getElementById("b1").style.visibility = "hidden";
        document.getElementById("b2").style.visibility = "hidden";
        document.getElementById("b3").style.visibility = "hidden";
        //buttons

        document.getElementById("h1").style.visibility = "hidden";
        //heading

        document.getElementById("w1").style.visibility = "visible";
        //won Text

        document.getElementById("w2").style.visibility = "visible";
        //play again button
        document.getElementById("c1").style.visibility = "visible";
        document.getElementById("c2").style.visibility = "visible";
        document.getElementById("c3").style.visibility = "visible";
        document.getElementById("c4").style.visibility = "visible";
        document.getElementById("c5").style.visibility = "visible";
        document.getElementById("c6").style.visibility = "visible";
        document.getElementById("c7").style.visibility = "visible";
        document.getElementById("c8").style.visibility = "visible";
        document.getElementById("c9").style.visibility = "visible";
        document.getElementById("c10").style.visibility = "visible";
        document.getElementById("c11").style.visibility = "visible";
        document.getElementById("c12").style.visibility = "visible";
        document.getElementById("c13").style.visibility = "visible";
    };

    function playAgain() {
        location.reload();
    };

    //add our  event listenters
    crazyButton.forEach(button => {
        button.addEventListener('mouseenter', moveBtn);
    });
}