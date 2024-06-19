import flask
from flask_cors import CORS,cross_origin
app = flask.Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/')
def hello_world():
    return 'Hello, World!'


import queue

class MessageAnnouncer:
    def __init__(self):
        self.listeners = []
        self.isConected = False
 
    def listen(self):
        q = queue.Queue(maxsize=5)
        self.listeners.append(q)
        self.isConected = True
        return q

    def announce(self, msg):
        for i in reversed(range(len(self.listeners))):
            try:
                self.listeners[i].put_nowait(msg)
            except queue.Full:
                del self.listeners[i]

    def close(self):
        ## close all listeners
        self.isConected = False
        for listener in self.listeners:
            listener.put_nowait(None)
       

announcer = MessageAnnouncer()

def format_sse(data: str, event=None) -> str:
    msg = f'data: {data}\n\n'
    if event is not None:
        msg = f'event: {event}\n{msg}'
    return msg

@app.route('/ping')
@cross_origin()
def ping():
    msg = format_sse(data='pong')
    announcer.announce(msg=msg)
    return {}, 200

@app.route('/close')
@cross_origin()
def close():
    announcer.close()
    return {}, 201

@app.route('/listen', methods=['GET'])
@cross_origin()
def listen():

    def stream():
        messages = announcer.listen()  # returns a queue.Queue
        while announcer.isConected:
            msg = messages.get()  # blocks until a new message arrives
            if msg is None:
                break
            yield msg.encode('utf-8')

        if not announcer.isConected:
            yield format_sse(data='disconnected').encode('utf-8')
            return
    return flask.Response(stream(), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, port=5000)