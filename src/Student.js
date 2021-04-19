import React from 'react';

function Student(props) {
    const tagList = props.tags.map((tag) => " #" + tag);
    return (
        <div className='StudentBorder'>
            <h3>{props.name} {props.surname}</h3>
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

export default Student