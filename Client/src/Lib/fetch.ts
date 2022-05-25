
// fetch data from localhose:6000 
export const fetch = async (url: string, options: RequestInit = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error(response.statusText);
    (error as any).response = response;
    throw error;
  }
  return response.json();
}