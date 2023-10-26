import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    //System under test
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = createSut();
    const consoleSpyon = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpyon).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:" and msg', () => {
    const sut = createSut();
    const consoleSpyon = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpyon).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
