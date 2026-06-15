# @testplane/globals

TypeScript global type declarations for [Testplane](https://github.com/gemini-testing/testplane).

Exposes `it`, `describe`, `beforeEach`, `afterEach`, `testplane` as ambient globals so you don't need to import them in every test file.

## Installation

```bash
npm install --save-dev @testplane/globals
```

Requires `testplane` >= 9.0.0 as a peer dependency.

## Usage

Add the package to the `types` array in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@testplane/globals"]
  }
}
```

Then use Testplane's globals in your tests without imports:

```ts
describe('my suite', () => {
  it('works', async ({browser}) => {
    await browser.url('/');
  });
});
```

## License

MIT
