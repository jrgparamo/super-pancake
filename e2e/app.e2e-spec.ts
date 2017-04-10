import { ArgosNewAgePage } from './app.po';

describe('argos-new-age App', () => {
  let page: ArgosNewAgePage;

  beforeEach(() => {
    page = new ArgosNewAgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
