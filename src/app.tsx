/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface HelloListProps { names?: string[] }

class HelloList extends React.Component<HelloListProps, {}> {
    static defaultProps: HelloListProps = {
        names: ['world']
    }

    render(): JSX.Element {
        return (
            <ul>
            {
                this.props.names.map(name => <li>Hello, {name}</li>)
            }
            </ul>
        )
    }
}

ReactDOM.render(
  <HelloList names={['ZhengLei', 'XiJinping']} />,
  document.getElementById('container')
);
