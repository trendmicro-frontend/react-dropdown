import React from 'react';
import PropTypes from 'prop-types';

const Space = ({ tag: Component, width, ...props }) => {
    if ((typeof width === 'string') && width.match(/^\d+$/)) {
        width += 'px';
    }

    props.style = {
        display: 'inline-block',
        width: width,
        ...props.style
    };
    return (
        <Component {...props} />
    );
};

Space.propTypes = {
    tag: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]),
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
};

Space.defaultProps = {
    tag: 'span',
    width: 0
};

export default Space;
