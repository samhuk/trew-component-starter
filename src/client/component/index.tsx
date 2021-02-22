import React from 'react'

export type ComponentProps = {
  labelText?: string
  inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
}

// Example component that simply combines a label and an input
export const render = (props: ComponentProps) => (
  <>
    {props.labelText != null ? <label className="component-label" htmlFor={props.inputProps.id}>{props.labelText}</label> : null}
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <input {...props.inputProps} className={['component-input', props.inputProps].join(' ')} />
  </>
)

export default render
