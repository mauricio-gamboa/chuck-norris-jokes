function hasCorrectSize(password, size) {
    return password.length <= size;
}

function containsConsecutiveSubstring(password, substringSize) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < password.length - (substringSize - 1); i++) {
        const alphabetIndex = alphabet.indexOf(password[i]);

        if (alphabetIndex !== -1) {
            const alphabetSubstring = alphabet.substring(alphabetIndex, alphabetIndex + substringSize);
            const passwordSubstring = password.substring(i, i + substringSize);

            if (alphabetSubstring === passwordSubstring) {
                return true;
            }
        }
    }

    return false;
}

function containsPairOfLetters(password) {
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i + 1]) {
            return true;
        }
    }

    return false;
}

function hasCorrectSize(password, size) {
    return password.length <= size;
}

function containsOnlyLowercaseLetters(password) {
    return /^[a-z]+$/.test(password);
}

function containsForbiddenLetters(password) {
    const forbiddenLetters = ['i', 'o', 'l'];

    for (let i = 0; i < forbiddenLetters.length; i++) {
        if (password.includes(forbiddenLetters[i])) {
            return true;
        }
    }

    return false;
}

function getPasswordErrors(password) {
    const ERRORS = {
        CORRECT_SIZE: 'Passwords must not be longer than 32 characters.',
        CONSECUTIVE_STRING: 'Passwords must include one increasing straight of at least three letters, for example abc or cde.',
        PAIRS_OF_LETTERS: 'Passwords must contain at least two non-overlapping pairs of letters, for example, aa or cc.',
        ONLY_LOWERCASE: 'Passwords must contain lower case alphabetic characters.',
        FORBIDDEN_LETTERS: 'Passwords must not contain the letters i, o, or l.'
    };

    let errors = [];

    if (!hasCorrectSize(password)) {
        errors.push(ERRORS.CORRECT_SIZE);
    }

    if (!containsConsecutiveSubstring(password)) {
        errors.push(ERRORS.CONSECUTIVE_STRING);
    }

    if (!containsPairOfLetters(password)) {
        errors.push(ERRORS.PAIRS_OF_LETTERS);
    }

    if (!containsOnlyLowercaseLetters(password)) {
        errors.push(ERRORS.ONLY_LOWERCASE);
    }

    if (containsForbiddenLetters(password)) {
        errors.push(ERRORS.FORBIDDEN_LETTERS);
    }

    return errors;
}

export {
    hasCorrectSize,
    containsConsecutiveSubstring,
    containsPairOfLetters,
    containsOnlyLowercaseLetters,
    containsForbiddenLetters,
    getPasswordErrors
}