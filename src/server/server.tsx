import 'braid-design-system/reset';

import { renderToString } from 'react-dom/server';

import App from '../App/App';

// import middleware from './middleware';
// import template from './template';

export default () => ({
  renderCallback: ({ SkuProvider, getBodyTags, getHeadTags }, req, res) => {
    console.log('rendercallback in server.tsx');
    const app = renderToString(
      <SkuProvider>
          <App environment="development" />
      </SkuProvider>,
    );
    res.send(app);
    // res.send(
    //   template({ headTags: getHeadTags(), bodyTags: getBodyTags(), app }),
    // );
  },
  //   middleware: [],
  onStart: (app) => {
    console.log('My app started 👯‍♀️!');
    app.keepAliveTimeout = 20000;
  },
});
