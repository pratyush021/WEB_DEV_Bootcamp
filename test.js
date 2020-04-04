var numSquares = 6;
var color = generateRandomColors(6);
var h1 = document.querySelector("h1");
var displayFeedback = document.querySelector("#feedback");
var displayColor = document.querySelector("#colorDisplay");
var square = document.querySelectorAll(".square");
var newColors = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var pick   = pickedColor();

displayColor.textContent = pick;


for(var index = 0; index < modeButtons.length ; index++)
{
    modeButtons[index].addEventListener("click", function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");

        if(this.textContent === "Easy")
        {
            numSquares = 3;
        }
        else{
            numSquares = 6;
        }

        repeat();





    })
}

//Figure out how many squares to show 
//pick new colors 
//pick a new picked color 
//Update page to reflect changes 

function repeat(){
    color = generateRandomColors(numSquares);
    pick = pickedColor();
    //change display color to picked color
    displayColor.textContent = pick;
    for(var i = 0 ; i < square.length ; i++)
    {
        if(color[i])
        {
            square[i].style.display = "block";
            square[i].style.backgroundColor = color[i];
        }
        else{
            square[i].style.display = "none";
        }
        
    }
    
    h1.style.backgroundColor = "steelblue";
    newColors.textContent = "New Colors";
    displayFeedback.textContent = "";



}




newColors.addEventListener("click",function(){
    // //Generate all new colors and pick a new random color 
    // color = generateRandomColors(6);
    // pick = pickedColor();
    // //change display color to picked color
    // displayColor.textContent = pick;
    // for(var i = 0 ; i < square.length ; i++)
    // {
    //     square[i].style.backgroundColor = color[i];
    // }
    
    // h1.style.backgroundColor = "steelblue";
    // this.textContent = "New Colors";
    // displayFeedback.textContent = "";
    repeat();
});
newColors.textContent = "New Colors";






for (var index = 0; index <= square.length; index++) {
    square[index].style.backgroundColor = color[index];
    square[index].addEventListener("click",function(){
        var click = this.style.backgroundColor;
        if(click === pick)
        {
            displayFeedback.textContent = "Correct.";
            newColors.textContent = "play Again?";
            h1.style.backgroundColor = click;
            reset(pick);
        }
        else{
            displayFeedback.textContent = "Try again";
            this.style.backgroundColor = "#232323";
        }
    });
}


function pickedColor(){
    var rand = Math.floor(Math.random() * numSquares);
    return color[rand];
}
function reset(color){
    for(var i = 0; i < square.length; i++)
    {
        square[i].style.backgroundColor = color;
    }

}


function generateRandomColors(num){
    var arr = [0];
    for(var i = 0 ; i < num ; i++)
    {
       arr[i] = generateSingleColors();
    }
    return arr;
}

function generateSingleColors(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb("+ red +", "+ green +", "+blue +")";

}

//Button to reset the colors





// easyBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = "steelblue";
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     color = generateRandomColors(numSquares);
//     pick = pickedColor();
//     displayColor.textContent = pick;
//     for(var i = 0; i <= square.length ; i++ )
//     {
//         if(i < 3)
//         {
//             square[i].style.backgroundColor = color[i];
//         }
//         else{
//             square[i].style.display = "none";
//         }
//     }
//     easyBtn.style.backgroundColor = "steelblue";
// });
// hardBtn.addEventListener("click",function(){
//     h1.style.backgroundColor = "steelblue";
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     color = generateRandomColors(numSquares);
//     pick = pickedColor();
//     displayColor.textContent = pick;
//     for(var i = 0; i <= square.length ; i++ )
//     {

//             square[i].style.backgroundColor = color[i];
//             square[i].style.display = "block";
//     }
    
// });