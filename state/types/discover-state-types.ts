export type DiscoverInformation = {
  id: string,
  name: string,
  raca: string,
  photos: Array<string>,
  rejects: boolean,
};

export type DiscoverInformationArray = {
  data: Array<DiscoverInformation>,
};