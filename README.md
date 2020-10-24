# MGroundStation

## Running it
1. Create SSL key:
    - `openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365`
    - Enable insecure ssl in chrome: `chrome://flags/#allow-insecure-localhost`

2. Run main.py:
    - `./main.py`