import {motion,AnimatePresence,Reorder} from "framer-motion";
import {useEffect, useRef, useState} from "react";
const App = () => {
    const [selectedId, setSelectedId] = useState(null)
        const [mylist,setmylist]=useState([1,2,3,4,5,6])
    const items=[
        {
            id:1,
            subtitle:"Alt başlık 1",
            title:"Ana başlık"
        },
        {
            id:2,
            subtitle:"Alt başlık 2",
            title:"Ana başlık 2"
        }
    ]

    useEffect(()=>{
        if(ref.current){
            const handlePointer=({clientX,clientY})=>{
                const element=ref.current
                const x=clientX - element.offsetLeft - element.offsetWidth/2
                const y=clientY - element.offsetTop - element.offsetHeight/2
                setScale(Math.random()*10+1)
                    setCoord({x,y})
            }
            window.addEventListener('pointermove',handlePointer)

        }
    },[])
    const [scale,setScale]=useState(1)
    const [coord,setCoord]=useState({x:0,y:0})
    const ref=useRef()
  return (
      <>
          <motion.div ref={ref}
                      animate={{
                          x:coord.x,
                          scale:scale,
                          y:coord.y
                      }}
                      className='circleclass'>
          </motion.div>
          {mylist}
          <Reorder.Group onReorder={setmylist} values={mylist}>
              {mylist.map((item)=>{
                  return(
                      <Reorder.Item value={item} key={item}>
                          <span>{item}</span>
                      </Reorder.Item>
                  )
              })}
          </Reorder.Group>
          {items.map(item => (
              <motion.div key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                  <motion.h5>{item.subtitle}</motion.h5>
                  <motion.h2>{item.title}</motion.h2>
              </motion.div>
          ))}

          <AnimatePresence>
              {selectedId && (
                  <motion.div  layoutId={selectedId}>
                      <motion.h5>123123</motion.h5>
                      <motion.h2>rwewer</motion.h2>
                      <motion.button onClick={() => setSelectedId(null)} />
                  </motion.div>
              )}
          </AnimatePresence>
      <motion.div
          draggable
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 2 }}
          transition={{ duration: 0.5 }}
      >
          Merhaba
      </motion.div>
    <motion.div
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
    >
        Merhaba 2
    </motion.div>

          <motion.button
              animate={{
                  scale: [1, 2, 2, 1, 1],
              }}
              whileHover={{ scale: 1.1}}
              whileTap={{ scale: 0.9}}
          >
              Tıkla
          </motion.button>

          <motion.div
              onDrag={(e)=>{
                  console.log(e)
              }}
              drag
              dragConstraints={{
                  top: -500,
                  left: -500,
                  right: 50,
                  bottom: 50,
              }}
          >
              Draggable
          </motion.div>
      </>
  )
}
export default App
