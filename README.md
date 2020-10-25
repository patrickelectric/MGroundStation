# MGroundStation

Demo in: https://patrickelectric.work/MGroundStation/

## Running it
1. Create SSL key (optional):
    ```
    openssl req -x509 -out localhost.crt -keyout localhost.key \
    -newkey rsa:2048 -nodes -sha256 \
    -subj '/CN=localhost' -extensions EXT -config <( \
    printf "[dn]\nCN=localhost\n[req]\ndistinguished_name = dn\n[EXT]\nsubjectAltName=DNS:localhost\nkeyUsage=digitalSignature\nextendedKeyUsage=serverAuth")
    ```
    - Enable insecure ssl in chrome: `chrome://flags/#allow-insecure-localhost`

2. Run main.py:
    - `./main.py`