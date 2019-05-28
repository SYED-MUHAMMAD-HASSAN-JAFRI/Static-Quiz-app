var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
    [ "Which of the following microorganism is less virulent?", "Staphylococcus epidermidis", "Staphylococcus aureus", "Clostridium perfringes", "A" ],
	[ "Staphylococcus aureus produces toxin respoonsible for causing toxic shock syndrome is?", "Enterotoxin", "TSST1", "Erythrogenic toxin", "B" ],
	[ "The arrangement of staphylococcus aureus is?", "Comma shape", "Grape like cluster", "Chain formation", "B" ],
    [ "Staphylococcu aureus causes skin infection known as?", "Osteomyelitis", "Carbuncle and furuncle", "Otitis media", "B" ],
    ["Staphylococcus aureus produces pigment known as?","Pyocyanin","Pyoverdin","Staphyloxanthine","C"],
    [ "Which of the follwing test is useful to differentiate Staphylococcus epidermidis from streptococcus viridans?", "Catalase test", "Coagulase test", "Novobiocin sensitivity test", "A" ],
	[ "which one of the following  infection is not caused by Staphylococcus. aureus?", "Tetanus", "Scalded skin syndrome", "Scalded skin syndrome", "A" ],
    [ "Gram positive cocci which causes urinary tract infection is?", "Streptococcus pyogene", "Staphylococcus. aureus", "Staphylococcus saprophyticus", "C" ],
    [ "Alpha hemolytic colony  is produced by which of the following organism?","Streptococcus pyogenes","Streptococcus viridans","Streptococcus aglactiae","B"],
    [ "Streptococcus pyogenes produces which type of toxin which resposible for causing scarlet fever?", "Streptolysin", "Streptolysin", "Erythrogenic toxin", "C" ],
	[ "The most common causative agent causing sour throat?", "Streptococcus pyogenes", "Clostridium. tetani", "Clostridium. tetani", "A" ],
    [ "The two most common complication (Post streptococcal disease)of streptococci are?", "Glomerulonephritis, Rheumatic fever", "Conjuctivitis, otitis media", "Meningitis, osteomyelitis", "A" ],
    ["Streptokinase produce by which one of the following organism?","Staphylococcus","Staphylococcus","Catalase","B"],
    [ "Bactracin sensitivity test is the diagnotic method for the detection of?", "detection of", "Streptococcus. pyogenes", "Clostridium. Perfringes", "B" ],
	[ "The diagnotic method for the detection of Streptococcus agalactiae is?", "CAMP test", "Bacitricin sensitivity test", "Litmus milk reduction test", "A" ],
    [ "aborttion caused by which one of the following causative agent?", "Haemophilus. Influenzae", "Corynebacterium. diphtheria", "Streptococcus agalactiae", "C" ],
    ["The morphology of Neisseria species are?","Intra cellular diplococi ","Cocci in cluster","Extracellular cocci in pairs","A"]
    
    
];




function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
	test = _("test");
	if(pos >= questions.length){
		test.innerHTML = "<h2  class='display-4'>You got "+correct+" of "+questions.length+" questions correct</h2>";
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