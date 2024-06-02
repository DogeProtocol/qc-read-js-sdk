# AccountsReadApi.AccountsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountBalance**](AccountsApi.md#getAccountBalance) | **GET** /api/accounts/{address}/balance | Get account balance
[**listAccountPendingTransactions**](AccountsApi.md#listAccountPendingTransactions) | **GET** /api/accounts/{address}/pending/txn/page/{pageIndex} | List account pending transactions info by page
[**listAccountTransactions**](AccountsApi.md#listAccountTransactions) | **GET** /api/accounts/{address}/txn/page/{pageIndex} | List account transactions info by page



## getAccountBalance

> BalanceResponse getAccountBalance(address)

Get account balance

### Example

```javascript
import AccountsReadApi from 'accounts_read_api';

let apiInstance = new AccountsReadApi.AccountsApi();
let address = "address_example"; // String | the string representing the address
apiInstance.getAccountBalance(address, (error, data, response) => {
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

[**BalanceResponse**](BalanceResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccountPendingTransactions

> AccountPendingTransactionSummaryResponse listAccountPendingTransactions(address, pageIndex)

List account pending transactions info by page

### Example

```javascript
import AccountsReadApi from 'accounts_read_api';

let apiInstance = new AccountsReadApi.AccountsApi();
let address = "address_example"; // String | the string representing the address
let pageIndex = 56; // Number | the interger representing page number
apiInstance.listAccountPendingTransactions(address, pageIndex, (error, data, response) => {
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
 **pageIndex** | **Number**| the interger representing page number | 

### Return type

[**AccountPendingTransactionSummaryResponse**](AccountPendingTransactionSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAccountTransactions

> AccountTransactionSummaryResponse listAccountTransactions(address, pageIndex)

List account transactions info by page

### Example

```javascript
import AccountsReadApi from 'accounts_read_api';

let apiInstance = new AccountsReadApi.AccountsApi();
let address = "address_example"; // String | the string representing the address
let pageIndex = 56; // Number | the interger representing page number
apiInstance.listAccountTransactions(address, pageIndex, (error, data, response) => {
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
 **pageIndex** | **Number**| the interger representing page number | 

### Return type

[**AccountTransactionSummaryResponse**](AccountTransactionSummaryResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

