export default class Element {
    constructor(element) {
        this.$el = document.querySelector(element);
        this.init();
    }

    init () {}

    onShow () {
        this.$el.classList.remove('hide');
    }

    onHide () {
        this.$el.classList.add('hide');
    }
}
