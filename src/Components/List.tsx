import React from 'react';
import {IState as IProps} from "../App"

const List:React.FC<IProps> = ({people}) => {
    const developerList=(): JSX.Element[]=>{
        return people.map((person)=>{
        return(
            <li className="List">
                <div className="List-header">
                <img className="List-img" src={person.img}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} Years old</p>
                <p className="List-note">{person.note}</p>

            </li>
        )
        })
    }
    return (
<ul>
    {developerList()}
</ul>
    );
};

export default List;