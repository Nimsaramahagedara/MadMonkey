/*const query = encodeURIComponent('*[ _type == "reviews" ]');
const baseUrl = `https://gfl5yb3g.api.sanity.io/v1/data/query/production?query=`;

fetch(`${baseUrl}${query}`)
  .then((res) => res.json())
  .then(({ result }) => {
    console.log(result);

    const carouselInner = document.querySelector(".carousel-inner");

    carouselInner.innerHTML = "<p>Hello</p>"

    if (result.length > 0) {
      result.forEach((review) => {
        console.log(review?.name);

        const carouselItem = document.createElement("div");
        const proImg = document.createElement("div");
        const revDesc = document.createElement("p");
        const revName = document.createElement("p");
        const revPost = document.createElement("p");

        carouselItem.className = "carousel-item";
        proImg.className = "pro-img";
        revDesc.className = "rev-desc";
        revName.className = "rev-name";
        revPost.className = "rev-post";

        proImg.innerHTML = `<img src="Resources/Mad Monkey/Reviews/DarrenFill.webp" alt="" />`;
        revDesc.textContent = review?.review;
        revName.textContent = review?.name;
        revPost.textContent = review?.designation;

        carouselItem.appendChild(revDesc);
        carouselItem.appendChild(revName);
        carouselItem.appendChild(revPost);

        console.log(carouselItem);

        carouselInner.appendChild(carouselItem);
      });
    }

    carouselInner.firstChild.className = "carousel-item active";
  })
  .catch((err) => console.error(err));*/
