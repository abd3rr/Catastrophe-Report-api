import { MigrationInterface, QueryRunner } from "typeorm";

export class Test21695421984910 implements MigrationInterface {
    name = 'Test21695421984910'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "size" double precision NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "size"`);
        await queryRunner.query(`ALTER TABLE "image" ADD "size" integer NOT NULL`);
    }

}
