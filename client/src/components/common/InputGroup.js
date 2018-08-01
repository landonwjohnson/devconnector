import React from 'react'
import classnames from 'classnames';
import PropTypes from 'prop-types';


const InputGroup = ({
    name,
    placeholder,
    value,
    error,
    onChange,
    icon,
    type,
}) => {
  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <i className={icon} />


        </div>
        <input
            className={classnames('form-control form-control-lg', {
                "is-invalid": error
            })}
            placeholder={placeholder} 
            name={name} 
            onChange={onChange}
            type={type}
        />
      {error && (<div style={{display: 'block', textAlign: 'left'}} className="invalid-feedback">{error}</div>)}
  </div>
  )
}

InputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    icon: PropTypes.string,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired
}

InputGroup.defaultProps = {
    type: 'text'
}

export default InputGroup;
