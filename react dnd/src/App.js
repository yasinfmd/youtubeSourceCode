import { useEffect, useState } from 'react';
import './App.css';

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

function App() {
  const [character, setCharacter] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character",
      {
        method: "GET"
      })
    const { results } = await response.json()

    setCharacter(results.map(({ id, name, image }) => {
      return {
        id,
        name,
        image

      }
    }))
    console.log("res", results)
  }
  useEffect(() => {
    fetchData()
  }, [])
  const handleDragEnd = (result) => {
    if (!result.destination) return
    const items = [...character]
    const [removedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, removedItem)
    setCharacter(items)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h3>Draggable List</h3>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId='myCustomList'>
            {(provider) => (
              <ul {...provider.droppableProps} ref={provider.innerRef}>
                {character.map(({ name, id, image }, index) => {
                  return (
                    <Draggable key={id} draggableId={id.toString()} index={index}>
                      {
                        (provider) => (
                          <li ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps} >
                            <div className='thumb'>
                              <img src={image} alt={name} />
                            </div>
                            <p className='name'>{name}</p>
                          </li>
                        )
                      }

                    </Draggable>

                  )
                })}
                {provider.placeholder}
              </ul>
            )}

          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
