import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({gif}) => {
    return (
            <img
                className="animate__animated animate__jackInTheBox"
                alt={gif.title}
                src={gif.url}
                title={gif.title}
                width="150"
                height="150"
            />
    )
}

GifGridItem.propTypes = {
    gif : PropTypes.object.isRequired,
}

export default GifGridItem
