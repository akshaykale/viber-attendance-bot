"use strict";
//print("Hello");
const ViberBot = require("viber-bot").Bot;
const BotEvents = require("viber-bot").Events;
const TextMessage = require("viber-bot").Message.Text;



var request = require("request");

//dependancies 
var keyboards = require("./keyboards.js");
var constants = require("./constants.js");
var logger = require("./logger.js");


var track = {
    "id" : "",
    "name" : "",
    "next" : "",
    "data" : {
        "action" : "",
        "expected_time" : "",
        "reason" : "",
        "arrival_time" : "",
        "leave_early_time" : "",
        "overtime_untill" : ""
    }
};

/* Tracking data info: $track

    $track =
        {
            "option" : "late",              // *
            
            //for late
            "expected_time" : "",           // #  (HH:MM) 24-hour format
            "reason" "train_delay",         // #  (Bus/Train/Private/Official)

            //for arrived
            "arrival_time" : "",            // #  (HH:MM) 24-hour format
            
            //for overtime
            "extpected_time" : "",          // #  (HH:MM) 24-hour format

            //for off
            "off" : "",                     // #  (day/AM/PM)

        }

        * -> required
        # -> depends on option

 * > on every help message send null $track
 * > 
 */


function say(response, message, keyboard_type, tracking) {
    logger.log("keyboard type: "+keyboard_type);
    if(keyboard_type && tracking){
        logger.log("message: "+message+"    keyboard type: "+JSON.stringify(keyboards.get(keyboard_type)));
        response.send(new TextMessage(message,keyboards.get(keyboard_type)),tracking);
    }else{
        logger.log("message_else: "+message+"    keyboard type: "+keyboard_type);
        response.send(new TextMessage(message),tracking);
    }
        
}

function checkUrlAvailability(botResponse, urlToCheck) {
    if (urlToCheck === "") {
        say(botResponse, "I need a URL to check");
        return;
    }
    //say(botResponse,"check the keyboard ");
}

// Creating the bot with access token, name and avatar
const bot = new ViberBot( {
    authToken: process.env.AUTH, // Learn how to get your access token at developers.viber.com
    name: process.env.NAME,
    avatar: "https://raw.githubusercontent.com/devrelv/drop/master/151-icon.png" // Just a placeholder avatar to display the user
});

// The user will get those messages on first registrations
bot.onSubscribe(response => {
    say(response, "yoo yeah");
});

bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    // This sample bot can answer only text messages, let"s make sure the user is aware of that.
    if (!(message instanceof TextMessage)) {
        say(response, "Sorry. I can only understand text messages.");
    }
    logger.log(message.text);
    //response.userProfile.name
    var errText = "Didn't get that\nTry from this menu or type 'help' for all options";
    var trackRec = message.trackingData;
    logger.log("tracker::::"+JSON.stringify(trackRec));

    switch (trackRec.next) {
        case constants.STEP_EXPECTED_TIME:
            logger.log("step expected:  "+JSON.stringify(trackRec));
            //trackRec.data.expected_time = message.text;
            trackRec.data = {
                expected_time : message.text
            };
            trackRec.next = constants.STEP_REASON;
            say(response, "Reason for the delay: ",constants.KEYBOARD_REASON,trackRec);
            return;
        case constants.STEP_REASON:
            logger.log("step reason:  "+JSON.stringify(trackRec));
            //trackRec.data.reason = message.text;
            trackRec.data = {
                reason : message.text
            };
            trackRec.next = constants.STEP_ACTUAL_TIME;
            //save
            say(response, "Send the actual time when you will reach office: (HH:MM) 24-hour format",null,trackRec);
            return;
        case constants.STEP_ACTUAL_TIME:
            logger.log("step actual:  "+JSON.stringify(trackRec));
            //trackRec.data.arrival_time = message.text;
            trackRec.data = {
                arrival_time : message.text
            };
            trackRec.next = constants.STEP_THANKYOU;
            
            //save
            say(response, "Thank you! \nData recorded.",null,track);
            return;
        case constants.STEP_THANKYOU:  
            errText = ""      
            //leave it open
    }

    switch(message.text.toLowerCase()){
        case constants.HELP:
            say(response, "please select from the choices:",constants.HELP,track);
            break;
        case constants.LATE:
            trackRec.id = response.userProfile.id;
            trackRec.name = response.userProfile.name;
            trackRec.data = {
                action : constants.LATE
            };
            trackRec.next = constants.STEP_EXPECTED_TIME;
            logger.log("after late:::"+JSON.stringify(trackRec));
            say(response, "Expected time of arrival: (HH:MM) 24-hour format",constants.LATE,trackRec);
            break;
        case constants.ARRIVED:
            say(response, "Arrived at what time:(HH:MM) 24hour format");
            break;
        case constants.OVERTIME:
            say(response, "Until when:(HH:MM) 24 hour format");
            break;
        case constants.OFF:
            say(response, "AM/PM or Full day of?:",constants.OFF);
            break;
        default:
            say(response, errText, constants.HELP);
            break;
    }


    

        
});

bot.onTextMessage(/./, (message, response) => {
    checkUrlAvailability(response, message.text);
});

if ( process.env.HEROKU_URL) {
    const http = require("http");
    const port = process.env.PORT || 8080;

    http.createServer(bot.middleware()).listen(port, () => bot.setWebhook( process.env.HEROKU_URL));
} else {
    logger.log("Could not find the now.sh/Heroku environment variables. Please make sure you followed readme guide.");
 }