"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_URL_REGEX = exports.VALID_NUMBERS_REGEX = exports.VALID_EMAIL_REGEX = exports.VALID_PASSWORD_REGEX = exports.VALID_USERNAME_REGEX = void 0;
exports.VALID_USERNAME_REGEX = /^(?:[A-Za-z]{1,1})(?:[A-Za-z0-9._-]{2,19})/;
exports.VALID_PASSWORD_REGEX = /^(?=.[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\w !#$%&()*+,.:;<=>?@\|-])(?=.{8,20})/;
exports.VALID_EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
exports.VALID_NUMBERS_REGEX = /^(?=.*[0-9])(?=.{1,2})/;
exports.VALID_URL_REGEX = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/;
//# sourceMappingURL=validations.js.map