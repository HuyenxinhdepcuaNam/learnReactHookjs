

const Todo = (props) => {
    let { todos } = props
    return (
        <div>
            {todos.map((item, index) => {
                return (
                    <li key={index}>{item.id} - {item.title}</li>

                )
            })}
        </div>
    )
}

export default Todo
