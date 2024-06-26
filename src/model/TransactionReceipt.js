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

/**
 * The TransactionReceipt model module.
 * @module model/TransactionReceipt
 * @version v1
 */
class TransactionReceipt {
    /**
     * Constructs a new <code>TransactionReceipt</code>.
     * @alias module:model/TransactionReceipt
     */
    constructor() { 
        
        TransactionReceipt.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionReceipt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionReceipt} obj Optional instance to populate.
     * @return {module:model/TransactionReceipt} The populated <code>TransactionReceipt</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionReceipt();

            if (data.hasOwnProperty('cumulativeGasUsed')) {
                obj['cumulativeGasUsed'] = ApiClient.convertToType(data['cumulativeGasUsed'], 'String');
            }
            if (data.hasOwnProperty('effectiveGasPrice')) {
                obj['effectiveGasPrice'] = ApiClient.convertToType(data['effectiveGasPrice'], 'String');
            }
            if (data.hasOwnProperty('gasUsed')) {
                obj['gasUsed'] = ApiClient.convertToType(data['gasUsed'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>TransactionReceipt</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TransactionReceipt</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['cumulativeGasUsed'] && !(typeof data['cumulativeGasUsed'] === 'string' || data['cumulativeGasUsed'] instanceof String)) {
            throw new Error("Expected the field `cumulativeGasUsed` to be a primitive type in the JSON string but got " + data['cumulativeGasUsed']);
        }
        // ensure the json data is a string
        if (data['effectiveGasPrice'] && !(typeof data['effectiveGasPrice'] === 'string' || data['effectiveGasPrice'] instanceof String)) {
            throw new Error("Expected the field `effectiveGasPrice` to be a primitive type in the JSON string but got " + data['effectiveGasPrice']);
        }
        // ensure the json data is a string
        if (data['gasUsed'] && !(typeof data['gasUsed'] === 'string' || data['gasUsed'] instanceof String)) {
            throw new Error("Expected the field `gasUsed` to be a primitive type in the JSON string but got " + data['gasUsed']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['hash'] && !(typeof data['hash'] === 'string' || data['hash'] instanceof String)) {
            throw new Error("Expected the field `hash` to be a primitive type in the JSON string but got " + data['hash']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {String} cumulativeGasUsed
 */
TransactionReceipt.prototype['cumulativeGasUsed'] = undefined;

/**
 * @member {String} effectiveGasPrice
 */
TransactionReceipt.prototype['effectiveGasPrice'] = undefined;

/**
 * @member {String} gasUsed
 */
TransactionReceipt.prototype['gasUsed'] = undefined;

/**
 * @member {String} status
 */
TransactionReceipt.prototype['status'] = undefined;

/**
 * @member {String} hash
 */
TransactionReceipt.prototype['hash'] = undefined;

/**
 * @member {String} type
 */
TransactionReceipt.prototype['type'] = undefined;






export default TransactionReceipt;

