/*
///////////////////////////////////////////////////////////////////////////////////////
      This Project (Binsoft) Was Made by Programmer Patrick Paul....
      And all codes are written under a carefull super-version of him..... 
      For Contacts email The Programmer (Patrick Paul) at :- patrickpaul367@gmail.com or
                                                             patrickshao367@gmail.com
                          THANK YOU FOR READING..... :)
////////////////////////////////////////////////////////////////////////////////////////
*/
var color_counter = 0;
var color_checker = [];
var color_picker;
var colorHex;

var emoji_counter;

var sound_array = [];
var sound_counter = 0;
var title_value = document.getElementById("sound").getAttribute("title");
var audio;

var colors = [
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "BlueViolet",
  "BurlyWood",
  "CadetBlue",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Crimson",
  "Cyan",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkMagenta",
  "DarkOrange",
  "DarkSalmon",
  "DarkSlateBlue",
  "DarkSlateGrey",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DodgerBlue",
  "FireBrick",
  "GoldenRod",
  "Honeydew",
  "HotPink",
  "IndianRed",
  "LightBlue",
  "Linen",
  "Maroon",
  "OrangeRed",
  "PaleGreen",
  "PaleVioletRed",
  "PeachPuff",
  "Peru",
  "Plum",
  "Purple",
  "RebeccaPurple",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "Sienna",
  "Silver",
  "SkyBlue",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Tomato",
  "Violet",
];
var coloursTwo = {
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  blueviolet: "#8a2be2",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkmagenta: "#8b008b",
  darkorange: "#ff8c00",
  darksalmon: "#e9967a",
  darkslateblue: "#483d8b",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  gold: "#ffd700",
  goldenrod: "#daa520",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  lightblue: "#add8e6",
  linen: "#faf0e6",
  maroon: "#800000",
  orangered: "#ff4500",
  palegreen: "#98fb98",
  palevioletred: "#d87093",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  plum: "#dda0dd",
  purple: "#800080",
  rebeccapurple: "#663399",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  tomato: "#ff6347",
  violet: "#ee82ee",
};

function mute() {
  if (title_value == "Sound On") {
    document.getElementById("volume").innerHTML =
      '<img src="icons\\vol2.png" alt="volume" title="Sound Off" id="sound" onclick="mute()"/>';
  } else {
    document.getElementById("volume").innerHTML =
      '<img src="icons\\vol1.png" alt="volume" title="Sound On" id="sound" onclick="mute()"/>';
  }
  title_value = document.getElementById("sound").getAttribute("title");
}
function colourNameToHex(colour) {
  if (typeof coloursTwo[colour.toLowerCase()] != "undefined") {
    colorHex = coloursTwo[colour.toLowerCase()];
  }
  return false;
}
function sound_reform() {
  if (sound_array.length == 24) {
    sound_array = [];
  }
  sound_counter = Math.floor(Math.random() * (24 - 1 + 1) + 1);
  sound_counter = sound_counter.toString();
  if (sound_array.includes(sound_counter)) {
    sound_reform();
  } else {
    sound_array.push(sound_counter);
    return 0;
  }
}
function checking_colorArray_for_repetation() {
  if (color_checker.length === colors.length) {
    color_checker = [];
  }
  color_counter = Math.floor(Math.random() * (colors.length - 1 + 1));
  if (color_checker.includes(color_counter)) {
    checking_colorArray_for_repetation();
  } else {
    color_checker.push(color_counter);
    return 0;
  }
}
function expandCircle(x, y) {
  // body...
  sound_reform();
  checking_colorArray_for_repetation();
  document.getElementById(x).style.background = colors[color_counter];
  document.getElementById(y).style.zIndex = "-1";

  //////////here/////////////////////////
  audio = document.getElementById(sound_counter);
  if (title_value == "Sound On") {
    audio.play();
  } else if (title_value == "Sound Off") {
    audio.pause();
  }

  document.getElementById("color_name").innerHTML = colors[color_counter];
  document.getElementById("color_name").style.color = colors[color_counter];

  //////////emoji picker //////////////////////
  emoji_counter = Math.floor(Math.random() * (80 - 12 + 1)) + 12;
  document.getElementById("emo").innerHTML = "&#1285" + emoji_counter;

  if (emoji_counter < 80) {
    emoji_counter = emoji_counter + 1;
  } else if (emoji_counter == 80) {
    emoji_counter = 12;
  }
  if (color_counter < colors.length - 1) {
    color_picker = color_counter;
    color_counter = color_counter + 1;
  } else if (color_counter == colors.length - 1) {
    color_picker = color_counter;
    color_counter = 0;
  }
}

function restoreCircle(x, y) {
  document.getElementById(y).style.zIndex = "1";
  document.getElementById(x).style.transition = "0.5s";
}

function backgroundChanger() {
  document.getElementById("body").style.backgroundColor = colors[color_picker];
  colourNameToHex(colors[color_picker]);
  document.getElementById("color_id").innerHTML = colorHex;
  document.getElementById("color_id").style.color = colorHex;
}

function CustomAlert() {
  this.render = function (dialog) {
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH + "px";
    dialogbox.style.left = winW / 2 - 550 * 0.5 + "px";
    dialogbox.style.top = "150px";
    dialogbox.style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      "About Binsoft! <span id='piko' style='float:right; cursor: pointer;' onclick='Alert.ok()'>x</span>";
    document.getElementById("dialogboxbody").innerHTML = dialog;

    document.getElementById("dialogboxfoot").innerHTML =
      '<span id="me">This app is made by <a href="https://www.instagram.com/patric_forreal" target="__blank" style=\'color:gold; text-decoration:none;\'><span>Patrick Paul!</span></span></a>';
  };
  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}
var Alert = new CustomAlert();
