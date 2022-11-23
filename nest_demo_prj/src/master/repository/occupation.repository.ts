import { pgPool } from '../../db';
import { Occupation } from '../models/occupation';

export class OccupationRepository {
  async getAll(): Promise<Occupation[]> {
    const { rows } = await pgPool.query(`SELECT * FROM master_occupation`);
    return rows;
  }

  async getById(occupationId: number): Promise<Occupation | null> {
    const { rows } = await pgPool.query(
      `SELECT * FROM master_occupation WHERE master_occupation.id = ${occupationId}`,
    );
    if (rows[0] == undefined) {
      return null;
    }
    return rows[0];
  }
}
