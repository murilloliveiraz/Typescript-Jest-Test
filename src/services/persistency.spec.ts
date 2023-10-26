import { Persistency } from './persistency';

describe('Persistency', () => {
  it('should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpyon = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpyon).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpyon = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpyon).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
