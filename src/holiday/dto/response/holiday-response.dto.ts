import { Expose, Type ,Transform} from 'class-transformer';
import { BaseResponse } from 'src/utils/dto/BaseResponse';
import { changeType } from 'src/utils/transform-type';
import { OperatingHours } from './operating-hours.dto';


export class HolidayResponseDto extends BaseResponse {
  @Expose()
  key: string;

  
//  @Transform(({ value, key, obj, type }) => {console.log(typeof value,"init");let t=changeType(value,obj.type);console.log(typeof t,t,"set");return value;})
  @Expose()
  @Type(() => OperatingHours)
  value: OperatingHours[];


  

 
}