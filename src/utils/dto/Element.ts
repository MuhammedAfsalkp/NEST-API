import { IsEnum, IsNotEmpty,IsString } from 'class-validator';
import { FilterOperations } from './FilterOperations';
import { ApiProperty } from '@nestjs/swagger';


export class Element {
  
  @IsNotEmpty()
  field: string;
   
  
  @IsNotEmpty()
  @IsEnum(FilterOperations)
  operation: FilterOperations;

  
  @IsNotEmpty()
  value: any[];
}

// export class Filter{
//     @IsNotEmpty()
//     @IsString()
//     field: string
// }
