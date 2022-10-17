import React from 'react'
import "./Content.css"
const Content = ({data, showmodal}) => {
  return (
    <section>
        <div className='content-container'>
            {
                data && data.map((element) => {
                    return(
                        <div className='single-content' onClick={() => showmodal(true, element.char_id, element.name )} key={element.name}>
                            <div className='single-content-grid'>
                                <img src={element.char_id !== 14 ? element.img  :"https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/03/1484912975-laurafraser.JPG?crop=0.739xw:1.00xh;0.190xw,0&resize=480:*"} alt={element.name} />
                                <h3>{element.name}</h3>
                            </div>
                        </div>
                        
                    )
                })
            }   
        </div>
    </section>
  )
}

export default Content