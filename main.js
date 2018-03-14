var newArray = [];

var wrdList = [
  {
  merry : " merrui",
  christmas :" christmas",
  and : " a",
  happy : " happui",
  new : " siniath",
  year : " in"
  },
  {
  merry:" merrui",
  christmas :" christmas",
  and : " ma",
  happy : " happui",
  new : " sash",
  year : " firesof"
  },
  {
    merry : " quch",
    christmas :" christmas",
    and : " je",
    happy : " quch",
    new : " chu'",
    year : " DIS"
  }
]

function printToDom(stringToPrint, divId)
{
    //take string and innerHTML to the divId
    document.getElementById(divId).innerHTML = stringToPrint;
}

function check(languageIdx)
{
    var words = document.getElementById("input").value.toLowerCase().split(" ");
    var counter = 0;
    words.forEach(word => 
    {
        if(Object.keys(wrdList[0]).indexOf(word) != -1)
        {
          counter++;
        } else
        {
            alert("Sorry that is not an accepted phrase :(. Please try again.");
        }
        if(counter === words.length)
        {
          allAboard(words, languageIdx);
        }
    });
}

var allAboard = function translation(strang, obj){
  strang.forEach(function(elem){
    if ( elem === "merry")
    {
      console.log(newArray);
      newArray += wrdList[obj].merry;
    }
    else if (elem === "christmas")
    {
      newArray += wrdList[obj].christmas;
    }
    else if (elem === "and")
    {
      newArray += wrdList[obj].and;
    }
    else if (elem === "happy")
    {
      newArray += wrdList[obj].happy;
    }
    else if (elem === "new")
    {
      newArray += wrdList[obj].new;
    }
    else if (elem === "year")
    {
      newArray += wrdList[obj].year;
    }
  });
  printToDom(newArray, 'output')

}

function onButtonClick() 
{
    var buttons = document.getElementsByTagName('button');
    buttons[0].onclick = function(){check(0);};  
    buttons[1].onclick = function(){check(1);};  
    buttons[2].onclick = function(){check(2);};  
}

onButtonClick();
// var xmas = ["johan"] //will be empty array where string has been spit into words.
