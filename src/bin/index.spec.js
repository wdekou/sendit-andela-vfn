import assert from 'assert';
import square from './square';

describe('Feature ', () => {
  it('squar', () => {
    assert(square(2), 4);
  });
});
