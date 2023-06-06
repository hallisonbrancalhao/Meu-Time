import { AlreadyLoggedGuard } from './already-logged.guard';

describe('AlreadyLoggedGuard', () => {
  it('should be defined', () => {
    expect(new AlreadyLoggedGuard()).toBeDefined();
  });
});
