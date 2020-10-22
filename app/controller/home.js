'use strict';

const Controller = require('egg').Controller;

const React = require('react')
const ReactDOMServer = require('react-dom/server');

async function getReactHtmlString(ctx, path) {

  const reactHome = require(path).default
  const initialProps = await reactHome.getInitialProps(ctx)
  const reactHtmlString = ReactDOMServer.renderToString(React.createElement(reactHome, initialProps))
  return reactHtmlString
}

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    ctx.body = await getReactHtmlString(ctx, '../view/home');
  }
}

module.exports = HomeController;
