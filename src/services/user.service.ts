import { Inject, Injectable } from '@nestjs/common';
import { PG_CONNECTION } from '../constants';

@Injectable()
export class UserService {
  constructor(@Inject(PG_CONNECTION) private conn: any) {}
  async getUser(): Promise<any> {
    const res = await this.conn.query('SELECT * FROM users');
    return res.rows;
  }
}
