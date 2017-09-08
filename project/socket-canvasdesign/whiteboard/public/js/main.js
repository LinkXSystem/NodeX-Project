(function () {
    'use strict';
    var canvas = document.getElementById('whiteboard');
    //注意：Canvas的宽高的决定坐标的关键因素
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight - 10;

    var context = canvas.getContext('2d');
    var socket = io();

    var current = {color: 'black'};

    var drawring = false;

    $('#whiteboard').on('mousedown', function (e) {
        drawring = true;
        current.x = e.clientX;
        current.y = e.clientY;
    });
    $('#whiteboard').on('mouseup' , function (e) {
        if (!drawring) {return;}
        drawring = false;
        drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
    });
    $('#whiteboard').on('mouseout', function (e) {
        if (!drawring) {return;}
        drawring = false;
        drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
    });
    $('#whiteboard').on('mousemove', throttle(mousemove, 10));

    $('.color').on('click', function () {
        current.color = this.className.split(' ')[2];
    });

    $('#clean').on('click', function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
    });

    socket.on('drawing', emitevent);

    $(window).on('resize', resize);

    function throttle(callback, delay) {
        var call = new Date().getTime();

        return function () {
            var time = new Date().getTime();

            if ((time - call) >= delay) {
                call = time;
                callback.apply(null, arguments);
            }
        };
    }

    function mousemove(e) {
        if (!drawring) {return;}
        drawLine(current.x, current.y, e.clientX, e.clientY, current.color, true);
        current.x = e.clientX;
        current.y = e.clientY;
    }

    function drawLine(x0, y0, x1, y1, color, emit) {
        context.beginPath();
        context.moveTo(x0, y0);
        context.lineTo(x1, y1);
        context.strokeStyle = color;
        context.lineWidth = 2;
        context.stroke();
        context.closePath();

        if (!emit) {return;}

        var w = canvas.width;
        var h = canvas.height;

        socket.emit('drawing', {
            x0: x0 / w,
            y0: y0 / h,
            x1: x1 / w,
            y1: y1 / h,
            color: color
        });
    }

    function emitevent(data) {
        var w = $('#whiteboard').width() ;
        var h = $('#whiteboard').height();

        drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color);
    }

    function resize() {
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight - 10;
    }
})();