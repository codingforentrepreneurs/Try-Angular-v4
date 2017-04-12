import { SrvupPage } from './app.po';

describe('srvup App', () => {
  let page: SrvupPage;

  beforeEach(() => {
    page = new SrvupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
