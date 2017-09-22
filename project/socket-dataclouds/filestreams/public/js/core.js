;(function () {
    $('.upload').on('change', "input[type='file']", function () {
        var path = $(this).val();
        console.log(path);
        var name = path.split('\\');
        $('.name input').val(name[name.length - 1]);
    });
})();