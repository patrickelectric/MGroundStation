#! /usr/bin/env python3

import http.server
import os
import ssl

source_dir = os.path.join(os.path.dirname(__file__), 'source')
os.chdir(source_dir)

class Handler(http.server.SimpleHTTPRequestHandler):
    def send_error(self, code, message=None):
        if code == 404:
            self.error_message_format = open("404.html","r").read()
        http.server.SimpleHTTPRequestHandler.send_error(self, code, message)

address = ('localhost', 8000)
httpd = http.server.HTTPServer(address, Handler)
try:
    httpd.socket = ssl.wrap_socket (httpd.socket, certfile='./server.pem', server_side=True)
except:
    print("No SSL configuration, webapp not available.")
print(f"Console available in: {address}")
httpd.serve_forever()
