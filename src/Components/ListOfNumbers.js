import React from 'react'

function ListOfNumbers(props) {
    return (
        <div>O
            <ul>{props.numbers.map(
                (number) => <li>{number * 2}</li>)
            }
            </ul>
        </div>
    );
}

export default ListOfNumbers;
