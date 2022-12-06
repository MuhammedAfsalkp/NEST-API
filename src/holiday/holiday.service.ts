import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from 'src/utils/service/base.service';
import { Holiday,HolidayDocument } from './holiday.entity';
import { HolidayResponseDto } from './dto/response/holiday-response.dto';


@Injectable()
export class HolidayService extends BaseService<Holiday>{
  constructor(@InjectModel(Holiday.name) protected model: Model<HolidayDocument>){
       super()
  }


  // async getServiceByKey(key: string, def: any = 1): Promise<any> {
  //   const doc = await this.model.findOne({ key });
  //   if (doc) {
      
  //     const { value, type } = doc;
  //     console.log( value )
  //     switch (type) {
  //       case 'INT':
  //         return parseInt(value);
  //       case 'ARRAY':
  //         return JSON.parse(value);
  //       case 'FLOAT':
  //         return parseFloat(value);
  //       default:
  //         return String(value);
  //     }
  //   } else {
  //     return def;
  //   }
  // }


  getResponseDto() {
    return HolidayResponseDto;
  }


  

  
}
