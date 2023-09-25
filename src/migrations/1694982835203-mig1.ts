import { MigrationInterface, QueryRunner } from "typeorm";

export class Mig11694982835203 implements MigrationInterface {
    name = 'Mig11694982835203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" ADD "date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "report" DROP COLUMN "date"`);
    }

}
