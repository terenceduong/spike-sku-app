import type { SkuConfig } from 'sku';

const skuConfig: SkuConfig = {
  clientEntry: 'src/client.tsx',
  environments: ['development', 'production'],
  orderImports: true,
  port: 3300,
  public: 'src/public',
  publicPath: '/path/to/public/assets/', // <-- Required for sku build output
  renderEntry: 'src/render.tsx',
  serverEntry: 'src/server/server.tsx',
  serverPort: 3301,
  target: 'dist',
} satisfies SkuConfig;

export default skuConfig;
