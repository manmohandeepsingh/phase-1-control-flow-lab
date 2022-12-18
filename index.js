function scuberGreetingForFeet(feet){
  let reply;

  if(feet <= 400) {
    reply = 'This one is on me!';
  }
  else if (feet > 400 && feet <2000) {
    reply = 'That will be twenty bucks.';
  }
  else if (feet> 2000 && feet <2500) {
    reply = 'I will gladly take your thirty bucks.';
  }
  else if (feet > 2500) {
    reply = 'No can do.';
  }
  return reply;
}

function ternaryCheckCity(city){
  let reply; 
  if(city == "NYC") {
    reply = "Ok, sounds good.";
  }
  else if  (city != "NYC") {

    reply = "No go.";
  }
  return reply;
  }


function switchOnCharmFromTip(tip){
 let reply;
 switch(tip) {
  case 'generous':
    reply = "Thank you so much.";
    break;
  case 'not as generous':
    reply = "Thank you.";
    break;
  default:
    reply = 'Bye.'
    break;
 }
 return reply;
 }



