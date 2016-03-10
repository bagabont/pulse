# pulse
A heartbeat service for video playback

### API

#### Add or Update resource
**Request**
```httph
POST /beats/:resource_id
Content-Type: application/json
```
```json
{
    user_id: "123",
    pointer: 1000
}
```
**Response**
```httph
Status: 204 No Content
```

#### Get all resources

**Request**
```httph
GET /beats
```
**Response**
```httph
Status: 200 OK
```
```json
[
    {
        resource_id: "56ac9e9b7963a8f4257a8867",
        user_id: "56672ad23d17634817f1e945",
        pointer: 78569.035
    },
    {
        resource_id: "56e0aa1445191a28132f98fe",
        user_id: "56672ad23d17634817f1e945",
        pointer: 1000.3219999999999
    }
]
```

#### Find resources by used ID
**Request**
```httph
GET /beats?uid=<user_id>
```
**Response**
```httph
Status: 200 OK
```
```json
[
    {
        resource_id: "56ac9e9b7963a8f4257a8867",
        user_id: "123",
        pointer: 100
    }
]
```
#### Get resource by ID
**Request**
```httph
GET /beats/:resource_id
```
**Response**
```httph
Status: 200 OK
```
```json
[
    {
        user_id: "123",
        pointer: 100
    },
    {
        user_id: "56672ad23d17634817f1e945",
        pointer: 78569.035
    }
]
```

#### Get resource by user ID
**Request**
```httph
GET /beats/:resource_id/:user_id
```
**Response**
```httph
Status: 200 OK
```
```json
{
    pointer: 78569.035
}
```