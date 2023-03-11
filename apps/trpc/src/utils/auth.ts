import firebaseApp  from '@firebase/index';
import { isEmpty, isUndefined } from 'lodash';


/**
 * @name getUid
 * @description Get the uid from the request authorization header
 * @param {authorization} string - Authorization header
 * 
 */

export const getUid = async (authorization?: string) => {
    if (isUndefined(authorization)) return null
    const token = authorization.split(" ")[1];
    if (isEmpty(firebaseApp)) return null
    return await firebaseApp?.auth()?.verifyIdToken(token).then((decodedToken)=>{
        return decodedToken.uid
    }).catch(()=>{
        /**
         * @todo add more elaborate error handling
         */
        return null
    })
}