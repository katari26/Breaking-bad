import { useEffect, useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/header/Header';
import Pagination from './components/Pagination/Pagination';
import SingleModal from './components/singleModal/SingleModal';

function App() {

  const[data, setData] = useState();
  const[offset, setOffset] = useState(0);
  const[pageRender , setPageRender] = useState(true)
  const[show, setShow] = useState(false);
  const[individual, setIndividual] = useState();
  const[individualDeath, setIndividualDeath] = useState();
  const[individualDeathCount, setIndividualDeathCount] = useState();

  const fetchData = async () => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?limit=16&offset=${offset}`)
    const data = await response.json();
    setData(data)
    setPageRender(true)
  }

  const fetchDataWithInput = async (name) => {
    if(name === ""){
      fetchData()
      setOffset(0)
      return;
    }
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${name}`)
    const data = await response.json();
    setData(data)
    setPageRender(false)
  }

  const fetchIndividualCharacter = async (id) => {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id}`)
    const data = await response.json();
    setIndividual(data);
  }

  const fetchindividualdeath = async (char) => {
    const response = await fetch(`https://www.breakingbadapi.com/api/death?name=${char}`)
    const data = await response.json();
    setIndividualDeath(data);
  }

  const fetchindividualdeathcount = async (char) => {
    const response = await fetch(`https://www.breakingbadapi.com/api/death-count?name=${char}`)
    const data = await response.json();
    setIndividualDeathCount(data);
  }

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  function offsetFunc(data){
    setOffset(data)
  }

  function showmodal(data, id, char){
    setIndividual("");
    setIndividualDeath("")
    setIndividualDeathCount("")
    setShow(data);
    fetchIndividualCharacter(id);
    fetchindividualdeath(char)
    fetchindividualdeathcount(char)
  }
  
  return (
    <div className="App">
    <Header fetchDataWithInput={fetchDataWithInput} offsetFunc={offsetFunc}/> 
      {
        data ?  <Content data={data} showmodal={showmodal}/> : (
          <div className='loader'>
            <div id="loading"></div>
          </div>
          )
      }
      {
        individual &&  individualDeath && individualDeathCount ? <SingleModal onClose={() => setShow(false)} show={show} individual={individual}
        individualDeath={individualDeath}
        individualDeathCount={individualDeathCount}
      /> : !show ? null : <div className='for-loader'>
           <div className='loader'>
            <div id="loading"></div>
          </div>
          </div>
      }
      
      {
        data && pageRender && <Pagination offsetFunc={offsetFunc} />
      }
    </div>
  );
}

export default App;
