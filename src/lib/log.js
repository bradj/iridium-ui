var Log = {
    error: function () {
        console.error(...arguments);
    },

    info: function (msg) {
        console.log('INFO', ...arguments);
    },

    debug: function (msg) {
        console.log('DEBUG', ...arguments);
    }
}

export default Log