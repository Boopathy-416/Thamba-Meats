import { useEffect, useState } from "react";

export default function usePreloader(apiUrls = []) {
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let totalTasks = apiUrls.length + 1; // +1 for assets/images
    let completed = 0;

    // 1️⃣ Load all images and assets
    const images = Array.from(document.images);
    const imagePromises = images.map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) return resolve();
          img.onload = img.onerror = resolve;
        })
    );

    Promise.all(imagePromises).then(() => {
      completed++;
      setProgress(Math.floor((completed / totalTasks) * 100));
    });

    // 2️⃣ Load API data
    Promise.all(
      apiUrls.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .catch(() => null)
      )
    ).then(() => {
      completed++;
      setProgress(Math.floor((completed / totalTasks) * 100));
      setTimeout(() => setLoaded(true), 500);
    });
  }, [apiUrls]);

  return { progress, loaded };
}



{/* <div className={`transition-opacity duration-700 ${loaded ? "opacity-0" : "opacity-100"}`}>
  <Preloader progress={progress} />
</div> */}
