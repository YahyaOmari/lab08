//Simple loops

// function giveRate(){
//     let feedback = prompt("Out of 5, how much do you rate us?");
//     let rate;

//     if (feedback == 5 || feedback == 4)
//     {
//         rate=alert('Thank you for the good rate.');
//     } else if (feedback >= 0 && feedback <= 3)
//     {
//         rate=alert('Thank you, we will try to fix everything');
//     } else
//     {
//         rate=alert('Something went wrong, you should choose between 0 and 5');
//     }
//     document.write(rate);
// }

//Loops with pictures

function getItem()
{
    let userChoose = prompt("Please type what do you want to play Treadmill , Indoor cycling or Stair climber?");
    var exrsice= '';

    while(userChoose !== "Treadmill" && userChoose !== "Indoor cycling" && userChoose !== "Stair climber")
    {
        userChoose=prompt("Please enter what you want to play Treadmill , Indoor cycling or Stair climber ");
    }
    
    //console.log('user choice', userChoose, 'exercise', exercise);

    if (userChoose == 'Indoor cycling')
    
    {
        exrsice = '<img src="Images/cycling.jpg" />';

    } 
    else if (userChoose == 'Indoor climber')
    {
        exrsice = '<img src="Images/Climber.jpg"/>';
    } 
    else if (userChoose == 'Treadmill')
    {
        exrsice = '<img src="Images/Treadmill.jpg" />';
    } 
    
    return exrsice;
}
// to count the pictures
function howMany() 
    {
    let count = prompt('How many times you want to exrsice?');

    while(count == '' || isNaN(count)) 
    {
         count = prompt('Please enter a number!!');
    }
    return count;
}

function showOrder() {
    var exrsice = getItem();
    let total = howMany();
    let result = '';
  
    for(let i = 0; i < total; ++i) {
      result = result + '<p>Model #' + i + ' ' + exrsice + '</p>';
    }
    
    document.write(exrsice);
    return result;
  }
  