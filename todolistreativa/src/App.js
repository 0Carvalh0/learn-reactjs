import "./App.css";

import { useEffect, useState } from "react";
import { BsBookmarkCheck, BsBookmarkCheckFill, BsTrash } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      const res = await fetch(API + "/todos")
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.log(err));

      setLoading(false);

      setTodos(res);
    };

    loadData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: Math.random(),
      title,
      time,
      done: false,
    };

    await fetch(API + "/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) => [...prevState, newTodo]);

    setTitle("");
    setTime("");
  }

  const handleDelete = async (id) => {
    await fetch(API + "/todos/" + id, {
      method: "DELETE",
    });

    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const handleEdit = async (todo) => {
    todo.done = !todo.done;

    const data = await fetch(API + "/todos/" + todo.id, {
      method: "PUT",
      body: JSON.stringify(todo),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setTodos((prevState) =>
      prevState.map((t) => (t.id === data.id ? t.data : t))
    );
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <header className="todo__Header">
        <h1>To Do Reativa</h1>
      </header>
      <form className="todo__Form" onSubmit={handleSubmit}>
        <h2>Insira sua próxima tarefa:</h2>
        <div className="form__Group">
          <label htmlFor="title">O que você vai fazer?</label>
          <input
            type="text"
            name="title"
            placeholder="Título da tarefa"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title || ""}
            required
          />
        </div>
        <div className="form__Group">
          <label htmlFor="time">Duração:</label>
          <input
            type="text"
            name="time"
            placeholder="Tempo estimado (em horas)"
            onChange={(e) => {
              setTime(e.target.value);
            }}
            value={time || ""}
            required
          />
        </div>
        <input type="submit" value="Criar Tarefa" />
      </form>
      <ul className="todo__List">
        <h2>Lista de tarefas:</h2>
        {todos.length === 0 && <p>Não há tarefas!</p>}
        {todos.map((todo) => (
          <li className="todo__Item" key={todo.id}>
            <h3 className={todo.done ? "todo__Title--done" : "todo__Title"}>
              {todo.title}
            </h3>
            <p>Duração: {todo.time}</p>
            <div className="todo__Actions">
              <span onClick={() => handleEdit(todo)}>
                {!todo.done ? <BsBookmarkCheck /> : <BsBookmarkCheckFill />}
              </span>
              <BsTrash onClick={() => handleDelete(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
