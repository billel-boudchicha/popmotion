"use strict";

var COLOR = 'color',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SHADOW = 'shadow',
    ANGLE = 'angle',
    PX = 'px';

module.exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    outlineColor: COLOR,
    fill: COLOR,
    stroke: COLOR,

    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,

    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW,

    // Transform properties
    rotate: ANGLE,
    rotateX: ANGLE,
    rotateY: ANGLE,
    rotateZ: ANGLE,
    skewX: ANGLE,
    skewY: ANGLE,
    translateX: PX,
    translateY: PX,
    translateZ: PX,
    perspective: PX
};