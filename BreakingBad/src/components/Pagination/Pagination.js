import React, { useState } from 'react'
import "./Pagination.css";
const Pagination = ({offsetFunc}) => {

    const[page, setPage] = useState(1);

    function handlePage(e){
        var num;
        if(e.target.id === "prev"){
            num = page - 1;
        }else
        if(e.target.id === "next"){
            num = page + 1;
        }else{
            num = Number(e.target.id)
        }
        
        window.scroll(0 , 0);
        if(num === 1){
            offsetFunc(0)
        }
        if(num === 2){
            offsetFunc(16)
        }
        if(num === 3){
            offsetFunc(32)
        }
        if(num === 4){
            offsetFunc(48)
        }
        setPage(num);
    }

  return (
    <section>
        <div className='page-container'>
            <div className='page-main-container'>
                <button id='prev' onClick={handlePage} style={{visibility :  page===1 ? "hidden" : null}}>Prev</button>
                <div id='1'
                style={{backgroundColor: page===1 ? "#00A97F" : null}} 
                onClick={handlePage}>1
                </div>
                <div id='2'
                style={{backgroundColor: page===2 ? "#00A97F" : null}} 
                onClick={handlePage}>2
                </div>
                <div id='3'
                style={{backgroundColor: page===3 ? "#00A97F" : null}} 
                onClick={handlePage}>3
                </div>
                <div id='4'
                style={{backgroundColor: page===4 ? "#00A97F" : null}} 
                onClick={handlePage}>4
                </div>
                <button id='next' onClick={handlePage} style={{visibility:  page===4 ? "hidden" : null}}>Next</button>
            </div>
        </div>
    </section>
  )
}

export default Pagination