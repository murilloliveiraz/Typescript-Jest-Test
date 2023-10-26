import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  it('should apply no discount', () => {
    //System under test
    const sut = createSut(NoDiscount);
    expect(sut.calculate(10)).toBeCloseTo(10);
  });

  it('should apply 10% discount', () => {
    //System under test
    const sut = createSut(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });

  it('should apply 50% discount', () => {
    //System under test
    const sut = createSut(FiftyPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(5);
  });
});
