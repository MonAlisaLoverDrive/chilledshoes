window.Sierra.Component = {};

window.Sierra.Component.Parse = function (html)
{
    for (let i = 0; i < ComponentManager.components.length; i++)
    {
        let component = ComponentManager.components[i];

        console.log(component.selector);
        if (html.indexOf('<' + component.selector.toLowerCase() + '>') !== -1)
            html = html.replace(new RegExp('<' + component.selector.toLowerCase() + '>(.*?)<\/' + component.selector.toLowerCase() + '>'), component.ToHTML());
    }
    html = html.replace(/{{(.*?)}}/g, (str, result) =>
    {
        return eval(result);
    });
    return html;
};

window.Sierra.Component.ToHTML = function ()
{
    return window.Sierra.Component.Parse(this.template);
};

window.Sierra.Component.Create = (selector, templateURL = undefined, styleURL = undefined) =>
{
    let component = {selector: selector};
    component.__proto__ = window.Sierra.Component;
    if (templateURL !== undefined)
    {
        $.get('js/components/' + templateURL, (data) =>
        {
            component.template = data;
            ComponentManager.components.push(component);
        });
    }
    else
        ComponentManager.components.push(component);

    if (styleURL !== undefined)
        $('head').append('<link rel="stylesheet" href="js/components/' + styleURL + '">');
    else
        $('head').append(selector.style);
};