import React from 'react'

function Unmounting() {
    return (
        <div style={{textAlign:'left',paddingLeft:'290px',paddingRight:'290px'}}>
            <h1>Unmounting</h1>
            <p>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it. <br/>

React has only one built-in method that gets called when a component is unmounted:</p>

            <ul>
                <li>componentWillUnmount()</li>
            </ul>

            <h3>componentWillUnmount</h3>
            <p>The componentWillUnmount method is called when the component is about to be removed from the DOM.</p>
        </div>
    )
}

export default Unmounting
