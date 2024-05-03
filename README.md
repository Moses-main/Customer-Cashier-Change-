
```
# Customer - Cashier Change API Documentation

## Overview

This API provides endpoints to calculate the optimal change to give back to customers in a supermarket checkout scenario. The available bills for change are $2, $5, and $10.

## Base URL

```
http://localhost:3000
```

## Endpoints

### Calculate Change

Calculates the optimal change to give back to a customer.

- **URL:** `/calculateChange`
- **Method:** `GET`
- **Query Parameters:**
  - `cash`: The amount of cash to give back (required)
- **Response:**
  - Success: Returns an object representing the optimal change.
  - Error: Returns an error message if the input is invalid or if it's not possible to give back change.

#### Example

**Request:**

```
GET /calculateChange?cash=6
```

**Response:**

```json
{
  "two": 3,
  "five": 0,
  "ten": 0
}
```

### Error Response

- **Status Code:** 400 Bad Request
- **Response:**
  ```json
  {
    "error": "Invalid input. Please provide a valid amount of cash."
  }
  ```
