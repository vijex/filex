import { VaultModule } from './vault.module';

describe('VaultModule', () => {
  let vaultModule: VaultModule;

  beforeEach(() => {
    vaultModule = new VaultModule();
  });

  it('should create an instance', () => {
    expect(vaultModule).toBeTruthy();
  });
});
