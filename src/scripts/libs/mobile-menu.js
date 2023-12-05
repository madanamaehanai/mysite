class Mobilemenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector(".humburgermenu__btn");
        this.DOM.container = document.querySelector(".topbarcomponent");
        // this.DOM.cover = document.querySelector(".mobile-menu__cover");
        // this.eventType = this._getEventType();
        // this._addEvent();
        this.DOM.btn.addEventListener('click', this._toggle.bind(this));
    }
    _getEventType() {
        const isTouchCapable = "ontouchstart" in window;
        return isTouchCapable ? "touchstart" : "click";
    }
    _toggle() {
        this.DOM.container.classList.toggle("menu-open");
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    }

    _removeEvent() {
        this.DOM.btn.removeEventListener(this.eventType, this._toggle.bind(this));
    }
    // _addEvent() {
    // this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
    // this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
    //   }
}


export default Mobilemenu;



// class MobileMenu {
//     constructor() {
//         this.DOM = {};
//         this.DOM.btn = document.querySelector(".humburgermenu__btn");
//         // this.DOM.cover = document.querySelector(".mobile-menu__cover");
//         // this.eventType = this._getEventType();
//         // this._addEvent();
//         this._toggle = this._toggle.bind(this);
//     }
//     // _getEventType() {
//     //     const isTouchCapable = "ontouchstart" in window;
//     //     return isTouchCapable ? "touchstart" : "click";
//     // }
//     _toggle() {
//         this.DOM.container.classList.toggle("menu-open");
//     }
//     // _addEvent() {
//         // this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
//         // this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
//         //   }
//     }
// export default MobileMenu;