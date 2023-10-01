import { createStore } from 'vuex';

export const store = createStore({
	state: {
		parent: {
			name: '',
			age: '',
			id: Date.now(),
		},
		child: {
			name: '',
			age: '',
			id: Date.now(),
		},
		children: [],
	},
	getters: {
		getParent: () => {
			return JSON.parse(localStorage.getItem('parent'));
		},
		getChildren: () => {
			return JSON.parse(localStorage.getItem('children'));
		},
	},
	mutations: {
		addChild(state) {
			state.children.push(state.child);
		},
		removeChild(state, id) {
			state.children = state.children.filter((item) => item.id !== id);
		},
		saveForm(state) {
			localStorage.setItem('parent', JSON.stringify(state.parent));
			localStorage.setItem('children', JSON.stringify(state.children));
		},

		initialData(state) {
			const parentStorage = JSON.parse(localStorage.getItem('parent'));
			state.parent.name = parentStorage.name;
			state.parent.age = parentStorage.age;
			console.log(!!JSON.parse(localStorage.getItem('children')));

			if (!!JSON.parse(localStorage.getItem('children'))) {
				const childrenStorage = JSON.parse(localStorage.getItem('children'));

				childrenStorage.forEach((element) => {
					state.children.length = 0;
					state.children.push(element);
				});
			}
		},

		checkValidForm(state) {
			if (!state.parent.age || !state.parent.age) {
				return false;
			} else {
				return true;
			}
		},
	},
});
