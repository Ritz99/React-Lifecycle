import React from 'react'

function Updating() {
    return (
        <div style={{textAlign:'left',paddingLeft:'290px',paddingRight:'290px'}}>
            <h1>Updating</h1>
            <p>The next phase in the lifecycle is when a component is updated.

A component is updated whenever there is a change in the component's state or props. <br/>

React has five built-in methods that gets called, in this order, when a component is updated:</p>

            <ul>
                <li>getDerivedStateFromProps()</li>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>getSnapshotBeforeUpdate()</li>
                <li>componentDidUpdate()</li>
            </ul>

            <h3>getDerivedStateFromProps</h3>
            <p>
            Also at updates the getDerivedStateFromProps method is called. This is the first method that is called when a component gets updated.

This is still the natural place to set the state object based on the initial props.
            </p>

            <h3>shouldComponentUpdate</h3>
            <p>
            In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.

The default value is true
            </p>

            <h3>render</h3>
            <p>
            The render() method is required and will always be called, the others are optional and will be called if you define them. <br/>
            The render() method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.
            </p>

            <h3>getSnapshotBeforeUpdate</h3>
            <p>
            In the getSnapshotBeforeUpdate() method you have access to the props and state before the update, meaning that even after the update, you can check what the values were before the update.

If the getSnapshotBeforeUpdate() method is present, you should also include the componentDidUpdate() method, otherwise you will get an error.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and after one second, the favorite color becomes "yellow".

This action triggers the update phase, and since this component has a getSnapshotBeforeUpdate() method, this method is executed, and writes a message to the empty DIV1 element.
            </p>

            <h3>componentDidUpdate</h3>
            <p>
            The componentDidUpdate method is called after the component is updated in the DOM.

The example below might seem complicated, but all it does is this:

When the component is mounting it is rendered with the favorite color "red".

When the component has been mounted, a timer changes the state, and the color becomes "yellow".
            </p>


        </div>
    )
}

export default Updating
