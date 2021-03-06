import { objectUtil, ZodError } from 'zod';
import Model from '../models';

export interface ServiceError {
  error: ZodError;
}

abstract class Service<T> {
  constructor(protected model: Model<T>) {}

  async create (obj: T): Promise<T | null | ServiceError> {
    return this.model.create(obj);
  }

  async read (): Promise<T[]> {
    return this.model.read();
  }

  async readOne (id: string): Promise<T | null | ServiceError> {
    return this.model.readOne(id);
  }
}

export default Service;
