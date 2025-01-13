import { useState, useRef } from "react";
import Webcam from "react-webcam";

const CameraApp = () => {
  const videoConstraints = {
    width: 1980,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-10">
      <div className="border-2 border-gray-300 p-6 rounded-md shadow-lg max-w-4xl w-full bg-white">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-center mb-5 text-green-600">
          Camera App!
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Webcam Section */}
          <div className="flex flex-col items-center w-full lg:w-2/3 mb-6 lg:mb-0">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
              className="w-full max-h-64 sm:max-h-72 lg:max-h-full rounded-lg border border-gray-300"
            />
            <div className="mt-4 flex space-x-4">
              <button
                onClick={capture}
                className="px-4 py-2 bg-blue-500 text-white text-sm sm:text-base rounded-md hover:bg-blue-600 transition duration-300"
              >
                Take Photo
              </button>
              <button
                onClick={() => setUrl(null)}
                className="px-4 py-2 bg-gray-500 text-white text-sm sm:text-base rounded-md hover:bg-gray-600 transition duration-300"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Preview and Download Section */}
          <div className="flex flex-col items-center w-full lg:w-1/3">
            <div className="h-48 sm:h-56 w-full border border-gray-300 rounded-lg bg-gray-50 flex items-center justify-center">
              {url == null ? (
                <div>
                  <h1>No photo captured</h1>
                </div>
              ) : (
                <img
                  src={url}
                  alt="Preview"
                  className="max-w-full max-h-full rounded-md"
                />
              )}
            </div>
            <a
              href={url}
              download="captured-photo.jpg"
              className="mt-4 px-4 py-2 bg-green-500 text-white text-sm sm:text-base rounded-md hover:bg-green-600 transition duration-300"
            >
              Download
            </a>
          </div>
        </div>

        {/* Link to credit the developer */}
        <div className="mt-6 text-sm text-gray-500 text-center">
          <a
            href="https://github.com/muhammad-jowel"
            target="_blank"
            rel="noopener noreferrer"
          >
            Developed by Muhammad Jowel
          </a>
        </div>
      </div>
    </div>
  );
};

export default CameraApp;
