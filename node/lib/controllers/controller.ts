import * as mongoose from 'mongoose';
import { ParkSchema } from '../models/model';
import { Request, Response } from 'express';

const Park = mongoose.model('Park', ParkSchema);

export class ParkController {


}
