import React from 'react'

function Mounting() {
    return (
        <div style={{textAlign:'left',paddingLeft:'290px',paddingRight:'290px'}}>
            <h1>Mounting</h1>
            <p>Mounting means putting elements into the DOM. <br/>

                React has four built-in methods that gets called, in this order, when mounting a component:
            </p>
            <ul>
                <li>constructor()</li>
                <li>getDerivedStateFromProps()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
            </ul>

            <h3>constructor</h3>
            <p>
            The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
            </p>

            <h3>getDerivedStateFromProps</h3>
            <p>
            The getDerivedStateFromProps() method is called right before rendering the element(s) in the DOM.

This is the natural place to set the state object based on the initial props.

It takes state as an argument, and returns an object with changes to the state.

            </p>

            <h3>render</h3>
            <p>
            The render() method is required, and is the method that actually outputs the HTML to the DOM.
            </p>

            <h3>componentDidMount</h3>
            <p>
            The componentDidMount() method is called after the component is rendered.

This is where you run statements that requires that the component is already placed in the DOM.
            </p>


        </div>
    )
}

export default Mounting
