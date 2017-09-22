;(function () {
    $('.upload').on('change', "input[type='file']", function () {
        // $('.control:after').append(
        //     // {"box-shadow": "0 0 10px rgba(0, 139, 69, 0.8) inset"}
        //     '<style>.control::after{ box-shadow: 0 0 10px rgba(0, 139, 69, 0.8) inset; }</style>'
        // );

        document.styleSheets[0].removeRule()

        document.styleSheets[0].addRule('control::after', 'box-shadow: 0 0 10px rgba(0, 139, 69, 0.8) inset');
        document.styleSheets[0].insertRule('.control::after { box-shadow: 0 0 10px rgba(0, 139, 69, 0.8) inset', 0);

        var path = $(this).val();
        console.log(path);
        var name = path.split('\\');
        $('.name input').val(name[name.length - 1]);
    });
})();