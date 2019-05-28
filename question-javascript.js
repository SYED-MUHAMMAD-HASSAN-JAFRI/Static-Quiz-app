var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "What JavaScript is also called client-side JavaScript?", " Microsoft", " Navigator", "Native", "B" ],
	[ "What JavaScript is also called server-side JavaScript.?", "Microsoft", "Navigator", " LiveWire", "C" ],
	[ "What are variables used for in JavaScript Programs?", " Storing numbers, dates, or other values", " Varying randomly", " None of the above", "A" ],
    [ "JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation are.?", "Client-side", "Server-side", "Native", "A" ],
    [ "Which of the following can't be done with client-side JavaScript?"," Validating a form"," Sending a form's contents by email","Storing the form's contents to a database file on the server","C"],
    [ "Which of the following are capabilities of functions in JavaScript?", " Return a value", "Accept parameters and Return a value", "Accept parameters", "C" ],
    [ "Which of the following is not a valid JavaScript variable name?", " 2names", " _first_and_last_name", " FirstAndLast", "A" ],
    [ " How does JavaScript store dates in a date object?", "The number of milliseconds since January 1st, 1970 ", "The number of days since January 1st, 1900", "None of the above", "A" ],
    [ " What is the correct JavaScript syntax to write 'Hello World'?", " System.out.println('Hello World') ", "println ('Hello World')", " document.write('Hello World')", "C" ],
    [ " When a user views a page containing a JavaScript program, which machine actually executes the script?", "  The User's machine running a Web browser ", " The Web server", "A central machine deep within Netscape's corporate offices", "A" ],
    [ " Which types of image maps can be used with JavaScript?", " Server-side image maps", "Client-side image maps", "Server-side image maps and Client-side image maps", "B" ],
    [ " Which of the following navigator object properties is the same in both   Netscape and IE?", "  navigator.appCodeName ", "navigator.appName", "navigator.appVersion", "A" ],
    [ " What does the <noscript> tag do??", "  Describes certain low-budget movies.", " Enclose text to be displayed by non-JavaScript browsers.", " Prevents scripts on the page from executing.", "B" ],
    [ "  If para1 is the DOM object for a paragraph, what is the correct syntax to change the text within the paragraph?", " 'New Text'? ", "para1.value='New Text';", "para1.firstChild.nodeValue= 'New Text';", "B" ],
    [ " Why so JavaScript and Java have similar name?", " JavaScript is a stripped-down version of Java ", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "B" ],
    [ " Which of the following best describes JavaScript?", "   a low-level programming language ", " a compiled scripting language.", "an object-oriented scripting language.", "B" ],
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h3  class='display-4'> Congtulation You are Pass and got "+correct+" of "+questions.length+" questions correct</h3>";
		_("test_status").innerHTML = "   Test Completed  ";
		pos = 0;
		correct = 0;
		return false;
	}
	_("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	chC = questions[pos][3];
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	test.innerHTML += "<button onclick='checkAnswer()'  class='btn btn-success'>Submit Answer</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][4]){
		correct++;
	}
	pos++;
	renderQuestion();
}
window.addEventListener("load", renderQuestion, false);