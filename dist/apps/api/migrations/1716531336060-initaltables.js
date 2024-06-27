"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initaltables1716531336060 = void 0;
class Initaltables1716531336060 {
    constructor() {
        this.name = 'Initaltables1716531336060';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "settings" ("id" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "brand" character varying NOT NULL, "facebook" character varying NOT NULL, "instagram" character varying NOT NULL, "x" character varying NOT NULL, "linkedin" character varying NOT NULL, "youtube" character varying NOT NULL, "tiktok" character varying NOT NULL, CONSTRAINT "PK_0669fe20e252eb692bf4d344975" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "settings"`);
    }
}
exports.Initaltables1716531336060 = Initaltables1716531336060;
//# sourceMappingURL=1716531336060-initaltables.js.map