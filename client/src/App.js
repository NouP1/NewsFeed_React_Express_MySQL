import News from './Component/news';
import './App.css';
import React from 'react'
import axios from 'axios';





function App() {
 let [todo,setTodo] = React.useState([

 ])

React.useEffect(()=>{
let data = axios.get('http://localhost:5000')
data.then(res => {
  setTodo(res.data)
})
},[,]);


let input = React.createRef(null) 
let textarea = React.createRef(null) 

 let postData = () => {
 
  
  let post= axios.post('http://localhost:5000',
  
  {
  id:null,
  name:input.current.value,
  Text:textarea.current.value
  
  },
  )
}






  return (
    <div className='App'>
      <h1>Новостная лента</h1>
<div>
 <form type="action" className='block'>
<label>Напишите заголовк новости</label>
<input type="text" ref={input} ></input>

<label>Напишите текст новости</label>
<textarea type="text" ref={textarea}></textarea>
<button  className="btn" onClick={postData}>Опубликовать</button>
</form>

  {todo.map(el=>{
return <News  name={el.name} Text={el.Text} key={el.id} ></News>
  
  })
  
}



  
</div>
   
    </div>
  );
}

export default App;
