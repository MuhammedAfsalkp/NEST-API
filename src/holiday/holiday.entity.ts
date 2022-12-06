import { Prop, Schema } from '@nestjs/mongoose';
import  { Document } from 'mongoose';
import { BaseEntity } from 'src/utils/BaseEntity';
import { createSchema } from 'src/utils/createSchema';
import { OperatingHours } from './operating-hours.entity';



export type HolidayDocument = Holiday & Document;

@Schema({ timestamps: true, virtuals: true })
export class Holiday extends BaseEntity {
  @Prop({ required: true })
  key: string;

  

  // @Prop({  type: String, enum: Type, default: Type.STRING })
  // type: Type;

  
}

export const HolidaySchema = createSchema(Holiday);