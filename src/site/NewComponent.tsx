import React from 'react';
/*type DataType = {
    id: number
    name: string
    age: number
}*/
type CarsObjType = {
    manufacturer: string
    model: string
}
type NewComponentType = {
    // data: Array<DataType>
    cars: Array<CarsObjType>
}

export const NewComponent: React.FC<NewComponentType> = (props) => {
    /* 1):    /!*<ul>
                 {props.data.map((objData, index) => {
                     return <li
                         key={objData.id}>
                         <span>{objData.name}</span> <span>age: {objData.age}</span>
                     </li>
                 })}

             </ul>*!/

         );*!/
        )*/
    // 2 задача:
return (
    <div>
        <th>
            {props.cars.map((car) => {
                return (
                    <tr>
                        <span>{car.manufacturer}: серии: </span> <span>{car.model}</span>
                    </tr>
                )
            })}

        </th>
    </div>
)

};


