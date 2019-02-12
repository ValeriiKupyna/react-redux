import React from 'react';
import PropTypes from 'prop-types';

const ItemList = (props) => {
    const { items, children, onSelectItem } = props;

    return (
        <ul className="list-group">
            {items.map((item) => {
                const { id } = item;

                return (
                    <li className="list-group-item"
                        key={id}
                        onClick={() => onSelectItem(id)}>
                        {children(item)}
                    </li>
                )
            })}
        </ul>
    );
}

ItemList.propTypes = {
    onSelectItem: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
}


export default ItemList;