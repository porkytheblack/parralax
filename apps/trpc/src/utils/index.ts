import { isEmpty } from 'lodash';
export const removeFields = (obj: any, fields: string[]) => {
    if (isEmpty(obj)) return {};
    fields.forEach((field) => {
        delete obj[field];
    })
    return obj;
}