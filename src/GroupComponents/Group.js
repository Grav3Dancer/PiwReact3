import React from 'react';

function Group(props) {
    const tagList = props.tags.map((tag) => " #" + tag);
    return (
        <div className='StudentBorder'>
            <h3>{props.name} - Rozmiar grupy: {props.size}</h3>
            <p>{props.username}</p>
            <div>
                <div>
                    <p>{props.desc}</p>
                </div>
                <div  className='tags'>
                    {tagList}
                </div>
            </div>
        </div>
    );
}

export default Group