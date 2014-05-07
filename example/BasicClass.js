
/**
 * This file represents a basic class in JS.
 *
 * @class BasicClass
 * @module Classes
 */
function BasicClass() {
}

BasicClass.prototype = {
    /**
     * A simple property.
     *
     * @property instanceVar
     * @type Number
     * @default 1
     */
    instanceVar: 1,

    /**
     * Another simple property.
     *
     * @property instanceVar2
     * @type Number
     * @default 2
     */
    instanceVar2: 2,

    /**
     * A simple method that does something and returns nothing.
     *
     * @method simpleMethod
     */
    simpleMethod: function () {},

    /**
     * A chainable method.
     *
     * @method chainableMethod
     * @chainable
     */
    chainableMethod: function () {
        return this;
    },

    /**
     * Takes params and returns something.
     *
     * @method multTwo
     * @param n {Number} some number
     * @return `n * 2`
     */
    multTwo: function (n) {
        return n * 2;
    },

    /**
     * Another simple method to take up space.
     *
     * @method simpleA
     */
    simpleA: function () {},

    /**
     * Another simple method to take up space.
     *
     * @method simpleB
     */
    simpleB: function () {},

    /**
     * Another simple method to take up space.
     *
     * @method simpleC
     */
    simpleC: function () {},

    /**
     * Another simple method to take up space.
     *
     * @method simpleD
     */
    simpleD: function () {},
    /**
     * Another simple method to take up space.
     *
     * @method simpleE
     */
    simpleE: function () {},
    /**
     * Another simple method to take up space.
     *
     * @method simpleF
     */
    simpleF: function () {},
    /**
     * Another simple method to take up space.
     *
     * @method simpleG
     */
    simpleG: function () {}
};

