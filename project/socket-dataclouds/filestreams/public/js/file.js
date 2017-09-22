;(function () {
    const upload = function (name) {
        let file = document.getElementById(name).files[0];
        console.log(file.type);
    };
})();