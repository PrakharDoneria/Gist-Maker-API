### Sample Request

**Endpoint:** `POST /create-gist`

**Request Body:**

```json
{
    "fileName": "example.js",
    "code": "console.log('Hello, World!');",
    "accessToken": "your_github_access_token"
}
```

### Sample Response

**Success Response:**

```json
{
    "gist_url": "https://gist.github.com/your-gist-id"
}
```

**Error Response:**

```json
{
    "error": "Failed to create gist"
}
```