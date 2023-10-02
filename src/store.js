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
			let isValid = true;

			if (!state.parent.name || !state.parent.age) {
				isValid = false;
				alert('Заполните поля');
			}
			state.children.forEach((item) => {
				if (item.name == '' || item.age == '') {
					isValid = false;
					alert('Заполните поля');
				}
			});

			if (isValid) {
				localStorage.setItem('parent', JSON.stringify(state.parent));
				localStorage.setItem('children', JSON.stringify(state.children));
				alert('Сохранено');
			}
		},
		setParentName(state, value) {
			state.parent.name = value;
		},
		setParentAge(state, value) {
			state.parent.age = value;
		},

		initialData(state) {
			if (store.parent) {
				const parentStorage = JSON.parse(localStorage.getItem('parent'));
				state.parent.name = parentStorage.name;
				state.parent.age = parentStorage.age;
			}

			const children = JSON.parse(localStorage.getItem('children'));
			if (children) {
				const childrenStorage = children;

				state.children.length = 0;
				childrenStorage.forEach((element) => {
					state.children.push(element);
				});
			}
		},
	},
});
