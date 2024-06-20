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
import AccountDetails from './AccountDetails';

/**
 * The AccountDetailsResponse model module.
 * @module model/AccountDetailsResponse
 * @version v1
 */
class AccountDetailsResponse {
    /**
     * Constructs a new <code>AccountDetailsResponse</code>.
     * @alias module:model/AccountDetailsResponse
     */
    constructor() { 
        
        AccountDetailsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AccountDetailsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AccountDetailsResponse} obj Optional instance to populate.
     * @return {module:model/AccountDetailsResponse} The populated <code>AccountDetailsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AccountDetailsResponse();

            if (data.hasOwnProperty('result')) {
                obj['result'] = ApiClient.convertToType(data['result'], AccountDetails);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AccountDetailsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AccountDetailsResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `result`
        if (data['result']) { // data not null
          AccountDetails.validateJSON(data['result']);
        }

        return true;
    }


}



/**
 * @member {module:model/AccountDetails} result
 */
AccountDetailsResponse.prototype['result'] = undefined;






export default AccountDetailsResponse;
