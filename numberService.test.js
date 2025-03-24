import { NumberService } from './numberService.js';

describe('NumberService', () => {
    let numberService;

    beforeEach(() => {        
        numberService = new NumberService();
    });

    it('should return a number', () => {
        expect(Number.isInteger(numberService.generateNumber())).toBe(true);
    });
});