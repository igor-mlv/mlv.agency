export default function VideoSphere() {
    return (
        <video
            width="720"
            height="720"
            preload="none"
            autoPlay
            loop
            muted
            playsInline>
            <source src="/assets/heroSection/Sphere.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}