// Array to hold notes
let notes = [];

// Function to add a note
function addNote(noteText) {
    notes.push(noteText);
    displayNotes();
}

// Function to delete a note
function deleteNote(index) {
    notes.splice(index, 1);
    displayNotes();
}

// Function to display notes
function displayNotes() {
    const noteList = document.getElementById('note-list');
    noteList.innerHTML = '';

    // Loop through the notes array and create list items for each note
    notes.forEach((note, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = note;

        // Create a delete button for each note
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            deleteNote(index);
        });

        listItem.appendChild(deleteButton);
        noteList.appendChild(listItem);
    });
}

// Event listener for the form submission
document.getElementById('note-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const noteInput = document.getElementById('note-input');
    const noteText = noteInput.value.trim();

    if (noteText !== '') {
        addNote(noteText);
        noteInput.value = '';
    }
});
