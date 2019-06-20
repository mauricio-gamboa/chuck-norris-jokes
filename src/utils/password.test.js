import * as password from '../utils/password';

describe('password utility', () => {
    describe('hasCorrectSize', () => {
        test('returns true if the size of the password is correct', () => {
            expect(password.hasCorrectSize('12345', 5)).toBe(true);
        });

        test('returns true if the size of the password is correct', () => {
            expect(password.hasCorrectSize('1234', 5)).toBe(true);
        });

        test('returns false if the size of the password is correct', () => {
            expect(password.hasCorrectSize('123456', 5)).toBe(false);
        });
    });

    describe('isEmpty', () => {
        test('returns true if nothing is passed to it', () => {
            expect(password.isEmpty()).toBe(true);
        });

        test('returns true if an empty string is passed to it', () => {
            expect(password.isEmpty('')).toBe(true);
        });

        test('returns false if a string is passed to it', () => {
            expect(password.isEmpty('something')).toBe(false);
        });
    });

    describe('containsConsecutiveSubstring', () => {
        test('returns true if the string contains a consecutive substring', () => {
            expect(password.containsConsecutiveSubstring('asasabcas', 3)).toBe(true);
        });

        test('returns true if the string contains a consecutive substring', () => {
            expect(password.containsConsecutiveSubstring('asdefgh', 3)).toBe(true);
        });

        test('returns false if the string does not contain a consecutive substring', () => {
            expect(password.containsConsecutiveSubstring('hhjnkhu', 3)).toBe(false);
        });

        test('returns false if the string does not contain a consecutive substring', () => {
            expect(password.containsConsecutiveSubstring('cba', 3)).toBe(false);
        });
    });

    describe('containsPairOfLetters', () => {
        test('returns true if it contains a pair of letters', () => {
            expect(password.containsPairOfLetters('asddpov')).toBe(true);
        });

        test('returns true if it contains a pair of letters', () => {
            expect(password.containsPairOfLetters('aspovyy')).toBe(true);
        });

        test('returns false if it does not contain a pair of letters', () => {
            expect(password.containsPairOfLetters('aboji')).toBe(false);
        });
    });

    describe('containsOnlyLowercaseLetters', () => {
        test('returns true if it contains only lower case letters', () => {
            expect(password.containsOnlyLowercaseLetters('askojeo')).toBe(true);
        });

        test('returns false if it contains uppercase case letters', () => {
            expect(password.containsOnlyLowercaseLetters('askojDeo')).toBe(false);
        });

        test('returns false if it contains numbers', () => {
            expect(password.containsOnlyLowercaseLetters('askoj5eo')).toBe(false);
        });

        test('returns false if it contains special characters', () => {
            expect(password.containsOnlyLowercaseLetters('askoj%eo')).toBe(false);
        });
    });

    describe('containsForbiddenLetters', () => {
        test('returns true if it contains i', () => {
            expect(password.containsForbiddenLetters('aaaai')).toBe(true);
        });

        test('returns true if it contains o', () => {
            expect(password.containsForbiddenLetters('oluuu')).toBe(true);
        });

        test('returns true if it contains l', () => {
            expect(password.containsForbiddenLetters('kkkkkl')).toBe(true);
        });

        test('returns false if it does not contain forbidden letters', () => {
            expect(password.containsForbiddenLetters('jhgtsse')).toBe(false);
        });
    });

    describe('getPasswordErrors', () => {
        test('returns errors if the password is not correct size error', () => {
            expect(password.getPasswordErrors('123456').length > 0).toBe(true);
        });

        test('returns errors if the password is empty', () => {
            expect(password.getPasswordErrors('').length > 0).toBe(true);
        });

        test('returns errors if the password does not contain consecutive letters', () => {
            expect(password.getPasswordErrors('aceg').length > 0).toBe(true);
        });

        test('returns errors if it does not contain a pair of letters', () => {
            expect(password.getPasswordErrors('aceg').length > 0).toBe(true);
        });

        test('returns errors if it contains uppercase case letters', () => {
            expect(password.getPasswordErrors('askojDeo').length > 0).toBe(true);
        });

        test('returns errors if it contains numbers', () => {
            expect(password.getPasswordErrors('askoj5eo').length > 0).toBe(true);
        });

        test('returns errors if it contains special characters', () => {
            expect(password.getPasswordErrors('askoj%eo').length > 0).toBe(true);
        });

        test('returns errors if it contains i', () => {
            expect(password.getPasswordErrors('aaaai').length > 0).toBe(true);
        });

        test('returns errors if it contains o', () => {
            expect(password.getPasswordErrors('oluuu').length > 0).toBe(true);
        });

        test('returns errors if it contains l', () => {
            expect(password.getPasswordErrors('kkkkkl').length > 0).toBe(true);
        });

        test('it does not return errors if the password is valid', () => {
            expect(password.getPasswordErrors('asdfghabcmnjuu').length === 0).toBe(true);
        });
    });
});
