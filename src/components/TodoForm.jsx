import React,{ useState, useRef, useEffect} from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
    useEffect(() => {
      inputRef.current.focus();
    });

    const handleChange = (e) => {
      setInput(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });

      setInput('');
    };
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {props.edit ? 
      (<>
         <input 
        type='text'
        className='todo-input edit'
        value={input}
        name='text'
        placeholder='Update your item'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button edit'>Update</button>
      </>) : 
      (<>
         <input 
        type='text'
        className='todo-input'
        value={input}
        name='text'
        placeholder='Add a Todo'
        onChange={handleChange}
        ref={inputRef}
        />
        <button className='todo-button'>Add a Todo</button>
      </>)}
    </form>
  )
}

export default TodoForm