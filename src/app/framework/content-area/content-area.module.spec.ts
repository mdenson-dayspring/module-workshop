import { ContentAreaModule } from './content-area.module';

describe('ContentAreaModule', () => {
  let contentAreaModule: ContentAreaModule;

  beforeEach(() => {
    contentAreaModule = new ContentAreaModule();
  });

  it('should create an instance', () => {
    expect(contentAreaModule).toBeTruthy();
  });
});
