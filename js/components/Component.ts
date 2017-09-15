import * as $ from 'jquery';

export class Component
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
        let html = this.template;
        html = html.replace(/{{(.*?)}}/g, (str, result) =>
        {
            return eval(result);
        });
        return html;
    };
}