import { DialogLayoutModule } from './dialog-layout.module';

describe('DialogLayoutModule', () => {
  let dialogLayoutModule: DialogLayoutModule;

  beforeEach(() => {
    dialogLayoutModule = new DialogLayoutModule();
  });

  it('should create an instance', () => {
    expect(dialogLayoutModule).toBeTruthy();
  });
});
