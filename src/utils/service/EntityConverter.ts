import { BaseEntity } from "../BaseEntity";
import { BaseRequest } from "../dto/BaseRequest";
import {
    instanceToPlain,
    plainToInstance,
    plainToClass,
    ClassConstructor
  } from 'class-transformer';
import { HydratedDocument } from 'mongoose';

export class EntityConverter {

    /* 
    @TargestClassType  = Holiday-entity(model), parent  = BaseEntity
    @object = cretedDto,HolidayDtoreq, parent = baseRequest
    */

    toEntity<TargetClassType extends BaseEntity>(object: BaseRequest) {
        let targetObj: new () => TargetClassType;
        const plainEntity = instanceToPlain(object);
        const dtoObject = plainToInstance(targetObj, plainEntity);
        return dtoObject;
      }


      toDto(
        object: HydratedDocument<BaseEntity>, //dbdoc
        dtoClass,  //responsedto - holidat
        groups: string[] = [],
      ): any {
        if (!object) return null;
        const plainEntity = object.toObject();
        if (!dtoClass) {
          console.log('No dto class provided. Returning plain object');
          return plainEntity;
        }
        const dtoObject = plainToClass(
          dtoClass as ClassConstructor<any>,
          plainEntity,
          { strategy: 'excludeAll', groups },
        );
        return dtoObject;
      }
}