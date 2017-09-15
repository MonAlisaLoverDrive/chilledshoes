import * as $ from 'jquery';

class Component
{
    public selector: string;

    protected template: string;

    protected style: string;

    constructor(templateURL = undefined, styleURL = undefined)
    {
        console.log('test');

        if (templateURL !== undefined)
        {
            $.get('js/components/' + templateURL, (data) =>
            {
                this.template = data;
                ComponentManager.components.push(this);
            });
        }
        else
            ComponentManager.components.push(this);

        if (styleURL !== undefined)
            $('head').append('<link rel="stylesheet" href="js/components/' + styleURL + '">');
        else
            $('head').append(this.style);
    }

    public ToHTML()
    {
        return Component.Parse(this.template);
    };

    public static Parse(html)
    {
        for (let i = 0; i < ComponentManager.components.length; i++)
        {
            let component = ComponentManager.components[i];
            console.log(component.selector);
            html = html.replace(RegExp('<'+component.selector.toLowerCase()+'>(.*?)<\/'+component.selector.toLowerCase()+'>'), component.ToHTML())
        }
        html = html.replace(/{{(.*?)}}/g, (str, result) =>
        {
            return eval(result);
        });
        console.log(html);
        return html;
    }
}