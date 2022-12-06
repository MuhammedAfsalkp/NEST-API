import { IsEnum, IsNotEmpty } from 'class-validator';
import { FilterOperations } from './FilterOperations';

export class Filter {
  @IsNotEmpty()
  field: string;

  @IsNotEmpty()
  @IsEnum(FilterOperations)
  operation: FilterOperations;

  @IsNotEmpty()
  value: any[];
}
