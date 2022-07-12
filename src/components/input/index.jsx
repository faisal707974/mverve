import React from "react";
// import './Input.scss'

export default function Input({ type, label, register, errors, rules, className, placeHolder }) {
    return (
        <>
            <div className="custom-input">
                {/* <Form.Group className='form-floating'> */}
                <label htmlFor="">{label}</label>
                <input className={errors[label] && 'error-style' || className} type={type} name={label} placeholder={placeHolder} {...register(label, { ...rules })} />
                {/* {errors[label] && errors[label].type === 'required' && <p className="validation-error">Required field</p>}
                    {errors[label] && errors[label].type === 'maxLength' && <p className="validation-error">{label} should be have maximum of {rules.maxLength} characters</p>}
                    {errors[label] && errors[label].type === 'min' && <p className="validation-error">{label} should be contain atleast {rules.min} characters</p>}
                    {errors[label] && errors[label].type === 'pattern' && <p className="validation-error">Invalid format</p>} */}
                {/* </Form.Group> */}
            </div>
        </>
    )
}