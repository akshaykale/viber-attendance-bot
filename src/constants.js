

var con = module.exports = {};


//strings | keywords
//commands
con.HELP = "help";
//replys form keyword
con.OVERTIME = "overtime";
con.LATE = "late";
con.OFF = "off";
con.ARRIVED = "arrived";
//automated replys

con.ARRIVED_CONFIRMED = "";


//int
con.KEYBOARD_LATE = 0;
con.KEYBOARD_OVERTIME = 1;
con.KEYBOARD_OFF = 2;
con.KEYBOARD_REASON = 3;

con.OSPD_GROUPS = "3"; 


//Steps constants for "next"
con.STEP_EXPECTED_TIME = "expected_time_of_arrival";
con.STEP_REASON = "ask_for_reason";
con.STEP_ACTUAL_TIME = "actual_time_of_arrival";
con.STEP_THANKYOU = "thanks";

//constants for storing and retrieving data
