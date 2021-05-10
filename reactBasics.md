## In this section, we will see how to use the most important JS features in React:
### 1.
`let` and `const` : The new way to declare variables in
JavaScript is by using `let` or `const` . You can use let to
declare variables that can change their value but in block
scope. The difference between `let` and `var` is that let is a block scoped variable that cannot be global, and with `var`, you can declare a global variable, for example:

    var name = 'Carlos Santana';
    let age = 30;
    console.log(window.name); // Carlos Santana
    console.log(window.age); // undefined
### 2. 
The best way to understand **"block scope"** is by declaring
a for loop with `var` and `let` . First, let's use  `var` and see its behavior:

    for (var i = 1 ; i <= 10; i++) {
        console.log(i); // 1, 2, 3, 4... 10
    }
    console.log(i); // Will print the last value of i: 10
### 3. 
If we write the same code, but with `let` , this will happen:

    for (let i = 1 ; i <= 10; i++) {
        console.log(i); // 1, 2, 3, 4... 10
    }
    console.log(i); // Uncaught ReferenceError: i is not defined

### 4. 
With `const` , we can declare constants, which means the
value can't be changed (except for arrays and objects):

    const pi = 3.1416;
    pi = 5; // Uncaught TypeError: Assignment to constant variable.
### 5. 
If we declare an array with `const` , we can manipulate the array elements (add, remove, or modify elements):

    const cryptoCurrencies = ['BTC', 'ETH', 'XRP'];
    // Adding ERT: ['BTC', 'ETH', 'XRP', 'ERT'];
    cryptoCurrencies.push('ERT');
    // Will remove the first element: ['ETH', 'XRP', 'ERT'];
    cryptoCurrencies.shift();
    // Modifying an element
### 6. 
Also, using objects, we can add, remove, or modify the
nodes:

    const person = {
        name: 'Carlos Santana',
        age: 30,
        email: 'carlos@milkzoft.com'
    };
    // Adding a new node...
    person.website = 'https://www.codejobs.com';
    // Removing a node...
    delete person.email;
    // Updating a node...
    person.age = 29;
### 7. Spread operator: 
The spread operator (...) splits an
iterable object into individual values. In React, it can be
used to push values into another array, for example when
we want to add a new item to a Todo list by utilizing
setState (this will be explained in the next chapter):
    
    this.setState({
        items: [
        ...this.state.items, // Here we are spreading the current items
            {
        task: 'My new task', // This will be a new task in our Todo list.
            }
        ]
    });
### 8. Spread Operator (cont.)
Also, the Spread operator can be used in React to spread
attributes (props) in JSX:

    render() {
        const props = {};
        props.name = 'Carlos Santana';
        props.age = 30;
        props.email = 'carlos@milkzoft.com';
        return <Person {...props} />;
    }
### 9. Rest parameter: 
The rest parameter is also represented
by ... . The last parameter in a function prefixed with ...
is called the rest parameter. The rest parameter is an array
that will contain the rest of the parameters of a function
when the number of arguments exceeds the number of
named parameters:

    function setNumbers(param1, param2, ...args) {
        // param1 = 1// param2 = 2
        // args = [3, 4, 5, 6];
        console.log(param1, param2, ...args); // Log: 1, 2, 3, 4, 5, 6
    }
    setNumbers(1, 2, 3, 4, 5, 6);
### 10. Destructuring: 
The destructuring assignment feature is
the most used in React. It is an expression that allows us
to assign the values or properties of an iterable object to
variables. Generally, with this we can convert our
component props into variables (or constants):
// Imagine we are on our <Person> component and we are
// receiving the props (in this.props): name, age and email.

    render() {
        // Our props are:
        // { name: 'Carlos Santana', age: 30, email:
        'carlos@milkzoft.com' }
        console.log(this.props);
        const { name, age, email } = this.props;
        // Now we can use the nodes as constants...
        console.log(name, age, email);
        return (
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Email: {email}</li>
            </ul>
        );
    }
// Also the destructuring can be used on function parameters

    const Person = ({ name, age, email }) => (
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
        </ul>
    );
### 11. Arrow functions: 
ES6 provides a new way to create
functions using the => operator. These functions are called
arrow functions. This new method has a shorter syntax,
and the arrow functions are anonymous functions. In
React, arrow functions are used as a way to bind the
this object in our methods instead of binding it in the
constructor:

    class Person extends Component {
        showProps = () => {
            console.log(this.props); // { name, age, email... }
        }
        render() {
            return (
            <div>
                Consoling props: {this.showProps()}
            </div>
            );
        }
    }
### 12. Template literals: 
The template literal is a new way to
create a string using backticks (` `) instead of single
quotes (' ') or double quotes (" "). React use template
literals to concatenate class names or to render a string
using a ternary operator:

    render() {
        const { theme } = this.props;
        return (
            <div
            className={`base ${theme === 'dark' ? 'darkMode' :
            'lightMode'}`}
            >
            Some content here...
            </div>
        );
    }
### 13. Map: 
The `map()` method returns a new array with the
results of calling a provided function on each element in
the calling array. Map use is widespread in React, and is
mainly used to render multiple elements inside a React
component; for example, it can be used to render a list of tasks:

    render() {
        const tasks = [
            { task: 'Task 1' },
            { task: 'Task 2' },
            { task: 'Task 3' }
        ];
        return (
            <ul>
                {tasks.map((item, key) => <li key={key}>{item.task}</li>
            </ul>
        );
    }
### 14. Object.assign(): 
The `Object.assign()` method is used to
copy the values of all enumerable own properties from
one or more source objects to a target object. It will return
the target object. This method is used mainly with Redux
to create immutable objects and return a new state to the
reducers (Redux will be covered in Chapter 5 , Mastering
Redux):

    export default function coinsReducer(state = initialState, action) {
        switch (action.type) {
            case FETCH_COINS_SUCCESS: {
                const { payload: coins } = action;
                return Object.assign({}, state, {
                    coins
                });
            }
            default:
                return state;
        }
    };
### 15. Classes: 
JavaScript classes, introduced in ES6, are mainly
a new syntax for the existing prototype-based inheritance.
Classes are functions and are not hoisted. React uses
classes to create class Components:

    import React, { Component } from 'react';
        class Home extends Component {
            render() {
                return <h1>I'm Home Component</h1>;
            }
        }
    export default Home;
### 16. Static methods: 
Static methods are not called on
instances of the class. Instead, they're called on the class
itself. These are often utility functions, such as functions
to create or clone objects. In React, they can be used to
define the PropTypes in a component:

    import React, { Component } from 'react';
    import PropTypes from 'prop-types';
    import logo from '../../images/logo.svg';
    class Header extends Component {
        static propTypes = {
            title: PropTypes.string.isRequired,
            url: PropTypes.string
        };
        render() {
            const {
                title = 'Welcome to React',
                url = 'http://localhost:3000'
            } = this.props;
            return (
            <header className="App-header">
                <a href={url}>
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1 className="App-title">{title}</h1>
            </header>
            );
        }
    }
    export default Header;
### 17. Promises: 
The Promise object represents the eventual
completion (or failure) of an asynchronous operation and
its resulting value. We will use promises in React to
handle requests by using axios or fetch; also, we are going
to use Promises to implement the server-side rendering
(this will be covered in Chapter 11 , Implementing Server-Side
Rendering).
### 18. async/await: 
The async function declaration defines an
asynchronous function, which returns an AsyncFunction
object. This also can be used to perform a server request,
for example using axios:

    Index.getInitialProps = async () => {
        const url = 'https://api.coinmarketcap.com/v1/ticker/';
        const res = await axios.get(url);
        return {
            coins: res.data
        };
    };