// HOC

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>SOME INGO</h1>
        <p>This is info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is proviledged info</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}


const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? <p>Please sign in</p> : <WrappedComponent {...props}/>}
        </div>
    )
}



const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render( 
    <AuthInfo isAuthenticated={true} />,
    // <AdminInfo isAdmin={false} info="SOME STUFF"/>, 
    document.getElementById("app")
    )