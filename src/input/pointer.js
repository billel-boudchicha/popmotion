"use strict";

var Input = require('./input.js'),
    Point = require('../types/point.js'),
    KEY = require('../opts/keys.js'),
    utils = require('../utils/utils.js'),
    currentPointer, // Sort this out for multitouch
    

    /*
        Convert event into point
        
        Scrape the x/y coordinates from the provided event
        
        @param [event]: Original pointer event
        @param [boolean]: True if touch event
        @return [object]: x/y coordinates of event
    */
    eventToPoint = function (event, isTouchEvent) {
        var touchChanged = isTouchEvent ? event.changedTouches[0] : false;
        
        return {
            x: touchChanged ? touchChanged.clientX : event.screenX,
            y: touchChanged ? touchChanged.clientY : event.screenY
        }
    },
    
    /*
        Get actual event
        
        Checks for jQuery's .originalEvent if present
        
        @param [event | jQuery event]
        @return [event]: The actual JS event  
    */
    getActualEvent = function (event) {
        return event.originalEvent || event;
    },

    
    /*
        Pointer constructor
    */
    Pointer = function (e) {
        var event = getActualEvent(e), // In case of jQuery event
            isTouch = (event.touches) ? true : false,
            startPoint = eventToPoint(event, isTouch);
        
        this.update(new Point(startPoint));
        this.isTouch = isTouch;
        this.bindEvents();
    };

Pointer.prototype = new Input();

/*
    Bind move event
*/
Pointer.prototype.bindEvents = function (isTouch) {
    this.moveEvent = this.isTouch ? KEY.EVENT.TOUCHMOVE : KEY.EVENT.MOUSEMOVE;
    
    currentPointer = this;
    
    document.documentElement.addEventListener(this.moveEvent, this.onMove);
};

/*
    Unbind move event
*/
Pointer.prototype.unbindEvents = function () {
    document.documentElement.removeEventListener(this.moveEvent, this.onMove);
};

/*
    Pointer onMove event handler
    
    @param [event]: Pointer move event
*/
Pointer.prototype.onMove = function (e) {
    e = getActualEvent(e);
    e.preventDefault();
    currentPointer.update(new Point(eventToPoint(e, currentPointer.isTouch)));
};

Pointer.prototype.stop = function () {
    this.unbindEvents();
};

module.exports = Pointer;