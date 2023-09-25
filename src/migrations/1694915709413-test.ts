import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1694915709413 implements MigrationInterface {
    name = 'Test1694915709413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "coordinates" geometry(Point,4326), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "locationId" integer, CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "filePath" character varying NOT NULL, "size" integer NOT NULL, "format" character varying NOT NULL, "reportId" integer, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_fc126ad2804298ae0abd0b8013a" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_4bbd95557ccdf1153e93787c413" FOREIGN KEY ("reportId") REFERENCES "report"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_4bbd95557ccdf1153e93787c413"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_fc126ad2804298ae0abd0b8013a"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
