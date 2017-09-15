var $body = $('BodyContent');
$(window).on('load', function () {
    setTimeout(function () {
        console.log(ComponentManager.components);
        for (var i = 0; i < ComponentManager.components.length; i++) {
            var component = ComponentManager.components[i];
            // '/<' + component.selector + '>(.*?)<\//' + component.selector + '>/g'
            console.log(component.ToHTML());
            $body.html($body.html().replace(RegExp('<' + component.selector.toLowerCase() + '>(.*?)<\/' + component.selector.toLowerCase() + '>'), component.ToHTML()));
            console.log(component.selector);
        }
    }, 50);
});
