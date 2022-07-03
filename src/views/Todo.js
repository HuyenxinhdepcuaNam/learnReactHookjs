

const Todo = (props) => {
    let { todos, title, handleDeleteTodo } = props
    let handleDelete = (id) => {
        handleDeleteTodo(id)
    }
    return (
        <div>
            <div>{title}</div>
            {todos.map((item, index) => {
                return (
                    <li key={index}>
                        {item.id} - {item.title} &nbsp;
                        <span onClick={() => handleDelete(item.id)}>x</span>
                    </li>
                )
            })}
            <hr></hr>
        </div>
    )
}

export default Todo
