var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0;
//setting variables
var quizAnswers = [];

//set array on hold answers
var questions= [
    {
	    question: "What was the club's name before it became Manchester United?",//question
	    correctAnswer: "Newton Heath",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Newton Heath",
	    answer1: "FC United",
	    answer2: "Manchester City",
        answer3: "Manchester FC"
	},
    {
	    question: "The club's first ever manager was...",//question
	    correctAnswer: "Unknown",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Jimmy Murphy",
	    answer1: "Jack Robson",
	    answer2: "Unknown",
        answer3: "Mark Collins"
	},
    {
	    question: "Man United won their first ever First Division league title in...",//question
	    correctAnswer: "1908",//right answer to question
        
        //list of multiple choice answers
	    answer0: "1908",
	    answer1: "1992",
	    answer2: "1996",
        answer3: "1905"
	},
    {
	    question: "For how many years was Alex Ferguson in charge of the club?",//question
	    correctAnswer: "26",//right answer to question
        
        //list of multiple choice answers
	    answer0: "25",
	    answer1: "22",
	    answer2: "26",
        answer3: "20"
	},
     {
	    question: "Who scored the winning goal for Manchester united in the FA Cup final of 2015/2016 season?",//question
	    correctAnswer: "Jesse Lingard",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Wayne Rooney",
	    answer1: "Anthony Martial",
	    answer2: "Jesse Lingard",
        answer3: "Juan Mata"
	},
 {
	    question: "Who did Manchester United beat in the quarter final, to win the Champions League in 1999?",//question
	    correctAnswer: "Juventus",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Inter Milan",
	    answer1: "Barcelona",
	    answer2: "Juventus",
        answer3: "Real Madrid"
	},
 {
	    question: " At which stadium do Manchester United play their home games?",//question
	    correctAnswer: "Old Trafford",//right answer to question
        
        //list of multiple choice answers
	    answer0: "St James Park",
	    answer1: "City of Manchester Stadium",
	    answer2: "Old Trafford",
        answer3: "Webley"
	},
 {
	    question: "Where was Ryan Giggs born?",//question
	    correctAnswer: "Cardiff",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Swansea",
	    answer1: "Llandudno",
	    answer2: "Cardiff",
        answer3: "Wales"
	},
 {
	    question: "Who scored United's first goal of 2016, having also scored their last goal of 2015?",//question
	    correctAnswer: "Anthony Martial",//right answer to question
        
       //list of multiple choice answers
	    answer0: "Wayne Rooney",
	    answer1: "Juan Mata",
	    answer2: "Anthony Marital",
        answer3: "Marcus Rashford"
	},
 {
	    question: "Marcus Rashford scored two goals on his United debut in February, but who was it against?",//question
	    correctAnswer: "FC Midtjylland",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Feyenoord",
	    answer1: "Watford",
	    answer2: "FC Midtjylland",
        answer3: "PSV"
	},
 {
	    question: "How many days after winning the FA Cup was Louis van Gaal sacked as United boss?",//question
	    correctAnswer: "2",//right answer to question
        
        //list of multiple choice answers
	    answer0: "2",
	    answer1: "6",
	    answer2: "15",
        answer3: "None"
	},
 {
	    question: "How many times have Manchester United been top-flight champions in England?",//question
	    correctAnswer: "20",//right answer to question
        
        //list of multiple choice answers
	    answer0: "12",
	    answer1: "15",
	    answer2: "20",
        answer3: "21"
	},
 {
	    question: "Who's record did Wayne Rooney break when he became United's top European goalscorer of all-time in 2016?",//question
	    correctAnswer: "Ruud van Nistelrooy",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Ryan Giggs",
	    answer1: "Bobby Charlton",
	    answer2: "Ruud van Nistelrooy",
        answer3: "Cristiano Ronaldo"
	},
        
 {
	    question: "I won't be the King of Manchester, I will be the God of Manchester. - Who said that upon his arrival at United??",//question
	    correctAnswer: "Zlatan Ibrahimovic",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Jose Morinho",
	    answer1: "Zlatan Ibrahimovic",
	    answer2: "Paul Pogba",
        answer3: "Wayne Rooney"
	},
 {
	    question: "Which year did Sir Alex Ferguson take over as Manchester United Manager?",//question
	    correctAnswer: "26",//right answer to question
        
        //list of multiple choice answers
	    answer0: "1982",
	    answer1: "1986",
	    answer2: "1988",
        answer3: "1990"
	},
        
 {
	    question: "Who has made the most appearances for Manchester United?",//question
	    correctAnswer: "Bobby Charlton",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Bobby Charlton",
	    answer1: "Ryan Giggs",
	    answer2: "Gary Nevel",
        answer3: "Paul Scholes"
	},
 {
	    question: "Who scored the winner in stoppage time against Bayern Munich in the 1999 Champions League Final?",//question
	    correctAnswer: "Ole Gunnar solskjaer",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Andy Cole",
	    answer1: "Dwight Yorke",
	    answer2: "Ole Gunnar solskjaer",
        answer3: "Roy Keane"
	},
 {
	    question: "Who did Sir Alex Ferguson famously kick a boot at after a match?",//question
	    correctAnswer: "David Beckham",//right answer to question
        
        //list of multiple choice answers
	    answer0: "David Beckham",
	    answer1: "Roy Keane",
	    answer2: "Gary Nevel",
        answer3: "Ryan Giggs"
	},
 {
	    question: "What is the club's nickname??",//question
	    correctAnswer: "The Red Devils",//right answer to question
        
        //list of multiple choice answers
	    answer0: "The Red Mist",
	    answer1: "The Red Devils",
	    answer2: "The Red Hots",
        answer3: "The Red City"
	},
 {
	    question: "Who was the manager of Manchester United when they first won the European Cup?",//question
	    correctAnswer: "26",//right answer to question
        
        //list of multiple choice answers
	    answer0: "Sir Alex Ferguson",
	    answer1: "Sir Matt Busby",
	    answer2: "Rob Atkinson",
        answer3: "David Moyes"
	},


    
];

//function which takes an array and shuffles its contents
//used to get different order of multiple choice answers every time quiz is taken
function shuffleArray(array) 
{
	for (var i = array.length - 1; i > 0; i--) 
	{
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
	}
	return array;
}

function _(x)
{
	return document.getElementById(x); 
}

function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}
	
function renderQuestion()
{ 
    test = _("test"); 
    if(pos >= questions.length)//If position is greater or equal to the length of question, ie 20
    { 
        test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct (" +percent() + "%)</h2>";//Print # correct out of 20
        _("test_status").innerHTML += "  Thank you for completing the quiz";//Print "thank you .... "
        pos = 0;
        correct = 0; 
        return false; 
    }	
	
	_("test_status").innerHTML = "Question " +(pos+1)+"of "+questions.length;
    
     var bar=document.getElementById("progressBar");//progress bar value
	bar.value = (pos+1)//Progress bar increments as we go through questions, starts at 1
    
    //console.log("Pos value is " + pos);//write this to console
    
    //push all potential answers to the quizAnswers array
    quizAnswers[0] = questions[pos].answer0;
    quizAnswers[1] = questions[pos].answer1;
    quizAnswers[2] = questions[pos].answer2;
    

    //Shuffle the answers
    var shuffledAnswers = shuffleArray(quizAnswers);
    

	
	question = questions[pos].question;
	choiceA = shuffledAnswers[0];
	choiceB = shuffledAnswers[1];
	choiceC = shuffledAnswers[2];
    
	 test.innerHTML = "<h3>"+question+"</h3>"; //questions are written in h3 size
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceA+"' checked> "+choiceA+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceB+"'> "+choiceB+"<br>"; //Radio button
    test.innerHTML += "<input type='radio' name='choices' value='"+choiceC+"'> "+choiceC+"<br><br>"; //Radio button
	test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer()
{ 
    choices = document.getElementsByName("choices"); //Creates an array
    for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
    { 
        if(choices[i].checked) //if a choice is checked
        { 
            choice = choices[i].value; //Take the value of that choice and put it into choice
        }
    } 
    console.log("Chosen answer is " + choice);
    if(choice == questions[pos].correctAnswer)//If the value of choices is equal to the answer
    { 
        alert('Correct!');//Alert correct
        correct++;//Increment your correct answers by one
    }
    else//or else
    {
        alert('Sorry wrong answer. The correct answer is ' + questions[pos].correctAnswer);
    } 
    pos++; //Increment position by one ie go on to the next question
    
    renderQuestion(); //go to render question again
    
}
//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);
