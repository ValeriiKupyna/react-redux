import React from 'react';

const AppListItem = ({
    label,
    important = false,
    active,
    done,
    id,
    onRemove,
    onImportant,
    onDone
}) => {

        const style = {
            color: important ? 'red' : 'black'
        }
    
        return (
            <div>
                <span style={style} onClick= { () => onDone(id) }>{ label }</span>
                <button onClick={ () => onRemove(id) }>X</button>
                <button onClick={ () => onImportant(id) }>I</button>

                <br></br>
                <span>done: {done ? 'true' : 'false'}</span>
            </div>
        );
};

export default AppListItem;
