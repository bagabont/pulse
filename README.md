# Key Value based Heartbeat Service - Pulse
Pulse is a key-value based service that enables pulse-like behavior. The service is very comfortable for storing video or any document based state per user, so it can be resumed after session has terminated.

### API

#### *Add* or *Update* a Beat
**Request**
```httph
POST /beats
Content-Type: application/json
```
```json
{
    "user": "56ac9e9b7963a8f4257a8867",
    "key": "56672ad23d17634817f1e945",
    "value": 1000
}
```
**Response**
```httph
Status: 204 No Content
```

#### Get Beats

**Request**
```httph
GET /beats?key=<key>&user=<user>
```
*Optional filters*
```httph
key
user
```
**Response**
```httph
Status: 200 OK
```
```json
[
    {
        "user": "56ac9e9b7963a8f4257a8867",
        "key": "56672ad23d17634817f1e945",
        "value": 78569.035
    },
    {
        "user": "56e0aa1445191a28132f98fe",
        "key": "56672ad23d17634817f1e945",
        "value": 1000.3219999999999
    }
]
```