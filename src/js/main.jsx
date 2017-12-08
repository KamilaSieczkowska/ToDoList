import React from 'react';
import ReactDOM from 'react-dom';

require('../sass/main.scss');

class ToDoItem extends React.Component{
    handleDoneClick = () => {
        if ( typeof this.props.onDone === 'function' ){
            this.props.onDone(this.props.title);
        }
    }
    render(){
        return <li><span>{this.props.title}</span>
            <button
                onClick={this.handleDoneClick}
            >Zakończ</button></li>;
    }
}

class ToDoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: this.props.items
        };
    }
    handleItemDone = (title) => {
        const newItems = this.state.items.filter(item => {
            return item !== title;
        });
        this.setState({
            items: newItems
        });
    };
    render(){
        const items = this.state.items.map(item => {
            return <ToDoItem
                title={item}
                onDone={this.handleItemDone}
            />
        });
        return <ul>
            {items}
        </ul>;
    }
}

const items = ['Kupić bułki','Ugotować rosół',
    'Zrobić prezentację ze zdarzeń'];

ReactDOM.render(
    <ToDoList items={items} />,
    document.getElementById('app')
);