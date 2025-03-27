# /user/user/register Endpoint Documentation

## Description

This endpoint is used to register a new user in the system. It requires specific user details to create an account.

## Required Data

The following data is required in the request body (JSON format):

- `firstName`: User's first name (string, required).
- `lastName`: User's last name (string, required).
- `email`: User's email address (string, required, must be unique).
- `password`: User's password (string, required, minimum 8 characters).
- `phone`: User's phone number (string, required).
- `userType`: Type of user (string, required, either "rider" or "driver").

## Status Codes

- `201 Created`: User successfully registered.
- `400 Bad Request`: Invalid data provided in the request body. Check the error message for details.
- `409 Conflict`: Email address already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.

## Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "fullname": {
      "firstname": "test",
      "lastname": "test"
    },
    "email": "test@gmail.com",
    "_id": "64fb7906287e8958642e5369"
  }
}
```

## /captain/login Endpoint Documentation

### Description

This endpoint is used to log in an existing captain. It validates the provided email and password, and returns an authentication token along with captain information upon a successful login.

### Method

`POST`

### Required Data

- `email`: Captain's email address (string, required).
- `password`: Captain's password (string, required, minimum 3 characters).

### Status Codes

- `200 OK`: Captain successfully logged in and token is returned.
- `400 Bad Request`: Invalid data provided in the request body.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: An unexpected error occurred on the server.

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "64fb7906287e8958642e5369"
  }
}
```

## /captain/logout Endpoint Documentation

### Description

This endpoint logs out an authenticated captain by invalidating the current session or token.

### Method

`GET`

### Authentication

Requires an authentication token in the request.

### Response

- `200 OK`: Logout successful.

```json
{
  "message": "Logout successful"
}
```

## /captain/profile Endpoint Documentation

### Description

This endpoint retrieves the profile of the authenticated captain.

### Method

`GET`

### Authentication

Requires an authentication token in the request.

### Response

- `200 OK`: Captain profile retrieved successfully.

```json
{
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "64fb7906287e8958642e5369",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

## /captain/register Endpoint Documentation

### Description

This endpoint is used to register a new captain in the system. It requires specific captain and vehicle details to create an account.

### Method

`POST`

### Required Data

The following data is required in the request body (JSON format):

- `fullname`:
  - `firstname` (string, required, minimum 3 characters)
  - `lastname` (string, optional, minimum 3 characters)
- `email` (string, required, must be unique and valid)
- `password` (string, required, minimum 3 characters)
- `vehicle`:
  - `color` (string, required, minimum 3 characters)
  - `plate` (string, required, minimum 3 characters)
  - `capacity` (integer, required, minimum 1)
  - `vehicleType` (string, required, must be one of: `"car"`, `"motorcycle"`, `"auto"`)

### Status Codes

- `201 Created`: Captain successfully registered.
- `400 Bad Request`: Invalid data provided in the request body.
- `409 Conflict`: Email address already exists.
- `500 Internal Server Error`: An unexpected error occurred on the server.

### Example Request

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword",
  "vehicle": {
    "color": "Blue",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Example Response

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "_id": "64fb7906287e8958642e5369",
    "vehicle": {
      "color": "Blue",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
