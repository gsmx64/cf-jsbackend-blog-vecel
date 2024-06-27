"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingMessages = void 0;
class LoggingMessages {
    static log(message, code, dataForLog = null) {
        try {
            if ((process.env.NODE_ENV.trim() != 'production') &&
                (String(process.env.APP_LOGGING_ENABLE) === 'true')) {
                var repeat = '-';
                var decor = repeat.repeat(96);
                const user = (dataForLog != null) ? `User: ${dataForLog.user}` : 'User: Undefined';
                const rol = (dataForLog != null) ? ` - Role: ${dataForLog.role}` : ' - Role: Undefined';
                const datetime = ` - Date/Time: ${new Date(Date.now()).toLocaleString()}`;
                console.log(` \n${decor}\n >>> LOGGING RETURN: ${code}\n${decor}\n` +
                    ` >>> ${user}${rol}${datetime}\n${decor}`);
                console.log(message);
                console.log(`${decor} \n`);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.LoggingMessages = LoggingMessages;
//# sourceMappingURL=logging.messages.js.map