'use client';
import Image from "next/image";
import img from "../../public/img.png"
import { useState, useEffect } from "react";
import { useToggle } from "../hooks/useToggle";

const VideoOpening: React.FC = () => {
    const [showImg, setShowImg] = useToggle(false);
    const [showVid, setShowVid] = useToggle(true);

    useEffect(() => {
        setTimeout(() => {
            setShowImg();
        }, 20000);
        setTimeout(() => {
            setShowVid();
        }, 25000);
    }, []);

    return (
        <div >
            {showImg && <Image src={img} alt="text image" className="h-[100vh] object-cover animate-fading" />}
            {showVid &&
                <video
                    autoPlay
                    muted
                    className="w-full h-[100vh] object-cover absolute top-0 left-0 z-[-1]"
                >
                    <source src='/opening.mp4' type="video/mp4" />
                    Your browser doesnt support the video tag
                </video>
            }
        </div>
    );
}

export default VideoOpening;

// 1a1a1a gray color