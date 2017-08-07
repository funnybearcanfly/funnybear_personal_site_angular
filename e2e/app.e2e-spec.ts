import { FunnybearPersonalSiteAngularPage } from './app.po';

describe('funnybear-personal-site-angular App', () => {
  let page: FunnybearPersonalSiteAngularPage;

  beforeEach(() => {
    page = new FunnybearPersonalSiteAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
