import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNumber, IsEnum, IsNotEmpty, Validate } from 'class-validator';



export class OperatingHours {
  @ApiProperty()
  @Expose()
  @IsNumber()
  startHour: number;

  @ApiProperty()
  @Expose()
  @IsNumber()
  startMinute: number;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  startMeridiem: string;

  @ApiProperty()
  @Expose()
  @IsNumber()
  endHour: number;

  @ApiProperty()
  @Expose()
  @IsNumber()
  endMinute: number;

  @ApiProperty()
  @Expose()
  @IsNotEmpty()
  endMeridiem: string;
}
