
import { BaseService } from '../service/base.service';

export abstract class BaseController<EntityType> {
  
  protected abstract service: BaseService<EntityType>;
 

 
}
