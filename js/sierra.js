sierra = {};

/*= = = = = = = = =
* Pages
* = = = = = = = = */
sierra.pages = {};

sierra.pages.load = (page) =>
{
    $.get('pages/' + page + '.html', (data) =>
    {
        let $content = $('div.page div.content');
        $content.html(data);
    }, 'text');
};

/*= = = = = = = = =
* Parties
* = = = = = = = = */
sierra.pages.load('test');

sierra.generateGrid = (max)=>
{
    let result = '';
    let sum = 0;
    let full_line = false;
    for (let i = 0; i < max; i++)
    {
        let inner = '<div class="tile-content">\n' +
            '\n' +
            '            <h1>Chilled Shoes</h1>\n' +
            '            <h2>11.09.2017</h2>\n' +
            '\n' +
            '        </div>';
        let type = 'square';
        let rand =Math.random();
        if (rand > 0.5 && sum === 0 && !full_line)
        {
            type = 'wide lg';
            sum += 4;
            full_line = true;
        }
        else if (rand > 0.25 && sum <= 2)
        {
            type = 'wide sm';
            sum += 2;
            full_line = false;
        }
        else
        {
            sum += 1;
            full_line = false;
        }

        if (sum >= 4)
            sum = 0;
        result += '<div class="tile '  + type + '">' + inner + '</div>';
    }

    $('div.grid').html(result);
};