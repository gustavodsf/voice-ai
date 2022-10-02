import { io } from 'socket.io-client';

declare const ss: any;

export class IoService {
    public socket: any;
    public socketio: any;

    constructor() {
      this.socketio = io('http://localhost:3000');
      this.socket = this.socketio.on('connect', function() {
          console.log('connected');
      });
      this.socket.binaryType = 'arraybuffer';
    }

    sendBinaryStream(blob: any) {
        const me = this;
        const stream = ss.createStream();
        // stream directly to server
        // it will be temp. stored locally
        ss(me.socket).emit('stream-speech', stream, {
            name: '_temp/stream.wav',
            size: blob.size
        });
        // pipe the audio blob to the read stream
        ss.createBlobReadStream(blob).pipe(stream);
    }

    sendMessage(eventName: string, obj: any) {
        this.socketio.emit(eventName, obj);
    }

    receiveStream(eventName: string, callback: any) {
        this.socket.on(eventName, function(data: any) {
            callback(data);
        });
    }
}
