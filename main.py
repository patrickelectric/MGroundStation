#! /usr/bin/env python3

import http.server
import os
import ssl

script_dir = os.path.abspath(os.path.dirname(__file__))
source_dir = os.path.join(script_dir, "source")
os.chdir(source_dir)


class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None):
        if code == 404:
            self.error_message_format = open("404.html", "r").read()
        http.server.SimpleHTTPRequestHandler.send_error(self, code, message)


address = ("localhost", 8000)
httpd = http.server.HTTPServer(address, Handler)
try:
    httpd.socket = ssl.wrap_socket(
        httpd.socket,
        certfile=os.path.join(script_dir, "localhost.crt"),
        keyfile=os.path.join(script_dir, "localhost.key"),
        server_side=True,
    )
except Exception as error:
    print(f"No SSL configuration, webapp not available: {error}")
print(f"Console available in: {address}")
httpd.serve_forever()
