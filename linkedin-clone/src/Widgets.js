import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import InfoIcon from '@mui/icons-material/Info';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArticle = (heading, subtitle) => {
        return <div className="widgets_article">

            <div className="widgets_articleLeft">
                <FiberManualRecordIcon />

            </div>

            <div className="widgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    }

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle('PAPA React is back', 'Top news - 9989 readers')}
        {newsArticle('Corona Virus:UK Updates', 'Top news - 679 readers')}
        {newsArticle('Tesla hits new highs', 'Cars & auto - 300 readers')}
        {newsArticle('Bitcoin breaks $200M', 'Crypto - 8000  readers')}
        {newsArticle('Is Redux too good?', 'Code - 199 readers')}
        {newsArticle('PAPA React launces course?!', 'Top news - 6538 readers')}

    </div>
  )
}

export default Widgets