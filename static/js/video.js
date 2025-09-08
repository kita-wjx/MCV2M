const gallery = document.getElementById("gallery");
    const galleryWrapper = document.getElementById("galleryWrapper");
    const toggleBar = document.getElementById("toggleBar");
    
    for (let i = 1; i <= 40; i++) {
      const container = document.createElement("div");
      container.className = "video-item";

      const title = document.createElement("p");
      title.textContent = `Video ${i}`;

      const video = document.createElement("video");
      video.src = `static/videos/V2M/${i}.mp4`;
      video.controls = true;

      container.appendChild(title);
      container.appendChild(video);
      gallery.appendChild(container);
    }

    toggleBar.addEventListener("click", () => {
      if (galleryWrapper.classList.contains("open")) {
        galleryWrapper.classList.remove("open");
      } else {
        galleryWrapper.classList.add("open");
      }
    });
