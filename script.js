let textbox = document.getElementById("textarea");
let ouputtext = document.getElementById("outputText");


function Uppercased() {
    let string = textbox.value;
    string = string.toUpperCase();
    console.log(string)
    ouputtext.innerText = string
}

function Lowercased() {
    let string = textbox.value;
    string = string.toLowerCase();
    console.log(string)
    ouputtext.innerText = string
}

function CapizedWords() {
    let string = textbox.value.split(" ");
    string = string.map((word) => word.charAt(0).toUpperCase() + word.slice(1) ).join(" ");
    console.log(string)
    ouputtext.innerText = string
}

function Extraspaces() {
    let string = textbox.value;
    string = string.trim();
    console.log(string)
    ouputtext.innerText = string
}

function Replaced() {
    let string = textbox.value;
    string = string.replace(prompt("Type the word you want to replace: "), prompt("Replace it with: "));
    console.log(string)
    ouputtext.innerText = string
}

function Charactercount() {
    let string = textbox.value.length;
    console.log(string)
    ouputtext.innerText = string
}