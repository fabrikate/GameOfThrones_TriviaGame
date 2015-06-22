var userName, elementEvent;
//game of thrones trivia
var getUserName = function(userName) {
	var getInput = document.getElementById('userName');
	var userFirstName = getInput.value;

	var houseName = ['Stark','Lannister','Martel','Targaryen','Tully','Arryn','Baratheon','Tyrell'];
	var i = Math.floor(Math.random()* 8);
	console.log(houseName[i]);

	userName = userFirstName + ' ' + houseName[i];
	var welcomeMsg = ('Welcome '+userName+ '! Seven blessings to you on this challenge. You will need it.');
	var elWelcome = document.getElementById('welcomeMsg');
	elWelcome.textContent = welcomeMsg;
};

var findUserButton = document.getElementById('userNameButton');
findUserButton.addEventListener('click',getUserName,false);

// var questionOne = function(selection) {
// 	var findAnswerOne = document.getElementById('question1Select');
// 	var userAnswer1 = findAnswerOne.value;
// 	console.log(userAnswer1);

// 	var answerCheckLocation = document.getElementById('question1Answer');
// 	if(userAnswer1 === 'Stark'){
// 		var rightAns = ('Correct!');
// 		answerCheckLocation.textContent = rightAns;
// 	}else{
// 		var wrongAns = ('Wrong!!');
// 		answerCheckLocation.textContent = wrongAns;
// 	}
// };
// var findAnswerButton = document.getElementById('question1Button');
// findAnswerButton.addEventListener('click', questionOne, false);

// var questionTwo = function(selection) {
// 	var elQuestionTwo = document.getElementById("question2Select");
// 	var userAnswer2 = elQuestionTwo.value;
// 	console.log('userAnswer2');

// 	var elAnswer2 = document.getElementById('question2Answer');
// 	if(userAnswer2 === 'Cersei') {
// 		var rightAns2 = ('Correct!');
// 		elAnswer2.textContent = rightAns2;
// 	}else{
// 		var wrongAns2 = 'Wrong!!';
// 		elAnswer2.textContent = wrongAns2;
// 	}
// };
// var showQ2Ans = document.getElementById('question2Button');
// showQ2Ans.addEventListener('click', questionTwo, false);

var Questions = function(answer, elUserInput, elAnswer, elEvent){
	this.answer = answer; //what the correct answer is
	this.elUserInput = elUserInput; //question[i]Select
	this.elAnswer = elAnswer; //question[i]Answer
	this.elEvent = elEvent; //question[i]Button

	};

var triviaInfo = [];
triviaInfo.push(new Questions('Stark', 'question1Select', 'question1Answer', 'question1Button'));
triviaInfo.push(new Questions('Cersei', 'question2Select', 'question2Answer', 'question2Button'));
triviaInfo.push(new Questions('Rhaegar Targaryen', 'question3Select', 'question3Answer', 'question3Button'));

var runQuestions = function(){
	for(var i=0; i<triviaInfo.length; i++){
		var element = document.getElementById(triviaInfo[i].elUserInput);
		var userAnswer = element.value;

		var elCheckAnswer = document.getElementById(triviaInfo[i].elAnswer);
		if(userAnswer === triviaInfo[i].answer){
			var rightAnswerPrompt = ('Correct!');
			elCheckAnswer.textContent = rightAnswerPrompt;
		}else{
			var wrongAnswerPrompt = ('Wrong!!');
			elCheckAnswer.textContent = wrongAnswerPrompt;
		}
	}
};

var q1Listener = function() {
	runQuestions(1)
}
for(i=1; i<triviaInfo.length; i++){
	var elementEvent = document.getElementById(triviaInfo[i].elEvent);
	elementEvent.addEventListener('click', runQuestions, false);
}

