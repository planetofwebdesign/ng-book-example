import { NgBookExamplePage } from './app.po';

describe('ng-book-example App', () => {
  let page: NgBookExamplePage;

  beforeEach(() => {
    page = new NgBookExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
