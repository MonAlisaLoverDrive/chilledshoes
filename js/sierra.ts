let $body = $('BodyContent');

$(window).on('load', () =>
{
    setTimeout(() =>
    {
        console.log(ComponentManager.components);
        for (let i = 0; i < ComponentManager.components.length; i++)
        {
            let component = ComponentManager.components[i];
            // '/<' + component.selector + '>(.*?)<\//' + component.selector + '>/g'
            console.log(component.ToHTML());
            $body.html($body.html().replace(RegExp('<'+component.selector.toLowerCase()+'>(.*?)<\/'+component.selector.toLowerCase()+'>'), component.ToHTML()));
            console.log(component.selector);
        }
    }, 50)

});