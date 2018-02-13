import { BadenblogPage } from './app.po';

describe('badenblog App', function() {
  let page: BadenblogPage;

  beforeEach(() => {
    page = new BadenblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
