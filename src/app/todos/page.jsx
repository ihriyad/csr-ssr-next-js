import React from 'react';

const TodosPage  =async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json();
    return (
        <div>
            <h3>Total Todos: {data.length}</h3>
        </div>
    );
};

export default TodosPage;