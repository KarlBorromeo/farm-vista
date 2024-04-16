import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatedTable1713250414663 implements MigrationInterface {
    name = 'CreatedTable1713250414663'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "aub" ("aub_id" SERIAL NOT NULL, "aa" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_909f8130b6f0f160702026c178f" PRIMARY KEY ("aub_id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "aub"`);
    }

}
