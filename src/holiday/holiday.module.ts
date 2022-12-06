import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HolidayController } from './holiday.controller';
import { HolidayService } from './holiday.service';
import { AppSyncService } from './appSync';
import { Holiday,HolidaySchema } from './holiday.entity';

@Module({
    imports: [MongooseModule.forFeature([
        {name: Holiday.name, schema: HolidaySchema}
    ])],
    controllers: [HolidayController],
    providers: [HolidayService,AppSyncService],
})

export class HolidayModule {}
