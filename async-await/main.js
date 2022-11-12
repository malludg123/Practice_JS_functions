const ids = [1, 2. 3, 4, 5, 6, 7, 8, 9, 10];

const initApp = async () => {
  getPostSerialized(ids);
}

document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) =>{
  return await (await fetch (`https://jsonplaceholder.typicode.com/posts/${id}`)).json();
}

const getPostSerialized = async (ids) => {
  await ids.reduce(async (acc, id) => {
    await acc;
    const post = await getPost(id);
    console.log(post);
  }, Promise.resolve());
  console.log("I'll wait on you")
}

const getPostConcurrently = async (ids) => {
  const posts = await promise.allSettled(ids.map(async (id) => getPost(id)));
  console.log(posts)
  console.log("I'll wait on you")
}