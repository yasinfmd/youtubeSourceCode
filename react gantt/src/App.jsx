import { useState } from 'react'
import './App.scss'
import MyGantt from './MyGantt'

function App() {

  const [data]=useState(
    [{
      id: 'Task 1',
      name: 'Redesign website',
      start: '2023-09-10',
      end: '2023-09-15',
      progress: 20,
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'Task 2',
      name: 'Redesign website',
      start: '2023-10-03',
      end: '2023-10-18',
      progress: 50,
      dependencies: 'Task 1',
      custom_class: 'bar-milestone' // optional
    },
    {
      id: 'Task 3',
      name: 'Redesign website',
      start: '2023-12-28',
      end: '2023-12-31',
      progress: 80,
      custom_class: 'bar-milestone' // optional
    }],
  )

  return (
    <>

    <MyGantt tasks={data} />
    </>
  )
}

export default App
