import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
    transform(object: any, args: any[] = null): any {
        if (!object) {
            return [];
        }
        return Object.keys(object).map(key => {
            return {key, value: object[key]};
        });
    }
}
