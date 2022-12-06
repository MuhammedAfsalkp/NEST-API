import {Logger} from '@nestjs/common'
import { Model } from 'mongoose';
import { EntityConverter } from './EntityConverter';

export abstract class BaseService<EntityType> {
  private readonly baseServiceLogger = new Logger('BaseService');
  protected readonly _entityConverter = new EntityConverter();
  abstract getResponseDto(): any;
//  protected populate = [];
  protected abstract model: Model<any>;


  async create<CreateDTO, ResponseDtoType>(entity: CreateDTO): Promise<ResponseDtoType>{
    console.log(entity,"service"); //{class:{..prop}}
    
    this.baseServiceLogger.debug(
      `Creating <${this.model.modelName}> entity: ${JSON.stringify(
        entity,
        null,
        2,
      )} `,
    );
     const createdEntity = await this.model.create(
     this._entityConverter.toEntity<EntityType>(entity) //{...prop}
     );
     console.log(createdEntity)  // {dbdoc}
     return this._entityConverter.toDto(createdEntity, this.getResponseDto());
 }


 async findOne<ResponseDtoType>(id: string): Promise<ResponseDtoType> {
    const query = { _id: id };
    const entity = await this.model.findOne(query)
    if (!entity) {
      return null;
    }
    return this._entityConverter.toDto(entity, this.getResponseDto(),);
  }


  async update<UpdateDTO>(id: string, entity: UpdateDTO,) {
    const query = { _id: id };
    const updatedEntity = await this.model.findOneAndUpdate(
      query,
      this._entityConverter.toEntity<EntityType>(entity),
      {
        new: true,
      },
    );
    return this._entityConverter.toDto(updatedEntity, this.getResponseDto());
  }


  async delete(id: string) {
    const query = { _id: id };
    return this.model.findOneAndDelete(query);
  }

}