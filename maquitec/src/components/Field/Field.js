import './Field.css'

export const Field = (props) => {
    return (
        <div className='field'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}