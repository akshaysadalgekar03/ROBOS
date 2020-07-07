import React from 'react';
import Card from './Card';

// we know cardlist recieves robots so we now have access to it
// (props) or destructuring {robots}
const CardList = ({robots}) => {
    const cardArrays = robots.map((users,i) => {
        return (
        <Card 
        key={i} 
        id = {robots[i].id} 
        name = {robots[i].name} 
        email = {robots[i].email}
        />
        )
    });
    return (
        <div>
            {cardArrays}
        </div>
        
    );
}

export default CardList;