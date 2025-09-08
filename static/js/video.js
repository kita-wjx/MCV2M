function createVideoSection(galleryId, count, prefix="", layout="videos-only") {
  const gallery = document.querySelector(`#${galleryId} .gallery`);

  for (let i = 1; i <= count; i++) {
    if (layout === "videos-only") {
      const video = document.createElement("video");
      video.src = `${prefix}${i}.mp4`;
      video.controls = true;
      gallery.appendChild(video);
    } else if (layout === "image-video") {
      const img = document.createElement("img");
      img.src = `${prefix}${i}.jpg`;

      const video = document.createElement("video");
      video.src = `${prefix}${i}.mp4`;
      video.controls = true;

      gallery.appendChild(img);
      gallery.appendChild(video);
    }
  }
}

document.querySelectorAll(".toggle-bar").forEach(bar => {
  bar.addEventListener("click", () => {
    const targetId = bar.getAttribute("data-target");
    const galleryWrapper = document.getElementById(targetId);

    if (galleryWrapper.classList.contains("open")) {
      galleryWrapper.classList.remove("open");
    } else {
      galleryWrapper.classList.add("open");
    }
  });
});

// 初始化不同类型
createVideoSection("gallery1", 40, "static/videos/V2M/", "videos-only");
createVideoSection("gallery2", 10, "static/videos/MCV2M/", "image-video");
