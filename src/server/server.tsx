import middleware from './middleware';
import template from './template';

export default () => ({
  renderCallback: ({ SkuProvider, getBodyTags, getHeadTags }, req, res) => {
    const app = renderToString(
      <SkuProvider>
        <App />
      </SkuProvider>,
    );
    res.send(
      template({ headTags: getHeadTags(), bodyTags: getBodyTags(), app }),
    );
  },
  middleware,
  onStart: (app) => {
    console.log('My app started 👯‍♀️!');
    app.keepAliveTimeout = 20000;
  },
});