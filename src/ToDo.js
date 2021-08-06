import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // this is where the data goes
            list: [
                {
                    'todo': 'Learn React'
                },
                {
                    'todo': 'Read about Typescript'
                }
            ],
            todo: ''
        };
    };

    createNewToDoItem = () => {
      this.setState(({ list, todo }) => ({
        list: [
            ...list,
          {
            todo
          }
        ],
        todo: ''
      }));
    };


    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

    handleInput = e => {
      this.setState({
        todo: e.target.value
      });
    };


    // this is now being emitted back to the parent from the child component
    deleteItem = indexToDelete => {
      this.setState(({ list }) => ({
        list: list.filter((toDo, index) => index !== indexToDelete)
      }));
    };

    render() {
        return (
            <div className="ToDo">
                <h1 className="ToDo-Header"><a href="https://es.reactjs.org/" target="_blank" rel="noopener noreferrer">React To Do</a></h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.state.list.map((item, key) => {
                            return <ToDoItem
                                      key={key}
                                      item={item.todo}
                                      deleteItem={this.deleteItem.bind(this, key)}
                            />
                          }
                        )}
                    </div>

                    <div>
                        <input placeholder="Type here" className="input" type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                        <button className="ToDo-Add" onClick={this.createNewToDoItem}>Add</button>
                    </div>

                    <div className="footer">
                      <p className="content"> By <a className="link" href="https://portfoliov2.hostman.site" target="_blank" rel="noopener noreferrer">Juan Loyola</a> following this guide by <a className="link" href="https://marianvilla.medium.com/cre%C3%A9-la-misma-aplicaci%C3%B3n-en-react-vue-aqu%C3%AD-las-diferencias-605465a2e18c" target="_blank" rel="noopener noreferrer">Marian Villa</a></p>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;