import './App.css';
import Memes from './components/Memes';
import { useEffect, useState } from "react";

function App() {
  const [memes, setMemes] = useState([]);
  const [allMemes, setAllMemes] = useState([]);
  
  function loadMoreMemes(){
    let start = 0;
    let end = memes.length + 20;
    let newMemes = [...allMemes].splice(start, end);
    setMemes(newMemes);
    setTimeout(()=> {
      window.scrollBy(0,800);
    }, 1000);
  }
  
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => {
      setAllMemes(data.data.memes);
      let memeData = data.data.memes.slice(0, 20);
      setMemes(memeData);
    })
  }, []);
  
  return (
    <div className="App">
      <h1 className="meme-page-title">Meme Collection</h1>
      {
        memes.length > 0 ?
          <Memes data={memes} loadMore={loadMoreMemes}/>
        :
          <h1>Loading Memes... | Be ready!</h1>
      }
      
    </div>
  );
}

export default App;
