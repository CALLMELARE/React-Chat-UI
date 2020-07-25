import React from 'react';
import PropTypes from 'prop-types';
import StyledIcon from './style';

const Icon = ({ icon: IconComponent, width = 24, height = 24, color, opacity, ...rest }) => {
    return (
        <StyledIcon color={color} opacity={opacity} {...rest} >
            {IconComponent && <IconComponent width={width} height={height} />}
        </StyledIcon>
    );
};

Icon.propTypes = {
    icon: PropTypes.element,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    opacity: PropTypes.number
};

export default Icon;