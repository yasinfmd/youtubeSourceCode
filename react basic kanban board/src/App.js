import './App.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import React, { useState } from "react"
const mockData = {
  todo: {
    name: "Todo",
    items: [{
      id: 1000,
      text: "Görev 5656"
    }, {
      id: 2000,
      text: "Görev 5959"
    }]
  },
  inprogress: {
    name: "Inprogress",
    items: [{
      id: 100,
      text: "Görev 1099"
    }]
  },
  inreview: {
    name: "InReview",
    items: [{
      id: 10000,
      text: "Görev 2002"
    }]
  },
  intest: {
    name: "InTest",
    items: [{
      id: 100002,
      text: "Görev 5588"
    }]
  },
  done: {
    name: "Done",
    items: [{
      id: 10000232,
      text: "Görev 9889"
    }]
  }
}
function App() {
  const [cols, setCols] = useState(mockData)
  const onDragEnd = (result, cols, setCols) => {
    if (!result.destination) return
    const { source, destination } = result

    if (source.droppableId !== destination.droppableId) {
      const sourceCol = cols[source.droppableId]
      const destCol = cols[destination.droppableId]
      const sourceItems = [...sourceCol.items]
      const destItems = [...destCol.items]
      const [removed] = sourceItems.splice(source.index, 1)
      destItems.splice(destination.index, 0, removed)
      setCols({
        ...cols,
        [source.droppableId]: {
          ...sourceCol,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destCol,
          items: destItems
        }
      })


    } else {
      const columns = cols[source.droppableId]
      const _items = [...columns.items]
      const [removed] = _items.splice(source.index, 1)
      _items.splice(destination.index, 0, removed)
      setCols({
        ...cols,
        [source.droppableId]: {
          ...columns,
          items: _items
        }
      })
    }
  }
  return (
    <div className="app-container">
      <DragDropContext onDragEnd={(result) => {
        onDragEnd(result, cols, setCols)
      }}>

        {Object.entries(cols).map(([id, col], index) => {
          return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} key={index}>
              <h5>{col.name}</h5>
              <div style={{ marginLeft: "8px" }}>
                <Droppable droppableId={id} key={id}>
                  {(provider, snapshot) => {
                    return (
                      <div {...provider.droppableProps}
                        style={{
                          border: "2px dashed black",
                          backgroundColor: snapshot.isDraggingOver ? "#e7e7e7" : "#fff",
                          padding: "8px", height: "800px", width: "300px"
                        }}
                        ref={provider.innerRef}>
                        {col.items.map((item, index) => {
                          return (
                            <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
                              {(provider, snapshot) => {
                                return (
                                  <div ref={provider.innerRef}
                                    {...provider.dragHandleProps}
                                    {...provider.draggableProps}
                                    style={{
                                      padding: "16px",
                                      margin: "0 0 16px 0",
                                      height: "40px",
                                      borderRadius: "8px",
                                      backgroundColor: snapshot.isDragging ? "#cccccc" : "#e7e7e7",
                                      ...provider.draggableProps.style
                                    }}
                                  >
                                    {item.text}

                                  </div>
                                )
                              }}

                            </Draggable>
                          )
                        })}
                        {provider.placeholder}
                      </div>
                    )
                  }}
                </Droppable>
              </div>
            </div>
          )
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
