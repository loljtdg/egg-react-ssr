'use strict';

const Controller = require('egg').Controller;

const React = require('react')
const ReactDOMServer = require('react-dom/server');

async function getRenderData(ctx, path) {

  const reactHome = require(path).default
  const initialProps = await reactHome.getInitialProps(ctx)
  const reactHtmlString = ReactDOMServer.renderToString(React.createElement(reactHome, initialProps))

  return { reactHtmlString, props: JSON.stringify(initialProps), js: "/public/web/index.js" }
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    const { reactHtmlString, props, js } = await getRenderData(ctx, '../web/home');
    await ctx.render('base.nj', { reactHtmlString, props, js })
  }
}

module.exports = HomeController;

