import { TutorialAppPage } from './app.po';

describe('tutorial-app App', () => {
  let page: TutorialAppPage;

  beforeEach(() => {
    page = new TutorialAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
