import { AhlcgPage } from './app.po';

describe('ahlcg App', () => {
  let page: AhlcgPage;

  beforeEach(() => {
    page = new AhlcgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
