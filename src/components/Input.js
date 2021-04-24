import React from 'react'

const Input = ({element, label,value, text, borderColor,bgColor, color, iconBefore, iconAfter}) => {
    return (
        <div className="input-block">
            <p className="input-block">{element} </p>
            <p className="input-block" style={{color:color}}>{label}</p>
            <div className="input-control" style={{borderColor:borderColor}}>
            {iconBefore}<input type="text"   placeholder="Placeholder"  value={value}/> {iconAfter}
            </div>
            <p className="input-block" style={{color:color}}> {text}</p>
        </div>
    )
}

export default Input
