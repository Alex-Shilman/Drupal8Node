import React, {
	Component
} from 'react';

class App extends Component {

	render() {
		const {
			children
		} = this.props;
		return (
			<div className="my-app">
				{ children }
			</div>
		);
	}
}

export default App