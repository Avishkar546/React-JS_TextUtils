import React from 'react'

export default function Alert(props) {
    return (
       props.alert && <div className="alert alert-success my-2" role="alert">
            <h4 className="alert-heading">Well done! {props.alert.msg}</h4>
        </div>
    )
}
