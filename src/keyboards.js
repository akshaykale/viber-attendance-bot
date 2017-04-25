

//requires
var constants = require("./constants.js");
var logger = require("./logger.js");

//export
var exports = module.exports = {};

exports.get =  function(keyboard){
    logger.log("get: "+keyboard);
    switch(keyboard){
        case constants.LATE:
            return keyboard_late;
        case constants.OFF:
            return keyboard_off;
        case constants.OVERTIME:
        
        case constants.OSPD_GROUPS:
        
        case constants.HELP:
            return keyboard_help;
        case constants.KEYBOARD_REASON:
            return keyboard_reason;
        default:
        break;
    }

}


var keyboard = {    
        "Type": "keyboard",
        "DefaultHeight": true,
        "BgColor": "#FFFFFF",
        "Buttons": [{
            "Columns": 6,
            "Rows": 1,
            "BgColor": "#2db9b9",
            "BgMediaType": "gif",
            "BgMedia": "http://www.url.by/test.gif",
            "BgLoop": true,
            "ActionType": "open-url",
            "ActionBody": "www.tut.by",
            "Image": "www.tut.by/img.jpg",
            "Text": "Key text",
            "TextVAlign": "middle",
            "TextHAlign": "center",
            "TextOpacity": 60,
            "TextSize": "regular"
        }]
};

var keyboard_late = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for 2 min</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "2 min",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for 5 min</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "5 min",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for 10 min</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "10 min",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for 15 min</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "15 min",
        "BgColor": "#dd8157",
        "Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for 30 min</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "30 min",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/wq06j3jkl/indi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Enter how many</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "More",
        "BgColor": "#a8aaba",
        "Image": "https://s18.postimg.org/ylmyu98et/more_Options.png"
    }]
};


var keyboard_help = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Late for work</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "late",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Arrival time</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "arrived",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>AM/PM/Day off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "off",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Overtime</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "overtime",
        "BgColor": "#dd8157",
        "Image": "https://s18.postimg.org/x41iip3o5/itallian.png"
    }]
};

var keyboard_reason = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Train delay</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "train delay",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Bus delay</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "bus delay",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Private/Other</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "private reason",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }]
};

var keyboard_off = {
    "Type": "keyboard",
    "Buttons": [{
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>AM Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "am_off",
        "BgColor": "#f7bb3f",
        "Image": "https://s18.postimg.org/9tncn0r85/sushi.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>PM Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "pm_off",
        "BgColor": "#7eceea",
        "Image": "https://s18.postimg.org/ntpef5syd/french.png"
    }, {
        "Columns": 2,
        "Rows": 2,
        "Text": "<br><font color=\"#494E67\"><b>Day Off</b></font>",
        "TextSize": "large",
        "TextHAlign": "center",
        "TextVAlign": "middle",
        "ActionType": "reply",
        "ActionBody": "day_off",
        "BgColor": "#f6f7f9",
        "Image": "https://s18.postimg.org/t8y4g4kid/mexican.png"
    }]
};