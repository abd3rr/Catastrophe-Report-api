import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate21695064852000 implements MigrationInterface {
    name = 'Migrate21695064852000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "image" ADD "updated_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "created_at"`);
    }

}
