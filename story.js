/* Uses Case Statements */

// variables
// var name = "";
var scene1=town;

function checkAnswers(answer) {
  switch(answer) {
    case "get up":
      getUp();
      break;
    case "sleep more":
      sleepMore();
      break;
    case "ignore it and go home":
      homeEarly();
      break;
    case "brush teeth":
      brushTeeth();
      break;
    case "don't brush":
      dontBrush();
      break;
    case "get dressed":
      getDressed();
      break;
    case "shower":
      shower();
      break;
    case "old shoes":
      oldShoes();
      break;
    case "keep looking":
      keepLooking();
      break;
    case "pack lunch":
      packLunch();
      break;
    case "starve":
      starve();
      break;
    case "take phone":
      takePhone();
      break;
    case "leave phone":
      leavePhone();
      break;
    case "car keys":
      keys();
      break;
    case "bus":
      bus();
      break;
    }
}

function town(){
  addImage("alarm.png");
  // var name = prompt("what is your name?");
  story("you are lying in bed the soft feeling of the sheets comforts you , you wake up and turn to look at your clock.\
  \n\"the clock reads 8:30 work begins at 9:00 you are going to be late for your first day of work\"\
  \nyou need to prepare and lave quickly if you want to make it");
  choices = ["get up", "sleep more"];
  answer = setOptions(choices);
}

// Places
function getUp() {
  story("without hesitation you spring up from bed and scramble over to your closet.  \
  \nbut you relise that you didn't brush your teeth. \
  \nWhat do you want to do?");
  choices = ["brush teeth", "don't brush"];
  answer = setOptions(choices);
}

/*function () {
    story("You enter the forest and soon become hopefully lost.\
    \nWhile you can't find your way out you do see a few places of interest.");
    forest();
}*/

function sleepMore() {
  story("you feel like you want to just get a few more minutes of sleep.\
  \nhow ever you shake that feeling off imediantly you can not go back to sleep.\
  \nyou relise that you should probably brush your teeth.");
  choices = ["brush teeth", "don't brush"];
  answer = setOptions(choices);
}

function brushTeeth() {
  addImage("brush.png");
  story("you rush into the bathroom snatching the tooth brush and paste off the sink.  \
  \nputting the brush in you begin brush eratically trying to be quick as possible once you finish you go to get dressed but a. \
  \n foul sent lingers in air and you notice it is coming from you you didn't shower last night what do you do? ");
  choices = ["get dressed", "shower"];
  answer = setOptions(choices);
}

function dontBrush() {
  story("you decide that not brushing your teeth is no big deal.  \
  \nyou will just take a brath mint on the way there.. \
  \nwhile going to get dressed you relise you didn't shower  ");
  choices = ["get dressed", "shower"];
  answer = setOptions(choices);
}

function getDressed() {
  addImage("clothes.png");
  story("I don't have time to shower you think to your self.  \
  \nmabye no one will notice the smell after you out on your clothes you begin looking for your shoes. \
  \nhowever all you find is a old worn pair they must be somewhere you think what do you do?");
  choices = ["old shoes", "keep looking"];
  answer = setOptions(choices);
}

function shower() {
  addImage("shower.png");
  story("you quickly hop into the shower you can feel as the water rushes down your face from the shower head.  \
  \nafter the shower you go look for your shoes bot only find an old worn pair. \
  \nI can't wear these you think but should I continue to search");
  choices = ["old shoes", "keep looking"];
  answer = setOptions(choices);
}

function oldShoes() {
  addImage("shoes.png");
  story("I must work wit what I have you say as you squeeze your foot into the old worn shoes.  \
  \nas you force your foot into the shoes you get a tigt feeling as your feet are cramed into the shoes. \
  \nnow time to search for your phone as you awkradly walk you stumble into the kitchen in search of your phone when you notice yout unpacked lunch bag");
  choices = ["pack lunch", "starve"];
  answer = setOptions(choices);
}

function keepLooking() {
  addImage("shoe.png");
  story("these shoes won't work you think to your self so you begin looking for your good shoes.  \
  \nyou cheack every coner and crevas untill you find your good pair of shoes you put them on nicley as your feet have lots of room. \
  \nafter putting on the shoes you remember that you didn't pack your lunch yet but should you even bother?");
  choices = ["pack lunch", "starve"];
  answer = setOptions(choices);
}

function packLunch() {
  addImage("packed.png");
  story("you grabe different items and put them into your lunch bag.  \
  \n after putting the last item in the lunch bag you notice your phone sitting right next to the lunch bag\
  \nyou pick up your phone and try to turn it on, nothing happens you forgot to charge your phone again");
  choices = ["take phone", "leave phone"];
  answer = setOptions(choices);
}

function starve() {
  addImage("starve.png");
  story("you decide that you won't need the lunch.  \
  \nwhile pushing the bag aside you find your phone next to it you try to turn it on but. \
  \nit doesn't light up your phone is dead what should you do?");
  choices = ["take phone", "leave phone"];
  answer = setOptions(choices);
}

function takePhone() {
  story("you grab your phone and charger off the counter there may be a spot to charge it at you think.  \
  \nyou rush outside towards your car, as you get to your car you reach into your pocket for the keys but nothing is there. \
  \nyou relise that you left your car keys inside of the house but then you remember that there is a bus stop near by what should you do?");
  choices = ["car keys", "bus"];
  answer = setOptions(choices);
}

function leavePhone() {
  story("I won't need it anyway you say to your self as you leave your phone on the counter.  \
  \nyou hastkey run out the house and to your car you go to reach for your keys but you feel nothing. \
  \nI must have forgoten the keys inside the house you consider going in to search for them but you remeber there is a bus stop close by");
  choices = ["car keys", "bus"];
  answer = setOptions(choices);
}

function keys() {
  addImage("key.png");
  story("you run back inside to look for your car keys you check every room of the house and find them.  \
  \nin the living room you run back to your car unlock it and climb inside you press down on the peaddale and speed off to work running. \
  \n red lights and bobing between cars you make it to work and park your car you cheack the time it's 8:58 congradulations you made it to work on time");
  choices = ["", ""];
  answer = setOptions(choices);
}

function bus() {
  addImage("bus.png");
  story("you decide to go to the bus stop you begin sprinting over to the bus stop hopeing that the wait won't be long.  \
  \nthanfuly the bus is already there picking up people you climb aboard and take a seat the bus stops at a stop near your job. \
  \n and you hop off and run to the front door you check the time it is 9:02 congradulations you made it all be it 2 minutes late mabye now you'll be more prepared from now on");
  choices = ["", ""];
  answer = setOptions(choices);
}


function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}
