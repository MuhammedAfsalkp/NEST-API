export function changeType(value:string, type:string){
    switch(type){
        case 'INT':
            return parseInt(value);
        case 'ARRAY':
            return JSON.parse(value);
        case 'FLOAT':
              return parseFloat(value);
        default:
            return value;    
        }
            
}