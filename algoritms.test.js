const { primeiroProblema, segundoProblema, terceiroProblema } = require("./algoritms");

beforeAll(() => {
    console.log = jest.fn();
});

describe("testing primeiroProblema", () => {
    it("should print ' 34' on console", () => {
        primeiroProblema(10);
        expect(console.log).toHaveBeenLastCalledWith(" 34");
    });

    it("should print '0' on console", () => {
        primeiroProblema(0);
        expect(console.log).toHaveBeenLastCalledWith("0");
    });

    it("should print ' 1' on console", () => {
        primeiroProblema(2);
        expect(console.log).toHaveBeenLastCalledWith(" 1");
    });
});

describe("testing segundoProblema", () => {
    /*
    NOTA

    Não foi possível forçar a execução da
    linha 25 deste algoritmo!
    */
    
    it("should print '0' on console", () => {
        segundoProblema(10, 20, []);
        expect(console.log).toHaveBeenLastCalledWith(0);
    });
    
    it("should print '0' on console", () => {
        segundoProblema(10, 0, []);
        expect(console.log).toHaveBeenLastCalledWith(0);
    });
    
    it("should print '0' on console", () => {
        segundoProblema(1, 7, []);
        expect(console.log).toHaveBeenLastCalledWith(0);
    });
});

describe("testing terceiroProblema", () => {    
    /*
    NOTA

    O código desta função parece quebrado!
    */
    
    it("should print '8 ' e '9 ' on console", () => {
        terceiroProblema([8, 9]);
        expect(console.log).toHaveBeenCalledWith("8 ");
        expect(console.log).toHaveBeenLastCalledWith("9 ");
    });

    it("should print '9 ' on console", () => {
        terceiroProblema([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(console.log).toHaveBeenLastCalledWith("9 ");
    });

    it("should print '0 ' on console", () => {
        terceiroProblema([12, 24, 76]);
        expect(console.log).toHaveBeenCalledWith("3 ");
    });

    it("should print '0 ' on console", () => {
        terceiroProblema([3, 9, 1, 41, 79]);
        expect(console.log).toHaveBeenCalledWith("5 ");
    });
});