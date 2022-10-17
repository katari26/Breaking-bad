
import logo from "../../images/logo.png"
import "./Header.css"
import debounce from 'lodash.debounce'

const Header = ({fetchDataWithInput, offsetFunc}) => {

  function handleinput(e){
    const data = e.target.value;
        fetchDataWithInput(data)
  }

  const inputDebounce = debounce(handleinput, 300);

  return (
    <header>
        <div className='header-container'>
            <img src={logo} alt="breaking bad" />
            <div id='try' style={{color: "white"}}></div> 
        </div>
        <input type="text" onChange={inputDebounce} placeholder='Enter your favorite character'/>
    </header>
    
  )
}

export default Header