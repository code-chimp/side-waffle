module.exports = function (pattern, number) {
    var buf = [];

    while (number > 0) {
        buf.push(pattern);
        number--;
    }

    return buf.join('');
};