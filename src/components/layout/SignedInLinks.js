import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

	return (
		<ul className='right'>
			<li><NavLink to='/create'><i class="material-icons">playlist_add</i></NavLink></li>
			<li><a href='/signin' onClick={props.signOut}><i class="material-icons">exit_to_app</i></a></li>
			<li><NavLink to='/' className='btn btn-floating green'>
				{props.profile.initials}
			</NavLink></li>
		</ul>
	)
}

const mapDispatchToProps = (dispatch) => {
	return {
		signOut: () => dispatch(signOut())
	}
}


export default connect(null, mapDispatchToProps)(SignedInLinks)
