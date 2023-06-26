import { validate } from 'deep-email-validator';

export const isEmailValid = async (email) => {
    return validate(email)
}