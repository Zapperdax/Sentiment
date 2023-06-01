import React, { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

export default function FaceDetection(props) {
  const [emotionValues, setEmotionValues] = React.useState({
    neutral: -Infinity,
    happy: -Infinity,
    sad: -Infinity,
    angry: -Infinity,
    fearful: -Infinity,
    disgusted: -Infinity,
    surprising: -Infinity,
  });
  const [loading, setLoading] = useState(true);

  const imgRef = useRef();
  const canvasRef = useRef();

  const style = {
    maxWidth: "100%",
  };

  const detectedEmotion = () => {
    if (!loading) {
      if (!Object.values(emotionValues).every((x) => x === -Infinity)) {
        let greatest = -Infinity;
        let key;
        for (let x in emotionValues) {
          if (emotionValues[x] > greatest) {
            key = x;
            greatest = emotionValues[x];
          }
        }
        props.setCategory(key);
        props.setProcessing(false);
        setTimeout(() => {
          props.handleCameraClose();
        }, 3000);
      }
    }
  };

  const handleImage = async () => {
    const detections = await faceapi
      .detectAllFaces(imgRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceExpressions();
    canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(imgRef.current);
    faceapi.matchDimensions(canvasRef.current, {
      width: 940,
      height: 560,
    });
    const resized = faceapi.resizeResults(detections, {
      width: 940,
      height: 560,
    });
    faceapi.draw.drawDetections(canvasRef.current, resized);
    faceapi.draw.drawFaceExpressions(canvasRef.current, resized);
    faceapi.draw.drawFaceLandmarks(canvasRef.current, resized);

    setEmotionValues({
      neutral: detections[0].expressions.neutral,
      happy: detections[0].expressions.happy,
      sad: detections[0].expressions.sad,
      angry: detections[0].expressions.angry,
      fearful: detections[0].expressions.fearful,
      disgusted: detections[0].expressions.disgusted,
      surprising: detections[0].expressions.surprised,
    });
    setLoading(false);
  };

  useEffect(() => {
    const loadModels = () => {
      Promise.all([
        faceapi.loadTinyFaceDetectorModel("/modals"),
        faceapi.loadFaceLandmarkModel("/modals"),
        faceapi.loadFaceLandmarkTinyModel("/modals"),
        faceapi.loadFaceRecognitionModel("/modals"),
        faceapi.loadFaceExpressionModel("/modals"),
      ])
        .then(async () => {
          await handleImage();
          detectedEmotion();
        })
        .catch((e) => {
          props.setProcessing(false);
          console.log(e);
        });
    };

    imgRef.current && loadModels();
  }, [props.img, loading]);

  return (
    <div className="app">
      <img ref={imgRef} src={props.img} alt="emotion" style={style} />
      <canvas ref={canvasRef} style={style} />
    </div>
  );
}

// import * as faceapi from "face-api.js";
// import React from "react";

// export default function FaceDetection() {
//   const [modelsLoaded, setModelsLoaded] = React.useState(false);
//   const [captureVideo, setCaptureVideo] = React.useState(false);

//   const videoRef = React.useRef();
//   const videoHeight = 480;
//   const videoWidth = 640;
//   const canvasRef = React.useRef();

//   React.useEffect(() => {
//     const loadModels = async () => {
//       const MODEL_URL = process.env.PUBLIC_URL + "/modals";

//       Promise.all([
//         faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
//         faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL),
//         faceapi.nets.faceRecognitionNet.loadFromUri(MODEL_URL),
//         faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
//       ]).then(setModelsLoaded(true));
//     };
//     loadModels();
//   }, []);

//   const startVideo = () => {
//     setCaptureVideo(true);
//     navigator.mediaDevices
//       .getUserMedia({ video: { width: 300 } })
//       .then((stream) => {
//         let video = videoRef.current;
//         video.srcObject = stream;
//         video.play();
//       })
//       .catch((err) => {
//         console.error("error:", err);
//       });
//   };

//   const handleVideoOnPlay = () => {
//     setInterval(async () => {
//       if (canvasRef && canvasRef.current) {
//         canvasRef.current.innerHTML = faceapi.createCanvasFromMedia(
//           videoRef.current
//         );
//         const displaySize = {
//           width: videoWidth,
//           height: videoHeight,
//         };

//         faceapi.matchDimensions(canvasRef.current, displaySize);

//         const detections = await faceapi
//           .detectAllFaces(
//             videoRef.current,
//             new faceapi.TinyFaceDetectorOptions()
//           )
//           .withFaceLandmarks()
//           .withFaceExpressions();
//         console.log(detections);
//         const resizedDetections = faceapi.resizeResults(
//           detections,
//           displaySize
//         );

//         canvasRef &&
//           canvasRef.current &&
//           canvasRef.current
//             .getContext("2d")
//             .clearRect(0, 0, videoWidth, videoHeight);
//         canvasRef &&
//           canvasRef.current &&
//           faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
//         canvasRef &&
//           canvasRef.current &&
//           faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);
//         canvasRef &&
//           canvasRef.current &&
//           faceapi.draw.drawFaceExpressions(
//             canvasRef.current,
//             resizedDetections
//           );
//       }
//     }, 100);
//   };

//   const closeWebcam = () => {
//     videoRef.current.pause();
//     videoRef.current.srcObject.getTracks()[0].stop();
//     setCaptureVideo(false);
//   };

//   return (
//     <div>
//       <p>This is face detection</p>
//       <div style={{ textAlign: "center", padding: "10px" }}>
//         {captureVideo && modelsLoaded ? (
//           <button
//             onClick={closeWebcam}
//             style={{
//               cursor: "pointer",
//               backgroundColor: "green",
//               color: "white",
//               padding: "15px",
//               fontSize: "25px",
//               border: "none",
//               borderRadius: "10px",
//             }}
//           >
//             Close Webcam
//           </button>
//         ) : (
//           <button
//             onClick={startVideo}
//             style={{
//               cursor: "pointer",
//               backgroundColor: "green",
//               color: "white",
//               padding: "15px",
//               fontSize: "25px",
//               border: "none",
//               borderRadius: "10px",
//             }}
//           >
//             Open Webcam
//           </button>
//         )}
//       </div>
//       {captureVideo ? (
//         modelsLoaded ? (
//           <div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 padding: "10px",
//               }}
//             >
//               <video
//                 ref={videoRef}
//                 height={videoHeight}
//                 width={videoWidth}
//                 onPlay={handleVideoOnPlay}
//                 style={{ borderRadius: "10px" }}
//               />
//               <canvas ref={canvasRef} style={{ position: "absolute" }} />
//             </div>
//           </div>
//         ) : (
//           <div>loading...</div>
//         )
//       ) : (
//         <></>
//       )}
//     </div>
//   );
// }
