const loadPosts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayPost(data);
    });
};

// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }

// ----------- array of object --------

const displayPost = (posts) => {
  // 1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // 2. create a element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
          <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `;

    // 3. add to the container
    postContainer.append(postCard);
  });
};

loadPosts(); // by default is will show the post.
