const initState = {
	projects: [
		{ id: '1', title: 'help me find peach', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio a, earum minima maiores unde porro architecto saepe, consequatur dignissimos quam suscipit quasi numquam iure. Distinctio veritatis totam voluptas optio!' },
		{ id: '2', title: 'collect all the stars', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio a, earum minima maiores unde porro architecto saepe, consequatur dignissimos quam suscipit quasi numquam iure. Distinctio veritatis totam voluptas optio!' },
		{ id: '3', title: 'egg hunt with yoshi', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, odio a, earum minima maiores unde porro architecto saepe, consequatur dignissimos quam suscipit quasi numquam iure. Distinctio veritatis totam voluptas optio!' }
	]
}


const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT': console.log('created project', action.project); break;
		default: console.log('default case');
	}
	return state
}

export default projectReducer