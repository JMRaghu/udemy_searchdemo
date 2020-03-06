import React from 'react';
import style from './SearchResult.css';

const SearchResult = (props) =>{
    return(
        <div className={style.eachResult}>
            <ul>
                <li>
                    <a href={props.result.weburl} target="_blank">
                        {props.result.webTitle}
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default SearchResult;