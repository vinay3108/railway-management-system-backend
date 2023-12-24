import { MigrationInterface, QueryRunner } from "typeorm"

export class AddTriggersToClassSeats1703422681023 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
        `CREATE TRIGGER before_insert_on_classseats BEFORE INSERT ON classseats
        FOR EACH ROW BEGIN
            IF DATEDIFF(CURDATE(), NEW.doj) > 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Check date!!!';
            END IF;
            IF NEW.fare <= 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Check fare!!!';
            END IF;
            IF NEW.seatsleft <= 0 THEN
                SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Check seats!!!';
            END IF;
        END ;`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         // Drop the trigger if needed during rollback
         await queryRunner.query(`DROP TRIGGER IF EXISTS before_insert_on_classseats`);
    }

}
