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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGZiNzkwNjI4N2U4OTU4NjQyZTUzNjkiLCJpYXQiOjE2OTQxNjU4OTR9.xJwrvj9W-V9jEqvJ9K9JgH-M0q7jV9HhK-V3qJqJ1_E",
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

## /user/login Endpoint Documentation

### Description

This endpoint is used to log in an existing user. It validates the provided email and password, and returns an authentication token along with user information upon a successful login.

### Required Data

- `email`: User's email address (string, required).
- `password`: User's password (string, required).

### Status Codes

- `200 OK`: User successfully logged in and token is returned.
- `400 Bad Request`: Invalid data provided in the request body.
- `401 Unauthorized`: Invalid email or password.
- `500 Internal Server Error`: An unexpected error occurred on the server.

### Example Response

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
