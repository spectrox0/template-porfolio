from http.server import BaseHTTPRequestHandler
from urllib import parse
import smtplib

gmail_user = 'you@gmail.com'
gmail_password = 'P@ssword!'

sent_from = gmail_user
to = ['me@gmail.com', 'bill@gmail.com']
subject = 'OMG Super Important Message'
body = "Contact Portfolio"

email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, ", ".join(to), subject, body)
class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        print(self)
        return