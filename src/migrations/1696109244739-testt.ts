import { MigrationInterface, QueryRunner } from "typeorm";

export class Testt1696109244739 implements MigrationInterface {
    name = 'Testt1696109244739'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "location" ("id" SERIAL NOT NULL, "coordinates" geometry(Point,4326), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "event_type" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_d968f34984d7d85d96f782872fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "severity" ("id" SERIAL NOT NULL, "level" character varying NOT NULL, CONSTRAINT "PK_027b3e5a66b756a3b9c5c9247bf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "report" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" text NOT NULL, "verified" boolean NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "eventTypeId" integer, "severityId" integer, "locationId" integer, CONSTRAINT "PK_99e4d0bea58cba73c57f935a546" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "filePath" character varying NOT NULL, "size" double precision NOT NULL, "format" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "reportId" integer, CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_c509d8d447022e4f3f03ca41ff7" FOREIGN KEY ("eventTypeId") REFERENCES "event_type"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_bc39d32a356ec27db404d8e8f9f" FOREIGN KEY ("severityId") REFERENCES "severity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "report" ADD CONSTRAINT "FK_fc126ad2804298ae0abd0b8013a" FOREIGN KEY ("locationId") REFERENCES "location"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_4bbd95557ccdf1153e93787c413" FOREIGN KEY ("reportId") REFERENCES "report"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_4bbd95557ccdf1153e93787c413"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_fc126ad2804298ae0abd0b8013a"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_bc39d32a356ec27db404d8e8f9f"`);
        await queryRunner.query(`ALTER TABLE "report" DROP CONSTRAINT "FK_c509d8d447022e4f3f03ca41ff7"`);
        await queryRunner.query(`DROP TABLE "image"`);
        await queryRunner.query(`DROP TABLE "report"`);
        await queryRunner.query(`DROP TABLE "severity"`);
        await queryRunner.query(`DROP TABLE "event_type"`);
        await queryRunner.query(`DROP TABLE "location"`);
    }

}
