

const Todo = (props) => {
    let { todos, title } = props
    return (
        <div>
            <div>{title}</div>
            {todos.map((item, index) => {
                return (
                    <li key={index}>{item.id} - {item.title}</li>

                )
            })}
            <hr></hr>
        </div>
    )
}

export default Todo
