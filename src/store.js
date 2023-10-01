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
		getParent: (state) => {
			return state.parents;
		},
		getChildren: (state) => {
			return state.children;
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
			const childrenStorage = JSON.parse(localStorage.getItem('children'));
			state.parent.name = parentStorage.name;
			state.parent.age = parentStorage.age;

			childrenStorage.forEach((element) => {
				state.children.push(element);
			});
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
