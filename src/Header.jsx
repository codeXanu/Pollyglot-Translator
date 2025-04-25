import React from "react";
import parrot from './assets/parrot.png'

export default function Header(){
    return(
        <header className="text-center mb-8  shadow-md p-8">
        <div className='header-main-div'>
          <img src={parrot} alt="" />
          <div className='header-text-div'>
            <h1>Pollyglot</h1>
            <p>Perfect Translation Every Time</p>
          </div>
        </div>
        
      </header>
    )
}