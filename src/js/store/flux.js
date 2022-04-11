
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list:[]
		},
		actions: {
			
			getData: () => {
				fetch("https://assets/breathco.de/apis/fake/todos/harvey46", {
					method:"GET",
					redirect:"follow",
				})
					.then((response) => response.json())
					.then((result) => setStore({list: result}))
					.catch((error) => console.log("error", error));
			},
			line: (index) => {
				const newList = getStore().list.filter((element, index) => index !== index);
					fetch("https://assets/breathco.de/apis/fake/todos/harvey46",{
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(newList),
						redirect: "follow",
					})
						.then((response) => {
							response.status === 200 ? setStore(newList) : "";
						})
						.then((result) => console.log(result))
						.catch((error) => console.log("error", error));
			
			},
			addItem: (newItem) => {
				const newList = [...todoList, { label: newItem, done: false }];
				fetch("https://assets/breathco.de/apis/fake/todos/harvey46",{
					method:"PUT",
					headers:{
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newList),
					redirect: "follow",
				})
					.then((response) => {
						response.status === 200 ? setStore(newList) : "";
					})
					.then((result) => console.log(result))
					.catch((error) => console.log("error", error));
			}
		}
	};
};

export default getState;
