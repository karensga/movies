import {useEffect} from 'react'

import SectionMovie from './components/SectionMovie';
import MovieCard from './components/MovieCard'

function App() {
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?api_key=40248d8fb6690b905d0e85d951e9d910',{
      method:'GET'
    }).then(res => res.json())
    .then(res => console.log(res))
  },[])

  return (
    <div className="App">
      <SectionMovie>
        <MovieCard/>
      </SectionMovie>
    </div>
  );
}

export default App;
