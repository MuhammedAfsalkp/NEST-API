import { Controller, Get, Body, Param ,Post,Put,Delete,HttpStatus,Logger,Query,Request} from '@nestjs/common';
import { ApiBody,ApiResponse,ApiTags,ApiOperation,ApiBearerAuth,ApiQuery } from '@nestjs/swagger';
import { CreateHolidayDto } from './dto/request/create-holiday.dto';
import { HolidayService } from './holiday.service';
import { HolidayResponseDto } from './dto/response/holiday-response.dto';
import { UpdateHolidayDto } from './dto/request/update-holiday.dto';
import { BaseController } from 'src/utils/controller/base.controller';
import { Holiday } from './holiday.entity';
import { Filter } from 'src/utils/dto/Filter';
import { AppSyncService } from './appSync';

const controllerLogger = new Logger(`HolidayController`);


@Controller('holiday')
@ApiTags('Holiday')
export class HolidayController extends BaseController<Holiday> {
  constructor(protected readonly service: HolidayService,
    protected readonly appSync: AppSyncService) {
    super()

  }

  @ApiOperation({ summary: '🏖 Create A holiday' })
  @ApiBody({type: CreateHolidayDto})
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: '🏖Holiday created successfully',
  })
  @Post()
  async create(@Body() createHolidayDto:CreateHolidayDto){
    const holiday = await this.service.create<CreateHolidayDto,HolidayResponseDto>(createHolidayDto);
     console.log(holiday,"holiday response")
    return holiday;
  }

  @ApiOperation({ summary: '🏖 Update the holiday' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: HolidayResponseDto,
    description: 'user update',
  })
  @Put('/:id')
  async update( @Body() updateRequest: UpdateHolidayDto,@Param('id') id: string): Promise<HolidayResponseDto> {
    return await this.service.update<UpdateHolidayDto>(id, updateRequest);
  }



  @ApiOperation({ summary: '🏖 Delete the holiday' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete the holiday',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<any> {
    await this.service.delete(id);
    return;
  }


  
  @ApiOperation({ summary: '🏖 Get one holiday' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: HolidayResponseDto,
    description: 'get one holiday',
  })
  @Get('/:id')
  async get(@Param('id') id: string): Promise<any> {
    console.log("geting holiday");
    // return this.service.findOne<HolidayResponseDto>(id);
    return this.appSync.sendMessage();
  }


  @ApiOperation({ summary: '🏖 Get one holiday by key' })
  @ApiResponse({
    status: HttpStatus.OK,
    type: HolidayResponseDto,
    description: 'get  holiday by key',
  })


  
  @ApiOperation({ summary: '📜 Get  list ' })
  @Get('/')
  @ApiQuery({
      name: 'filter',
      type: String,
      required: false,
      description: 'Filter',
    })
    @ApiQuery({
      name: 'limit',
      type: String,
      required: false,
      description: 'limit',
    })
  async listHolidays(@Query('filter') filter:Filter[], @Query('limit') limit){
    console.log("Listng holiday",filter,limit);
    return "Listing holiday"

  }




}