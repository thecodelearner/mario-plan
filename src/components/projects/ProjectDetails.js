import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment'

const ProjectDetails = (props) => {
	// const id = props.match.params.id;
	const { project } = props;
	if (project) {
		return (
			<div className="container section project-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title">{project.title} </span>
						<p>{project.content}</p>

						<br />	<br />
						<div className="card-action grey lighten-4 grey-text">
							<div>Posted by {project.authorFirstName} {project.authorLastName} </div>
							<div>Created {moment(project.createdAt.toDate()).calendar()}</div>
						</div>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className="container center">
				<p>Loading project...</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;

	return {
		project: project
	}
}


export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)
