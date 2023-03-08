import { useState } from 'react'
import './App.css'
import EmojiPicker , {Categories, Emoji} from 'emoji-picker-react'
function App() {
  const [emoji,setEmoji]=useState("")
  return (
    <div className="App">
      <h1>&#x1f970;</h1>
      <Emoji size={100} unified={emoji.unified} />
      {emoji.emoji}
      {emoji && <a href={emoji.getImageUrl()}>Tıkla</a>}
      <div>React Emoji Picker</div>
      <EmojiPicker 
      searchPlaceHolder='Ara'
      emojiStyle='twitter'
      searchDisabled={false}
      lazyLoadEmojis={false}
      theme='dark'
      onEmojiClick={(e)=>{
        setEmoji(e)
        console.log(e)
      }}
      categories={
        [
          {
            name:"Eğlence",
            category:Categories.ACTIVITIES
          },
          {
            name:"İnsanlar",
            category:Categories.SMILEYS_PEOPLE
          }
        ]
      }
      previewConfig={{
        showPreview:true,
        defaultEmoji:"1f92a",
        defaultCaption:"Bir emoji araaaa"
      }}
      />
    </div>
  )
}

export default App
