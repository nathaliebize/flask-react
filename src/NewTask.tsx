import React from 'react';

type NewTaskProps = {
	handleClick: () => void,
	handleChange: (arg: string) => void,
	task: string
}

export default class NewTask extends React.Component<NewTaskProps, {}> {
	constructor(props: NewTaskProps) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		this.props.handleClick();
	}

	handleChange({target}) {
		this.props.handleChange(target.value);
	}

	render() {
		return (<div>
				<input onChange={this.handleChange} value={this.props.task}></input>
                <button onClick={this.handleClick}>Add</button>
			</div>);
	}
}
