# QcReadApi.ReadApiApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountDetails**](ReadApiApi.md#getAccountDetails) | **GET** /accounts/{address} | Get account details
[**getTransaction**](ReadApiApi.md#getTransaction) | **GET** /transaction/{hash} | Get Transaction



## getAccountDetails

> AccountDetailsResponse getAccountDetails(address)

Get account details

### Example

```javascript
import QcReadApi from 'qc_read_api';

let apiInstance = new QcReadApi.ReadApiApi();
let address = "address_example"; // String | the string representing the address
apiInstance.getAccountDetails(address, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | **String**| the string representing the address | 

### Return type

[**AccountDetailsResponse**](AccountDetailsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getTransaction

> TransactionResponse getTransaction(hash)

Get Transaction

### Example

```javascript
import QcReadApi from 'qc_read_api';

let apiInstance = new QcReadApi.ReadApiApi();
let hash = "hash_example"; // String | The transaction hash
apiInstance.getTransaction(hash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hash** | **String**| The transaction hash | 

### Return type

[**TransactionResponse**](TransactionResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

