import { Expose, Transform, Exclude} from 'class-transformer';

export abstract class BaseResponse {
  @Expose({ name: 'id' })
  @Transform(({ key, obj }) => {
    return obj['_id'];
  })
  _id: string;


  @Exclude()
  createdAt: Date;
}