/* eslint-disable max-len */
export const CmsAddress =
  process.env.ENVI === 'develop' ? 'http://localhost:4000' : process.env.CMS_ADDRESS

export const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly']
export const sheetId = '1PQOJoN1vWx7Me4gATB-yQnHYBVpKJcSVikPF5ZPS0GU'
export const Addresses = {
  blog: 'blog-posts',
  ourWorks: 'dk-works'
}
export const googleApiConfig = {
  type: 'service_account',
  project_id: 'mycms-324509',
  private_key_id: '94f10f9f2cf9364d4dc085ab7de762b4957bfb67',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDM+Uq64UvN8lnZ\n10uDqWG95gjmhRI6bOI/wKpCYdkRgJHAf9yIJqXK5GshGNdF3wkOprY40X9i1Jiw\nD9CNUgn7JlWcuMeZjlZRXKbSm0BRSbPx7OorAUDQHK0l92JUgog1KZ7umBOqyoOb\n9zZwa5e81BLruGMjngfPZ90Fypr08+sj69HNW5b7knVUPFCUyRIY90fYj8+V0ykI\n7AlM5wY8CFlvf2W1wnFn78WaMj62JttkY/RbsPwnQ52IZniwqGZGN/OKKHcNXuJh\nOQAaL13gbXz8/2W/h+cNafkBEbZkZ4JOeC23jQGoNkopRYisXKWyV2b54pxhfFGw\nKw/XobrZAgMBAAECggEADRbsaUkYQgN0g8n7wLbb5Dh2SrZRHC8LjGkIK8C7j80R\n7GTzQd8/SNjTveOBYoJkPdhynD1GBnCE0arTitAkOAgngSB3CqeBe/pP4vTWziTH\n8NlMI56Vs38+pW/fX9M4JzZMYniOukzqy6vQAQI180aTG2ov1pHxy2fFaxMYWIUa\napi+BhixdN/2fzYb9PFjcQuY/egbaqOmXpTor7mQck8/hfTf/hYYmxUYKUD1rPCp\nv36+Ii7KNqt9pvyWDzvEbWTtGJyhMbkxlGcQrWpSXaQr0HcrRomPHAe32HXYuARJ\n9G7DyoYxYKV0ezMbQ9EPDjij7CkQ6794IaJiQC4bMwKBgQD7h3dL8YVfqGmZab2O\n8aZ1M0/E1rh4oxrTVDyFcbgrw0gTi6dC8UN5UgG9FxnaOGcVklx2Pt3res2Jbi5y\nAgso5yS7vfiz81KOSvo0prfSWfSYEmNVqebEFCMpMi2XZwBq/vGKZuaJ9ZZY8yRV\nPV9J7Id9VHwLug82/2ipbe7Y/wKBgQDQnfwgOiKPra7/wAHXGA7SX13sgyKL/IiV\nBXY8HirgjjL2vFspYuV3JFU617RGPUb79HpUFZIMqM8pKoaqXAG1jrQh2zCJ4KNl\nWdPY2R5lL2WRVOakmVXMeeTMBnNq4KxoJC9TpVle7JeTIpn1sFFxOcaGVLr7kT/J\nLV5i8/VUJwKBgQDOQaaMyu+wolx9pd0AU55JKxt1cRHyMuWzd7btQnRgxpDbHkC5\nPzgySxIL6d6UOH4njU5u1FyMVbYnxQcnDA/0qZ5QqZZAkf4XmtoTxMamIofVD/cO\n7vTBwzWV+YSzS45nLsoI0Rqo9I8mP7OChoIWD3SHTHkv8JG7arN7hB9BJwKBgQCa\nt1AxJmxTWmAa1G+I8hKr+oZRzb9lSliRDIfvdgAeodcyHecN/oZnoc6D4U2VegSW\n/21pxsWWFevtf9h3p9yspbT6FvEckDkeBUyT2hIswMX2zpxvHjj/eLcyiOY4MYAr\njAp9Ynexao3PVS4RhD4iVtLg9R3nTIWd0cPaZ0teqQKBgQCsHHpMynnfdkMHY+EC\nd6L8nAaT5Y+hKyVjBwDOJFbe4j1PVjwvDs0dwl2kH04bsYBjcFO0KsFlX7nENS/o\n4x3AFTiPZ1XjcF2Xx07weaukVJgaku2SI9gvn50J8txA67I9b2lRPNy2GmK2bYDv\ndq/96I5qiqZhh2USQXDTv7bc7Q==\n-----END PRIVATE KEY-----\n',
  client_email: 'mycms-577@mycms-324509.iam.gserviceaccount.com',
  client_id: '112242665034996557790',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/mycms-577%40mycms-324509.iam.gserviceaccount.com'
}
