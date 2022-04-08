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
					.then((result) => setStore({list:result}))
					.catch((error) => console.log("error", error));
			},
		}
	};
};

export default getState;
