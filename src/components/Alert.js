import React from 'react'

export default function Alert(props) {
    const capitalize = (s) => {
        let str = s.toLowerCase();
        return str[0].toUpperCase() + str.slice(1);
    }
    return (
        props.alert && (
            <div>
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        )
    )
}