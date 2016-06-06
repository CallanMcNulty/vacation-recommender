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

var sortStates = function(states, values) {
  var sortedStates = [];
  while(sortedStates.length < 50) {
    var max = -20;
    var max_index = 0;
    for(var i=0; i<states.length; i++) {
      if(values[i]>max) {
        max = values[i];
        max_index = i;
      }
    }
    sortedStates.push(states[max_index]);
    states.splice(max_index, 1);
    values.splice(max_index, 1);
  }
  return sortedStates;
}



$(document).ready(function() {
  var question_number = 1;
  $("#1").show();

  $("form").submit(function(event) {
    event.preventDefault();
    if(question_number > 11) {
      $('#result').hide();
      question_number = 1;
      AL=AK=AZ=AR=CA=CO=CT=DE=FL=GA=HI=ID=IL=IN=IA=KS=KY=LA=ME=MD=MA=MI=MN=MS=MO=MN=NE=NV=NH=NJ=NM=NY=NC=ND=OH=OK=OR=PA=RI=SC=SD=TN=TX=UT=VT=VA=WA=WV=WI=WY=0;
      $('#1').show();
      $(".btns").show();
      $("#finished-button").hide();
      $("h3").text("How important is it that your state have");
      $("#more-button").hide();
      $("ol").empty();
      return;
    }

    var answer = parseInt($("input:radio[name=options]:checked").val());

    if(question_number === 1) {
      WA+=answer; OR+=answer; CA+=answer; AK+=answer; HI+=answer; ME+=answer; NH+=answer; MA+=answer; RI+=answer; CT+=answer; NY+=answer; NJ+=answer; DE+=answer; MD+=answer; VA+=answer; NC+=answer; SC+=answer; GA+=answer; FL+=answer; AL+=answer; MS+=answer; LA+=answer; TX+=answer;
    } else if (question_number === 2) {
      CA+=answer; NV+=answer; AZ+=answer; NM+=answer; TX+=answer; LA+=answer; MS+=answer; AL+=answer; GA+=answer; SC+=answer; NC+=answer; FL+=answer+1*answer; HI+=answer+1*answer;
    } else if (question_number === 3) {
      AK+=answer; WA+=answer; OR+=answer; CA+=answer; NV+=answer; ID+=answer; MT+=answer; WY+=answer+1*answer; UT+=answer+1*answer; CO+=answer+1*answer; NM+=answer; NC+=answer;
      VA+=answer; WV+=answer; PA+=answer;
    } else if (question_number === 4) {
      CA+=answer+1*answer; FL+=answer+1*answer; HI+=answer+1*answer; TX+=answer; NY+=answer; NJ+=answer; SC+=answer; VA+=answer; MD+=answer; NC+=answer; GA+=answer;
    } else if (question_number === 5) {
      WA+=answer+1*answer; OR+=answer+1*answer; CA+=answer+1*answer; ID+=answer+1*answer; MT+=answer; WY+=answer; UT+=answer; CO+=answer+1*answer; AZ+=answer; NM+=answer; MN+=answer; WI+=answer+1*answer; MI+=answer+1*answer; LA+=answer; MS+=answer; AL+=answer; GA+=answer; FL+=answer; SC+=answer; NC+=answer; MO+=answer; AR+=answer; KY+=answer; WV+=answer; NH+=answer;
      VT+=answer;
    } else if (question_number === 6) {
      CA+=answer+1*answer; AZ+=answer+1*answer; TX+=answer; IL+=answer; PA+=answer; NY+=answer+1*answer; FL+=answer; IN+=answer; OH+=answer; NC+=answer; WA+=answer; CO+=answer; MI+=answer; MA+=answer; //Boston and bigger
    } else if (question_number === 7) {
      MT+=answer; WY+=answer+1*answer; ND+=answer; SD+=answer; IA+=answer+1*answer; OK+=answer; AR+=answer; MS+=answer; AL+=answer; KY+=answer; WV+=answer; VT+=answer; NH+=answer; ME+=answer; NE+=answer; KS+=answer; MO+=answer
    } else if (question_number === 8) {
      NC+=answer; TN+=answer; AZ+=answer; CO+=answer; CA+=answer; WY+=answer+1*answer; MT+=answer; UT+=answer; WA+=answer; ME+=answer;
    } else if (question_number === 9) {
      NY+=answer+1*answer; SD+=answer; MO+=answer; CA+=answer; AZ+=answer; PA+=answer; NV+=answer; WA+=answer;
    } else if (question_number === 10){
      VA+=answer+1*answer; NY+=answer; MA+=answer+1*answer; PA+=answer; IL+=answer; LA+=answer; SC+=answer; TX+=answer;

      $(".btns").hide();
      $("#finished-button").show();
      $("#finished-button").text("Submit Test");
      $("#result").show();
      $("h3").text("You have finished the test");
      $("#result").children("h2").text("Your recommended state is...");
      $("#result").children(".pic").hide();
    } else {

      var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa', 'Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts' ,'Michigan','Minnesota','Mississippi' ,'Missouri','Montana','Nebraska' ,'Nevada','New Hampshire','New Jersey','New Mexico','New York' ,'North Carolina','North Dakota','Ohio','Oklahoma','Oregon' ,'Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee' ,'Texas','Utah','Vermont','Virginia','Washington','West Virginia' ,'Wisconsin','Wyoming'];

      var state_values = [AL,AK,AZ,AR,CA,CO,CT,DE,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MN,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY];

      var sorted = sortStates(states, state_values);

      for (var i=0; i<50; i++) {
        var flag = "http://www.homemade-preschool.com/images/"+sorted[i].replace(" ","-")+"-State-Flag.png"
        $("ol").append("<li><p>"+sorted[i]+"</p><img src='"+flag+"' alt='flag'</li>");
      }

      var recommended_state = sorted[0];

      $("#result").children("h2").text(recommended_state);
      $("#result").children(".pic").children("img").attr("src", "http://www.homemade-preschool.com/images/"+recommended_state.replace(" ","-")+"-State-Flag.png");
      $("#result").children(".pic").show();
      $("#finished-button").text('Take the test again');
      $("#more-button").show();

      delete sorted;
    }

    question_number ++;
    $(".question").hide();
    $("#"+question_number.toString()).show();
  });
});
