import React from 'react';
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';
function Topic({match}) {
	return (
		<div>
			<h3>{match.params.topicId}</h3>
		</div>
	);
}

export default function Topics() {
	return (
		<div>
			<h2>Topics</h2>
			<ul>
				<li>
					<Link to='/topics/rendering'>Rendering With React</Link>
				</li>
				<li>
					<Link to='/topics/components'>Components</Link>
				</li>
				<li>
					<Link to='/topics/propsvsstate'>Props vs state</Link>
				</li>
			</ul>
			<Route path='/topics/:topicId' component={Topic}/>
		</div>
	);
}