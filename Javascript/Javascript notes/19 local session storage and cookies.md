# Methods to Store Data in the Browser

## Local Storage
- `localStorage.setItem('key', value)`
- `localStorage.getItem('key')`
- `localStorage.removeItem('key')`

## Session Storage
- `sessionStorage.setItem('key', value)`
- `sessionStorage.getItem('key')`
- `sessionStorage.removeItem('key')`

## Cookies
- `document.cookie = "name=Sai; expires=" + new Date(9999, 0, 1).toUTCString();`
- `document.cookie = "lastName=Teja; expires=" + new Date(9999, 0, 1).toUTCString();`

## Storage Scope and Browser Dependency
All three storage methods are stored in the user's actual browser (e.g., Google Chrome). However, data saved in one specific browser will not be available in another browser (e.g., Firefox), making it browser-dependent.

## Comparison of Local Storage, Session Storage, and Cookies

| **Feature**              | **localStorage**                                | **sessionStorage**                            | **Cookies**                                    |
|--------------------------|-------------------------------------------------|-----------------------------------------------|------------------------------------------------|
| **Sent with requests**   | No                                              | No                                            | Yes                                            |
| **Expiration**           | No expiration time (manual deletion required)   | Cleared when tab/window is closed             | Manually set expiration date                   |
| **Storage Capacity**     | 10 MB per domain                                | 5 MB per domain                               | 4 KB per cookie                                |
| **Access**               | Any window                                      | Same tab/window                               | Any window                                     |
| **Use Case**             | Long-term data storage (e.g., user preferences) | Temporary data (form data, session state)     | Small data, session identifiers, or tracking info |
| **Storage Location**     | Browser and server                              | Browser                                       | Browser                                        |

