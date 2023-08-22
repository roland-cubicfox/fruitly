import Config from 'react-native-config';

export async function fetchPhotos(
  client: any,
  setData: React.Dispatch<any>,
  query: string,
) {
  client.photos
    .search({ query, per_page: 15 })
    .then((photos: any) => {
      setData(photos.photos);
    })
    .catch((error: any) => console.log(error));
}

export const fetchGifs = async (
  setData: React.Dispatch<any>,
  query: string,
) => {
  try {
    const response = await fetch(
      `https://g.tenor.com/v1/search?key=LIVDSRZULELA&q=${query}&limit=15`,
    );
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.log(error);
  }
};
export const fetchTrendingGifs = async (setData: React.Dispatch<any>) => {
  try {
    const response = await fetch(
      `https://g.tenor.com/v1/trending?key=LIVDSRZULELA&media_filter=minimal&limit=50`,
    );
    const data = await response.json();
    setData(data);
  } catch (error) {
    console.log(error);
  }
};
