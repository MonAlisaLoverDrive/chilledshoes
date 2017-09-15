import {Component} from '../Component';

class LeftBar extends Component
{
    constructor()
    {
        super('LeftBar/LeftBar.html', 'LeftBar/LeftBar.css');
        this.selector = 'LeftBar';
    }
}
new LeftBar();