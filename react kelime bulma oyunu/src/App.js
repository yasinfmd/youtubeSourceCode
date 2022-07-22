
import './App.css'
import {useEffect, useState} from "react";
let luckyNumber=null
const App=()=>{
    const [letterArr, setLetterArr] = useState([
        {
            "letter": "Q",
            "isPressed": false
        },
        {
            "letter": "W",
            "isPressed": false
        },
        {
            "letter": "E",
            "isPressed": false
        },
        {
            "letter": "R",
            "isPressed": false
        },
        {
            "letter": "T",
            "isPressed": false
        },
        {
            "letter": "Y",
            "isPressed": false
        },
        {
            "letter": "U",
            "isPressed": false
        },
        {
            "letter": "I",
            "isPressed": false
        },
        {
            "letter": "O",
            "isPressed": false
        },
        {
            "letter": "P",
            "isPressed": false
        },
        {
            "letter": "Ğ",
            "isPressed": false
        },
        {
            "letter": "Ü",
            "isPressed": false
        },
        {
            "letter": "A",
            "isPressed": false
        },
        {
            "letter": "S",
            "isPressed": false
        },
        {
            "letter": "D",
            "isPressed": false
        },
        {
            "letter": "F",
            "isPressed": false
        },
        {
            "letter": "G",
            "isPressed": false
        },
        {
            "letter": "H",
            "isPressed": false
        },
        {
            "letter": "J",
            "isPressed": false
        },
        {
            "letter": "K",
            "isPressed": false
        },
        {
            "letter": "L",
            "isPressed": false
        },
        {
            "letter": "Ş",
            "isPressed": false
        },
        {
            "letter": "İ",
            "isPressed": false
        },
        {
            "letter": "Z",
            "isPressed": false
        },
        {
            "letter": "X",
            "isPressed": false
        },
        {
            "letter": "C",
            "isPressed": false
        },
        {
            "letter": "V",
            "isPressed": false
        },
        {
            "letter": "B",
            "isPressed": false
        },
        {
            "letter": "N",
            "isPressed": false
        },
        {
            "letter": "M",
            "isPressed": false
        },
        {
            "letter": "Ö",
            "isPressed": false
        },
        {
            "letter": "Ç",
            "isPressed": false
        }
    ])
    const [remainigPoint,setRemainingPoint]=useState(5)
    const [totalPoint,setTotalPoint]=useState(0)
    const wordsArr=['ankara','dünya','uçak','kitap','merhabadünya']
    const [pressedItem,setPressedItem]=useState()
    const [selectedNumber,setSelectedNumber]=useState([])
    const [gameFinish,setGameFinish]=useState(false)
    const [selectedWord,setSelectedWord]=useState([])
    const startGame=()=>{
        const numbers=[...selectedNumber]
        const randomNumber=Math.floor(Math.random()*wordsArr.length)
        const wordItem=wordsArr[randomNumber].split('').map((item)=>{
            return {
                visible:false,
                letter:item
            }
        })
        numbers.push(randomNumber)
        setSelectedNumber(numbers)
        setSelectedWord(wordItem)
    }
    useEffect(()=>{
       startGame()
    },[])

    useEffect(()=>{
        if(remainigPoint===0){
            setGameFinish(true)
        }
    },[remainigPoint])

    const getRandomNumber=()=>{
        const randomNumber=Math.floor(Math.random()*wordsArr.length)
        if(selectedNumber.length!==wordsArr.length){
            if(selectedNumber.includes(randomNumber)){
                getRandomNumber()
            }else{
                luckyNumber=randomNumber
            }
        }else{
            luckyNumber=-1
        }
    }


    const restartGame=()=>{
        const letterArray=[...letterArr]
        setGameFinish(false)
        setRemainingPoint(5)
        setTotalPoint(0)
        setSelectedNumber([])
        setSelectedWord([])
        setPressedItem()
        setLetterArr(letterArray.map((item)=>{
            return{
                ...item,
                isPressed:false
            }
        }))
    }

    useEffect(()=>{
        if(pressedItem){
            let rpoint=remainigPoint
            let tpoint=totalPoint
            const selectedWordArr=[...selectedWord]
            const arr=[...letterArr]
            const index=arr.findIndex((item)=>item.letter.toUpperCase()===pressedItem.toUpperCase())
            if(index>-1){
                if(!arr[index].isPressed){
                    arr[index].isPressed=true
                    setLetterArr([...arr])
                    const findedItem=selectedWordArr.find((item)=>item.letter.toUpperCase()===pressedItem.toUpperCase())
                    if(findedItem && remainigPoint>0){
                        selectedWordArr.forEach((item)=>{
                            if(item.letter.toUpperCase() === pressedItem.toUpperCase()){
                                item.visible=true
                                tpoint+=5
                            }
                        })
                    }else{
                        rpoint-=1
                    }
                    setTotalPoint(tpoint)
                    setRemainingPoint(rpoint<0?0:rpoint)
                    setSelectedWord(selectedWordArr)
                    const allCorrect=selectedWordArr.filter((item)=>item.visible)
                    if(allCorrect.length===selectedWordArr.length && rpoint>0){
                        const letterArray=[...letterArr]
                        const numbers=[...selectedNumber]
                        getRandomNumber()
                        if(luckyNumber===-1){
                            setGameFinish(true)
                            return
                        }
                        const wordItem=wordsArr[luckyNumber].split('').map((item)=>{
                            return {
                                visible:false,
                                letter:item
                            }
                        })
                        numbers.push(luckyNumber)
                        setSelectedNumber(numbers)
                        setSelectedWord(wordItem)
                        setLetterArr(letterArray.map((item)=>{
                            return{
                                ...item,
                                isPressed:false
                            }
                        }))
                    }
                }
            }
        }
    },[pressedItem])

    useEffect(()=>{
        window.addEventListener('keyup',(e)=>{
            setPressedItem(e.key)
        })
    },[])
    return(
        <>
        <div className="game-area">
            <div className="points-wrapper">
                <div className="remaining-point">Kalan Hak {remainigPoint}</div>
                <div className="total-point">Toplam Puan {totalPoint}</div>

            </div>
            {gameFinish && remainigPoint>0 && <div className="you-win" onClick={restartGame}>Oyunu Kazandın Tekrar OYna</div>}
            {gameFinish && remainigPoint<1 && <div className="you-lose" onClick={restartGame}>Oyunu Kaybettin Tekrar OYna</div>}
            <div className="letter-wrapper">
                {selectedWord.map((item,index)=>{
                    return(
                        <div className="letter-item" key={index}>
                            {item.visible?item.letter:''}
                        </div>
                    )
                })}
            </div>
        </div>
            {gameFinish!==true &&   <div className="keyboard-area">
                <div className="keyboard-container">
                    {letterArr.map((item,index)=>{
                        return(
                            <div key={item.letter} className={`keyboard-item ${item.isPressed?'disabled':''}`}>
                                <div className="letter">
                                    {item.letter}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>}
        </>
    )
}
export default App
