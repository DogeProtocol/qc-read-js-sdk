/**
 * QC Read API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Balance from './Balance';

/**
 * The BalanceResponse model module.
 * @module model/BalanceResponse
 * @version v1
 */
class BalanceResponse {
    /**
     * Constructs a new <code>BalanceResponse</code>.
     * @alias module:model/BalanceResponse
     */
    constructor() { 
        
        BalanceResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BalanceResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BalanceResponse} obj Optional instance to populate.
     * @return {module:model/BalanceResponse} The populated <code>BalanceResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BalanceResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], Balance);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BalanceResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BalanceResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          Balance.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/Balance} result
 */
BalanceResponse.prototype['result'] = undefined;






export default BalanceResponse;

