import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrate31695066175109 implements MigrationInterface {
    name = 'Migrate31695066175109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."report_eventtype_enum" RENAME TO "report_eventtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."report_eventtype_enum" AS ENUM('EARTHQUAKE', 'FLOOD', 'WILDFIRE', 'TSUNAMI', 'VOLCANO', 'HURRICANE')`);
        await queryRunner.query(`ALTER TABLE "report" ALTER COLUMN "eventType" TYPE "public"."report_eventtype_enum" USING "eventType"::"text"::"public"."report_eventtype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."report_eventtype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."report_eventtype_enum_old" AS ENUM('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')`);
        await queryRunner.query(`ALTER TABLE "report" ALTER COLUMN "eventType" TYPE "public"."report_eventtype_enum_old" USING "eventType"::"text"::"public"."report_eventtype_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."report_eventtype_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."report_eventtype_enum_old" RENAME TO "report_eventtype_enum"`);
    }

}
