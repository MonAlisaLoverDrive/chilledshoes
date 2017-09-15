window.Sierra = {};

$body = $('body BodyContent');

$(window).on('load', () =>
{
    setTimeout(() =>
    {
        $body.html(window.Sierra.Component.Parse($body.html()));
    });
});