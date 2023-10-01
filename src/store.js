import { createStore } from 'vuex';

export const store = createStore({
	state: {
		parent: {
			name: '',
			age: '',
		},
		child: {
			name: '',
			age: '',
		},
		children: [],
	},
	mutations: {
		addChild(state) {
			state.children.push({ ...state.child, id: Date.now() });
		},
		removeChild(state, id) {
			state.children = state.children.filter((item) => item.id !== id);
		},
		saveForm(state) {
			localStorage.setItem('parent', JSON.stringify(state.parent));
			localStorage.setItem('children', JSON.stringify(state.children));
		},
		setParentName(state, value) {
			state.parent.name = value;
		},
		setParentAge(state, value) {
			state.parent.age = value;
		},

		initialData(state) {
			const parentStorage = JSON.parse(localStorage.getItem('parent'));
			state.parent.name = parentStorage.name;
			state.parent.age = parentStorage.age;

			const children = JSON.parse(localStorage.getItem('children'));
			if (children) {
				const childrenStorage = children;

				state.children.length = 0;
				childrenStorage.forEach((element) => {
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
