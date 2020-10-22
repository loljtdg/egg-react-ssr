class AppBootHook {

    constructor(app) {
        this.app = app;
    }

    async configWillLoad() {

    }

    async didLoad() {
        // babel
        // 请将你的插件项目中 app.beforeStart 中的代码置于此处。
        require("babel-polyfill");
        require("babel-register")({
            only: [/view\/*/]
        });
    }

    async willReady() {
        // 请将你的应用项目中 app.beforeStart 中的代码置于此处。
    }

    async serverDidReady() {

    }
}

module.exports = AppBootHook;