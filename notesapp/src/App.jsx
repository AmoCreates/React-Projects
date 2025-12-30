import { useState } from "react"

const App = () => {

  const [Title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [task, setTask] = useState([])

  const submitHandler= (e) => {
    if(Title=="" || note=="") {
        alert("No content to add");
        return;
        
    }
    e.preventDefault();

    const addNote = [...task];
    addNote.push({Title, note});
    setTask(addNote);
    console.log(addNote);

    setTitle("");
    setNote("");
    alert("Notes Added Successfully");
  }

  const deleteNote = (idx) => {
        const delTask = [...task];
        delTask.splice(idx, 1);
        setTask(delTask);
    }

  return (
    
    <div id='notesapp'>
      <header>
        <h1>Notes App</h1>
      </header>

      <main>
        <div id='left'>
          <h1>
            Make Your Moments <br/>Forever
          </h1>

          <input type='text' placeholder="Enter Title" value = {Title} onChange={(e)=> {
            setTitle(e.target.value);
          }}/>

          <textarea placeholder="Enter description here" value = {note} onChange={(e) => {
            setNote(e.target.value);
          }}/>

          <button onClick={(e) => {
            submitHandler(e);
          }}>Add Notes</button>
        </div>

        <div id='right'>
          
             {task.map((elem, idx)=> {
                return <div className='notes'>
                          <context><h2>{elem.Title}</h2></context>
                          <description>
                              <p>{elem.note}</p>
                          </description>
                          <button onClick={() => {
                              deleteNote(idx);
                          }}>Delete Note</button>
                      </div> 
             })}
          
        </div>
      </main>


    </div>
  )
}

export default App

