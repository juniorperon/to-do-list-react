import { useState } from 'react'

function App() {

    const [tasks, setTasks] = useState(['Tarefas a serem feitas'])
    const [inputValue, setInputValue] = useState('')
    
    function inputChange(event){
        setInputValue(event.target.value)
    }

    function buttonClick() {
        setTasks([... tasks, inputValue])
    }


    return (
        <div>
            <input placeholder="Digite a sua tarefa" onChange={inputChange} />
            <button onClick={buttonClick}>Adicionar Tarefa</button>

            <ul>
                {
                    tasks.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default App