import React from "react";

export default function ListComponent(props) {
    const {title, items} = props;
    return (
        <>
        <ul className="bulletless">
            {items.map(item => ( <li key={item}>{item} </li>) )}

        </ul>
        </>
    );
}