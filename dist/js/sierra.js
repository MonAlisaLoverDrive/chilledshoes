'use strict';

sierra = {};

/*= = = = = = = = =
* Pages
* = = = = = = = = */
sierra.pages = {};

sierra.pages.load = function (page) {
    $.get('pages/' + page + '.html', function (data) {
        var $content = $('div.page div.content');
        $content.html(data);
    }, 'text');
};

/*= = = = = = = = =
* Parties
* = = = = = = = = */
sierra.pages.load('test');

sierra.generateGrid = function (max) {
    var result = '';
    var sum = 0;
    var full_line = false;
    for (var i = 0; i < max; i++) {
        var inner = '<div class="tile-content">\n' + '\n' + '            <h1>Chilled Shoes</h1>\n' + '            <h2>11.09.2017</h2>\n' + '\n' + '        </div>';
        var type = 'square';
        var rand = Math.random();
        if (rand > 0.5 && sum === 0 && !full_line) {
            type = 'wide lg';
            sum += 4;
            full_line = true;
        } else if (rand > 0.25 && sum <= 2) {
            type = 'wide sm';
            sum += 2;
            full_line = false;
        } else {
            sum += 1;
            full_line = false;
        }

        if (sum >= 4) sum = 0;
        result += '<div class="tile ' + type + '">' + inner + '</div>';
    }

    $('div.grid').html(result);
};
//# sourceMappingURL=sierra.js.map