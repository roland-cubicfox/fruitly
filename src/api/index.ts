export async function fetchPhotos(
  client: any,
  setData: React.Dispatch<any>,
  query: string,
) {
  client.photos
    .search({query, per_page: 15})
    .then((photos: any) => {
      setData(photos.photos);
    })
    .catch((error: any) => console.log(error));
}
