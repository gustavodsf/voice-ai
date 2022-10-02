import { useState } from 'react';
import RecordRTC, { invokeSaveAsDialog } from 'recordrtc';

export function Microphone() {
    const [stream, setStream] = useState(null);
    const [blob, setBlob] = useState(null);
    const [ startDisabled, setStartDisabled ] = useState(false);

    const handleRecordStart = async () => {
        setStartDisabled(true);
        // const cameraStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        const mediaStream = await navigator.mediaDevices.getDisplayMedia({
            video: {
            width: 1920,
            height: 1080,
            frameRate: 30,
            },
            audio: false,
        });
    
        setStream(mediaStream);
        recorderRef.current = new RecordRTC(mediaStream, { type: 'video' });
        recorderRef.current.startRecording();
    }

    const handleRecordStop = () => {
        setStartDisabled(false);
    }



    return (
        <>
            <button
            type="button"
            className={ startDisabled ? 'rounded p-2 bg-yellow-500 justify-self-center mr-2' : 'rounded p-2 bg-red-500 justify-self-center' }
            onClick={() => handleRecordStart()}
            disabled={startDisabled === true}
            >
                Start
            </button>
            <button 
                type="button"
                className={ startDisabled ? 'rounded p-2 bg-red-500 justify-self-center' : 'rounded p-2 bg-yellow-500 justify-self-center' }
                onClick={() => handleRecordStop()}
                disabled={startDisabled === false}
            >
                Stop
            </button>
            <div>
                <strong>Status :</strong>
                { startDisabled ? "Recording" : "Waiting" }
            </div>
        </>
    )
}