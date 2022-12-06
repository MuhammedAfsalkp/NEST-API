import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { BaseRequest } from 'src/utils/dto/BaseRequest';
import { OperatingHours } from './operating-hours.dto';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested, Validate } from 'class-validator';
 

export class CreateHolidayDto extends BaseRequest {
   @ApiProperty()
   @IsNotEmpty()
   key: string;
  
   @ApiProperty({ type: [OperatingHours] })
   @IsArray()
   @ValidateNested({ each: true })
   @Type(() => OperatingHours)
   value: OperatingHours[];
    
  //  @ApiProperty({enum:Type})
  //  @IsNotEmpty()
  //  @IsEnum(Type)
  //  type: string;
   
  //  @ApiProperty()
  //  @IsNotEmpty()
  //  group: string;


}