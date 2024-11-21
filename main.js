document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("comment-form");
    const commentsSection = document.getElementById("comments-section");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      // Mengambil nilai dari input form
      const username = document.getElementById("username").value;
      const comment = document.getElementById("comment").value;
  
      // Membuat elemen komentar baru
      const commentDiv = document.createElement("div");
      commentDiv.classList.add("comment");
      commentDiv.innerHTML = `
        <strong>${username}</strong>
        <p>${comment}</p>
        <button class="like-button">Like (<span class="like-count">0</span>)</button>
      `;
  
      // Menambahkan event listener untuk tombol Like
      commentDiv.querySelector(".like-button").addEventListener("click", (e) => {
        const likeCount = e.target.querySelector(".like-count");
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
      });
  
      // Menambahkan komentar baru ke komentar section
      commentsSection.appendChild(commentDiv);
  
      // Mengosongkan form
      form.reset();
    });
  });
  