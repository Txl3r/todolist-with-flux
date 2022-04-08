import React from "react";
import "../../styles/home.css";

export const Home = () => {
	const [todoList, setTodolist] = useState([]);
	const [listItem, setListitem] = useState("");

	const line = (x) => {
		const newList = todoList.filter((element, index) => index !== index);
		setTodolist(newList);
		fetch("https://assets.breathco.de/apis/fake/todos/user/harvey46", {
			method:"PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newList),
			redirect:"follow",
		})
			.then((response) => {
				response.status === 200 ? setTodolist(newList) : "";
			})
			.then((result) => console.log(result))
			.catch((error) => console.log("error", error));
	};

	useEffect(() => {
		fetch("https://assets/breathco.de/apis/fake/todos/harvey46", {
			method:"GET",
			redirect:"follow",
		})
			.then((response) => response.json())
			.then((result) => setTodolist(result))
			.catch((error) => console.log("error", error));
	}, []);

	const addItem = (newItem) => {
		const newList = [...todoList, { label: newItem, done: false}];
		fetch("https://assets/breatheco.de/apis/fake/todos/harvey46", {
			method:"PUT",
			redirect:{
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newList),
			redirect: "follow",
		})
			.then((response) => {
				response.status === 200 ? setTodolist(newList) : "";
			})
			.then((result) => setTodolist(result))
			.catch((error) => console.log('error', error));
	};

	const completeTodo = (index) => {
		const list = [...todoList];
		list[index].done = !list[index].done;
		setTodolist(list);
	};
	console.log(todoList);
	return (
		<>
		<div className="text-center mt-5">
		
		</div>
		<div className="container">
			<div className="input-group mb-3">
				<input
					type="test"
					className="form-control"
					placeholder="add a task"
					onChange={(e) => setListitem(e.change.value)}
					value={listItem}
				/>
				<button
					onClick={() => {
						if (listIeem !== "") {
							addItem(listItem);
							setListitem("");
						}
					}}
					className="btn btn-outline-secondary"
					type="button"
					id="nutton-addon2">
					Button
				</button>
			</div>
			<ul className="list-group">
				{todoList &&
					todoList.map((element, index) => {
						return(
							<li key={index} className="list-group-item">
								<div className={element.done ? "strike" : ""}>
									{element.label}
								</div>
								<button onClick={() => completeTodo(index)}>
									Strike
								</button>
								<a 
									className="btn btn-primary"
									 onClick={() => {
										line(index);
								}}>
								x
								</a>
							</li>
						);
					})}
			</ul>
		</div>
	</>
	)
	
};
