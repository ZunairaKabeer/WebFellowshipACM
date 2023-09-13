export default class View{
    $ = {};
    $$ = {};

    constructor() {
        this.$.menu = this.#qs('[data-id="menu"]');
        this.$.menuItems = this.#qs('[data-id="menu-items"]');
        this.$.menuBtn = this.#qs('[data-id="menu-btn"]');
        this.$.resetBtn = this.#qs('[data-id="reset-btn"]');
        this.$.newRoundBtn = this.#qs('[data-id="new-round-btn"]');
        this.$.modal = this.#qs('[data-id="modal"]');
        this.$.modalText = this.#qs('[data-id="modal-text"]');
        this.$.modalBtn = this.#qs('[data-id="modal-btn"]');
        this.$.turn = this.#qs('[data-id="turn"]');

        this.$$.squares = this.#qsAll('[data-id="square"]');

        this.$.menuBtn.addEventListener("click", () => {
            this.#toggleMenu();
        });
    }

    bindGameResetEvent(handler) {
        this.$.resetBtn.addEventListener("click", handler);
        this.$.modalBtn.addEventListener("click", handler);
    }

    bindNewRoundEvent(handler) {
        this.$.newRoundBtn.addEventListener("click", handler);
    }

    bindPlayerMoveEvent(handler) {
        this.$$.squares.forEach((square) => {
            square.addEventListener("click", () => handler(square));
        });
    }

    openModal(message) {
        this.$.modal.classList.remove("hidden");
        this.$.modalText.innerText = message;
    }

    closeAll(){
        this.#closeModal();
        this.#closeMenu();
    }

    clearMoves(){
        this.$$.squares.forEach((square)=> {
            square.replaceChildren();
        });
    }

    clearMoves(){
        this.$$.squares.forEach((square)=> {
            square.replaceChildren();
        });
    }

    #closeModal(){
        this.$.modal.classList.add("hidden");
    }

    #closeMenu(){
        this.$.menuItems.classList.add('hidden');
        this.$.menuBtn.classList.remove('border');

        const icon = this.$.menuBtn.querySelector("i");

        icon.classList.add("fa-chevron-down");
        icon.classList.remove("fa-chevron-up");
    }

    #toggleMenu() {
        this.$.menuItems.classList.toggle("hidden");
        this.$.menuBtn.classList.toggle("border");

        const icon = this.$.menuBtn.querySelector("i");

        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
    }

    handlePlayerMove(squareEl, player) {
        const icon = document.createElement("i");
        icon.classList.add
        ("fa-solid", player.iconClass, player.colorClass);
        squareEl.replaceChildren(icon);
    }

    setTurnIndicator(players) {
        const icon = document.createElement("i");
        const label = document.createElement("p");

        icon.classList.add("fa-solid",players.colorClass, players.iconClass);
    


      label.classList.add(players.colorClass);

        label.innerText = ` ${players.name}, you are up!`;

        this.$.turn.replaceChildren(icon, label);
    }

    #qs(selector, parent) {
        const el = parent
            ? parent.querySelector(selector)
            : document.querySelector(selector);

        if (!el) throw new Error("Element not found");

        return el;
    }

    #qsAll(selector, parent) {

        const elList = document.querySelectorAll(selector);

        if (!elList) throw new Error("Element not found");

        return elList;
}
}
