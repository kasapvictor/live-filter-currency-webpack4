import Element from './Element.js';
export default class Header extends Element {
    constructor(element) {
        super(element);
    }
    init() {
        this.$el.addEventListener('mouseover', hoverOn.bind(this));
        this.$el.addEventListener('mouseleave', hoverOut.bind(this));
    }
}

function hoverOn () {
    this.$el.querySelector('h1').style.color = 'tomato';
}

function hoverOut () {
    this.$el.querySelector('h1').style.color = 'skyblue';
}

