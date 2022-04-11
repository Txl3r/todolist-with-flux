import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const [todoList, setTodolist] = useState([])
	const [listItem, setListitem] = useState("");
	const {store, actions} = useContext(Context)
	const line = (x) => {
		const newList = todoList.filter((element, index) => index !== index);
		setTodolist(newList);
	
	};



	const addItem = (newItem) => {
		const newList = [...todoList, { label: newItem, done: false}];
		setTodolist(newList)
		
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
					onChange={(e) => setListitem(e.target.value)}
					value={listItem}
				/>
				<button
					onClick={() => {
						if (listItem !== "") {
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
				{store.list.map((element, index) => {
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
										actions.line(index);
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
