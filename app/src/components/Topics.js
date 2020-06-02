import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
function Topic({match}) {
	// console.log(match);
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	);
}

export default function Topics(props) {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to={`${props.match.url}/rendering`}>Rendering With React</Link>
				</li>
				<li>
					<Link to={`${props.match.url}/components`}>Components</Link>
				</li>
				<li>
					<Link to={`${props.match.url}/props-v-state`}>Props vs state</Link>
				</li>
			</ul>
			<Route path={`${props.match.path}/:topicId`} component={Topic}/>
			<Route exact path={props.match.path} render={() => {
				return <h3>Please select a Topic</h3>;
			}}/>
		</div>
	);
}