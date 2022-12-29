
const planets = ['Mars','Venus','Jupiter','Earth','Saturn','Neptune' ];

export const Planets = ()=>{
    return(
        <ul className="list-group">
            {
                planets.map((item,index)=>{
                    return(
                        <li key={index} className="list-group-item" style={{width:"200px"}}>{item}</li>
                    )
                })
            }
        </ul>
        
    )
}



