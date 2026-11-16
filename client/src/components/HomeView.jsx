import { useState } from "react";

function HomeView() {
    const[pockets, setPockets] = useState([
        {id: 1, text: "Trip to the Bahamas"},
        {id: 2, text: "Networking Event in New York City"}
    ]);

    const [newNotes, setNewNotes] = useState("");

    const handleAddPocket = () => { //button clicking logic
        if (newNotes.trim == "") return; //prevent empty notes from being added

        const newPocket = {
            id: Date.now(), //unique timestamp id
            text: newNotes
        };
        setPockets([...pockets, newPocket]); //copies existing pockets + the new ones
        setNewNotes('')// reset the input box
    }

    return (
        <div>
            <h2>My Pockets</h2>

            <input //create an input box to add the new note
                type = "text"
                placeholder = "Add new note"
                value = {newNotes}
                onChange = {(e) => setNewNotes(e.target.value)}
            />
            <button onClick = {handleAddPocket}>Add Pocket</button>

            <ul>
                {pockets.map((pocket) => (
                    <li key = {pocket.id}>{pocket.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomeView;