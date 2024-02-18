

import React from "react";
import deleteData from "../App"




let news= (props) => {

    return (
<div className="Newsblock">
<div>{props.Text}</div>
<p></p>
<div>{props.name}</div>
<div className="crud"><p></p><button className="bt1">Изменить</button><button className="btn2">Удалить</button></div>
</div>




    )
}

export default news