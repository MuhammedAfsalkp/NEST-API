import { SchemaFactory } from '@nestjs/mongoose';

export function createSchema(schemaClass: any) {
  const schema = SchemaFactory.createForClass(schemaClass);
  schema
    .virtual('id')
    .get(function () {
      return this._id.toString();
    })
    .set(function (id) {
      this._id = id;
    });

  return schema;
}