(function () {
    var socket = io();

    $('#message').keydown(function (event) {
        if (event.keyCode == 13) {
            var user = {name: 'link', message: $('#message').val()};
            console.log(event.keyCode);
            socket.emit('message', user);
            $('.message-container').append(
                `<div class="message message-right">
                    <a class="detail">${user.message}&nbsp;&nbsp;</a>
                    <i class="sound icon"></i>
                    <a class="detail">${user.name}</a>
                 </div>`
            );
        }
    });

    socket.on('message', function (data) {
        $('.message-container').append(
            `<div class="message message-left">
                   <a class="detail">${data.name}&nbsp;&nbsp;</a>
                   <i class="sound icon"></i>
                   <a class="detail">${data.message}</a>
                </div>`
        );
    });
})();