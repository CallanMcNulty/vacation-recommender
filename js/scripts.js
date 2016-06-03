var AL = 0;
var	AK = 0;
var	AZ = 0;
var	AR = 0;
var	CA = 0;
var	CO = 0;
var	CT = 0;
var	DE = 0;
var	FL = 0;
var	GA = 0;
var	HI = 0;
var	ID = 0;
var	IL = 0;
var	IN = 0;
var	IA = 0;
var	KS = 0;
var	KY = 0;
var	LA = 0;
var	ME = 0;
var	MD = 0;
var	MA = 0;
var	MI = 0;
var	MN = 0;
var	MS = 0;
var	MO = 0;
var	MT = 0;
var	NE = 0;
var	NV = 0;
var	NH = 0;
var	NJ = 0;
var	NM = 0;
var	NY = 0;
var	NC = 0;
var	ND = 0;
var	OH = 0;
var	OK = 0;
var	OR = 0;
var	PA = 0;
var	RI = 0;
var	SC = 0;
var	SD = 0;
var	TN = 0;
var	TX = 0;
var	UT = 0;
var	VT = 0;
var	VA = 0;
var	WA = 0;
var	WV = 0;
var	WI = 0;
var	WY = 0;

$(document).ready(function() {
  var question_number = 1;
  $("#1").show();

  $("form").submit(function(event) {
    event.preventDefault();
    var answer = parseInt($("input:radio[name=options]:checked").val());

    if(question_number === 1) {
      WA+=answer; OR+=answer; CA+=answer; AK+=answer; HI+=answer; ME+=answer; NH+=answer; MA+=answer; RI+=answer; CT+=answer; NY+=answer; NJ+=answer;
      DE+=answer; MD+=answer; VA+=answer; NC+=answer; SC+=answer; GA+=answer; FL+=answer; AL+=answer; MS+=answer; LA+=answer; TX+=answer;
    } else if (question_number === 2) {
      CA+=answer; NV+=answer; AZ+=answer; NM+=answer; TX+=answer; LA+=answer; MS+=answer; AL+=answer; GA+=answer; SC+=answer; NC+=answer; FL+=answer+1; HI+=answer+1;
    } else if (question_number === 3) {
      AK+=answer; WA+=answer; OR+=answer; CA+=answer; NV+=answer; ID+=answer; MT+=answer; WY+=answer+1; UT+=answer+1; CO+=answer+1; NM+=answer; NC+=answer;
      VA+=answer; WV+=answer; PA+=answer;
    } else if (question_number === 4) {
      CA+=answer+1; FL+=answer+1; HI+=answer+1; TX+=answer; NY+=answer; NJ+=answer; SC+=answer; VA+=answer; MD+=answer; NC+=answer; GA+=answer;
    } else if (question_number === 5) {
      WA+=answer+1; OR+=answer+1; CA+=answer+1; ID+=answer+1; MT+=answer; WY+=answer; UT+=answer; CO+=answer+1; AZ+=answer; NM+=answer; MN+=answer; WI+=answer+1;
      MI+=answer+1; LA+=answer; MS+=answer; AL+=answer; GA+=answer; FL+=answer; SC+=answer; NC+=answer, MO+=answer; AR+=answer; KY+=answer; WV+=answer; NH+=answer;
      VT+=answer;
    } else if (question_number === 6) {
      CA+=answer+1; AZ+=answer+1; TX+=answer; IL+=answer; PA+=answer; NY+=answer+1; FL+=answer; IN+=answer; OH+=answer; NC+=answer; WA+=answer;
      CO+=answer; MI+=answer; MA+=answer; //Boston and bigger
    } else if (question_number === 7) {
      MT+=answer; WY+=answer+1; ND+=answer; SD+=answer; IA+=answer+1; OK+=answer; AR+=answer; MS+=answer; AL+=answer; KY+=answer; WV+=answer;
      VT+=answer; NH+=answer; ME+=answer; NE+=answer; KS+=answer; MO+=answer
    } else if (question_number === 8) {
      NC+=answer; TN+=answer; AZ+=answer; CO+=answer; CA+=answer; WY+=answer+1; MT+=answer; UT+=answer; WA+=answer; ME+=answer;
    } else if (question_number === 9) {
      NY+=answer+1; SD+=answer; MO+=answer; CA+=answer; AZ+=answer; PA+=answer; NV+=answer; WA+=answer;
    } else if (question_number === 10){
      VA+=answer+1; NY+=answer; MA+=answer+1; PA+=answer; IL+=answer; LA+=answer; SC+=answer; TX+=answer;
    } else {

      var max_value = Math.max(AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MN,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY);

      var state_index = [AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MN,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY].indexOf(max_value);

      var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa', 'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts' ,'Michigan','Minnesota','Mississippi' ,'Missouri','Montana','Nebraska' ,'Nevada','New Hampshire','New Jersey','New Mexico','New York' ,'North','Carolina','North Dakota','Ohio','Oklahoma','Oregon' ,'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee' ,'Texas','Utah','Vermont','Virginia','Washington','West Virginia' ,'Wisconsin','Wyoming'];

      var recommended_state = states[state_index];

      alert(recommended_state);
    }

    question_number ++;
    $(".question").hide();
    $("#"+question_number.toString()).show();
  });
});
