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
triviaInfo.push(new Questions('Joffery Baratheon', 'question4Select', 'question4Answer', 'question4Button'));
triviaInfo.push(new Questions('Drogon', 'question5Select', 'question5Answer', 'question5Button'));
triviaInfo.push(new Questions('Braavos', 'question6Select', 'question6Answer', 'question6Button'));
triviaInfo.push(new Questions("Rickard and Brandon Stark's execution", 'question7Select', 'question7Answer', 'question7Button'))

var runQuestions = function(num){
	var i = num;
	// for(var i=0; i<triviaInfo.length; i++){
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
};

var firstQuestion = function(){
	runQuestions(0);
};
var secondQuestion = function(){
	runQuestions(1);
};
var thirdQuestion = function(){
	runQuestions(2);
};
var fourthQuestion = function(){
	runQuestions(3);
};
var fifthQuestion = function(){
	runQuestions(4);
};
var sixthQuestion = function(){
	runQuestions(5);
};
var seventhQuestion = function(){
	runQuestions(6);
};
