import React from 'react'

const TextArea = ({ element}) => {
    return (
        <div>
            <p>{element}</p>
            <textarea name="" id="" cols="30" rows="4" style={{borderRadius:"8px"}} placeholder="Placeholder"></textarea>
        </div>
    )
}

export default TextArea
