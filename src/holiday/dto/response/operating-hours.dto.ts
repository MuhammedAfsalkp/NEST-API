import { Expose } from 'class-transformer';

export class OperatingHours {
  @Expose()
  startHour: number;

  @Expose()
  endHour: number;

  @Expose()
  startMinute: number;

  @Expose()
  endMinute: number;

  @Expose()
  startMeridiem: string;

  @Expose()
  endMeridiem: string;
}
