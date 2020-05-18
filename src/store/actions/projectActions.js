export const createProject = (project) => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// todo: make async call to database
		const firestore = getFirestore();
		firestore.collection('projects').add({
			...project,
			authorFirstName: 'Sahil',
			authorLastName: 'S',
			authorId: 42069,
			createdAt: new Date()
		}).then(() => {
			dispatch({ type: 'CREATE_PROJECT', project });
		}).catch((error) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', error });
		})
	}
}