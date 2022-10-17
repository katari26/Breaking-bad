import React from 'react'
import "./SingleModal.css";
const SingleModal = ({onClose, show, individual, individualDeath, individualDeathCount}) => {
    const[singledata] = individual;
    const[singleDeath] = individualDeath
    const[deathCount] = individualDeathCount
    if(!show){
        return null
    }
    return (
        <div className={`modal ${show ? 'show' : '' }`} onClick={onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
            <div className='modal-individual'>
                <h2>{singledata.name}</h2>
                <div className='model-flex'>
                    <div className='modal-img'>
                         <img src={singledata.img} alt={singledata.name} />
                    </div>
                    
                    <div className='modal-text'>
                        {
                            singledata && (
                                <>
                                <tr>
                                <td>Nickname</td>
                                <td>:   {singledata.nickname}</td>
                            </tr>
                            <tr>
                                <td>Birthday</td>
                                <td>: {singledata.birthday === "Unknown" ? "No data available" : `${singledata.birthday}`}</td>
                            </tr>
                            <tr>
                                <td>Occupation</td>
                                <td>: {singledata.occupation.map((element, index) => <span key={index}>{element}</span>)}</td>
                            </tr>
                            <tr>
                                <td>Appearance<span>(Episode no.)</span></td>
                                <td>: {singledata.appearance.map((element, index) => <span key={index}>{element} </span>)}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>: {singledata.status}</td>
                            </tr>
                                </>
                            )
                        }
                        
                        {
                            singleDeath && (
                                <>
                                    <tr>
                                        <td>Death Cause</td>
                                        <td>: {singleDeath.cause}</td>
                                    </tr>
                                    <tr>
                                        <td>Death Responsible</td>
                                        <td>: {singleDeath.responsible}</td>
                                    </tr>
                                    <tr>
                                        <td>Last Words</td>
                                        <td>: {singleDeath.last_words}</td>
                                    </tr>
                                    <tr>
                                        <td>Death In</td>
                                        <td>: Season: {singleDeath.season}  Episode: {singleDeath.episode}</td>
                                    </tr>
                                </>
                               
                            )
                        }
                        {
                            deathCount && (
                                <>
                                    <tr>
                                        <td>Responsible for Number of deaths </td>
                                        <td>: {deathCount.deathCount}</td>
                                    </tr>
                                </>
                            )
                        }
                        <h3>Portrayed by:  {singledata.portrayed}</h3>
                    </div>
                </div>
             </div>
            <span className='close-btn' onClick={onClose}><i class="fa-solid fa-xmark"></i></span>
            </div>
        </div>
    )
}

export default SingleModal