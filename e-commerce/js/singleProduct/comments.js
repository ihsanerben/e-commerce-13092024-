const dontResetThePage = () => {
  const stars = document.querySelector(".comment-form .stars");
  stars.addEventListener("click", function (e) {
    e.preventDefault();
  });
};

const makeActive = () => {
  const star = document.querySelectorAll(".comment-form .stars .star");
  star.forEach((element) => {
    element.addEventListener("click", function () {
      star.forEach((x) => x.classList.remove("active"));
      element.classList.add("active");
    });
  });
};

function submitComment() {
  let allComments = [];
  const nameDOM = document.getElementById("name");
  const textDOM = document.getElementById("comment");
  const submitDOM = document.querySelector(
    ".comment-form .submit-button input"
  );
  const commentListDom = document.querySelector(".comment-list");

  let commentText = "";
  let commentName = "";

  textDOM.addEventListener("input", function (e) {
    commentText = e.target.value;
  });

  nameDOM.addEventListener("input", function (e) {
    commentName = e.target.value;
  });

  submitDOM.addEventListener("click", function (e) {
    let findActiveStar = document.querySelector(".stars .active");
    let findActiveStarLength = document.querySelectorAll(".stars .active i");
    let addStar = 5 - findActiveStarLength.length;
    let totalStar = findActiveStar.innerHTML;
    for (let i = 0; i < addStar; i++) {
      totalStar += `
      <i class="bi bi-star"></i>
      `;
    }

    e.preventDefault();
    allComments.push({
      name: commentName,
      text: commentText,
      star: totalStar,
    });
    let result = "";
    allComments.forEach((element) => {
      result += `
                  <li class="comment-item">
                      <div class="avatar-img">
                        <img src="img/avatars/avatar1.jpg" alt="">
                      </div>
                      <div class="text">
                        <ul class="stars">
                          ${element.star}
                        </ul>
                        <div class="meta">
                          <strong>${element.name}</strong>
                          -
                          <time>April 23, 2022</time>
                        </div>
                        <div class="description">
                          <p>
                            ${element.text}
                          </p>
                        </div>
                      </div>
                   </li>
      `;
    });
    commentListDom.innerHTML = result;
    nameDOM.value = "";
    textDOM.value = "";
  });
}

export function commentFunc() {
  dontResetThePage();
  makeActive();
  submitComment();
}
