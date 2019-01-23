let notes = document.querySelector(".list");
let text = document.querySelector(".edit-text");
let notesNumber = 0;

function deleteNote() {
    if (event.target.className != "notes-close") return;
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function addNote() {
    if (event.target.className != "edit-btn") return;
    notesNumber += 1;

    if (text.value == "") {
        text.style.backgroundColor = "lightgrey";
        text.placeholder = "Note can`t be empty";
        text.style.transition = "0.5s";
        return;
    }

    let newNote = document.createElement("div");
    let newP = document.createElement("p");
    let close = document.createElement("div");
    let done = document.createElement("div");
    let doneLabel = document.createElement("Label");
    let doneCustomCheckbox = document.createElement("img");
    let doneCheckbox = document.createElement("input");
    let newText = document.createTextNode(text.value);


    done.classList.add("notes-done");
    doneLabel.classList.add("notes-done_text");
    doneCustomCheckbox.classList.add("notes-done_customCheckbox");
    doneCheckbox.classList.add("notes-done_checkbox");
    close.classList.add("notes-close");
    newNote.classList.add("notes");
    newP.classList.add("notes-text");

    doneCheckbox.type = "checkbox";
    doneCheckbox.id = "done" + notesNumber;
    newNote.id = "note" + notesNumber;
    doneLabel.setAttribute("for", "done" + notesNumber);
    doneCustomCheckbox.src = "http://www.picshare.ru/uploads/181222/Pkr0tSj1W9.png";
    newNote.style.transition = "0.5s";

    doneLabel.appendChild(doneCustomCheckbox);
    done.appendChild(doneLabel);
    done.appendChild(doneCheckbox);
    newP.appendChild(newText);
    newNote.appendChild(newP);
    newNote.appendChild(close);
    newNote.appendChild(done);
    notes.appendChild(newNote);

    text.value = "";
}

function error() {
    if (event.target.className != "edit-text") return;
    text.style.backgroundColor = "white";
    text.placeholder = "Enter your note";
    text.style.transition = "0.5s";
}

function check() {
    //if (event.target.className.className != ".notes-done_checkbox") return;

    let checkbox = event.target.parentNode.querySelector(".notes-done_checkbox");
    let customCheckbox = event.target.parentNode.querySelector(".notes-done_customCheckbox");
    let note = checkbox.parentNode.parentNode;
    if (checkbox.checked == true) {
        customCheckbox.src = "http://www.picshare.ru/uploads/181222/69t34hy91T.png";
        note.classList.add("done");
    } else {
        customCheckbox.src = "http://www.picshare.ru/uploads/181222/Pkr0tSj1W9.png";
        note.classList.remove("done");
    }
}

function deleteCompleted() {
    if (event.target.className != "edit-delete_completed") return;
    let notesAll = document.querySelectorAll(".notes");
    for (let i = 0; i < notesAll.length; i++) {
        if (notesAll[i].classList.contains("done")) {
            notesAll[i].parentNode.removeChild(notesAll[i]);
        }
    }
}

function clear() {
    if (event.target.className != "edit-delete_all") return;
    let notesAll = document.querySelectorAll(".notes");
    for (let i = 0; i < notesAll.length; i++) {
        notesAll[i].parentNode.removeChild(notesAll[i]);
    }
}

document.addEventListener("click", deleteNote);
document.addEventListener("click", addNote);
document.addEventListener("click", error);
document.addEventListener("click", check);
document.addEventListener("click", deleteCompleted);
document.addEventListener("click", clear);
