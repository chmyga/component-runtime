import React from 'react';
// import PropTypes from 'prop-types';

import Component from './SelectDataset.component';

import DatasetContext from '../../DatasetContext';

class SelectDataset extends React.Component {
	static displayName = 'Container(SelectDataset)';
	static propTypes = {

	};

	constructor(props) {
		super(props);
		this.state = {};
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({value: event.target.value});
		if (this.props.onChange) {
			this.props.onChange(event, event.target.value);
		}
	}

	render() {
		return (
			<DatasetContext.Consumer>
				{({datasets}) => (
					<Component
						datasets={datasets}
						value={this.state.value}
						onChange={this.onChange}
					/>
				)}
			</DatasetContext.Consumer>
		);
	}
}

export default SelectDataset;