//const getData = async () => {
    const reviewsQuery = encodeURIComponent('*[ _type == "reviews" ]');
    const baseUrl = `https://gfl5yb3g.api.sanity.io/v1/data/query/production?query=`;
    const reviewsData = fetch(`${baseUrl}${reviewsQuery}`).then((res) => res.json());
  
    console.log(reviewsData)
//  };
