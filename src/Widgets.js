import React from 'react'
import './Widgets.css'
import {FiberManualRecord, Info} from '@material-ui/icons'
function Widgets() {

    const newsArticle  = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecord/>
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>
    )

    return (
        <div className="widgets"> 
              <div className="widgets__header"> 
            <h2> ShareThoughts </h2>
            <Info/>
            </div>
            {newsArticle("CoronaVirus : UK Updates", "Top 886 reader")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
            {newsArticle("Is Redux too good?", "Code 123 - redux")}
        </div>
    )
}

export default Widgets
