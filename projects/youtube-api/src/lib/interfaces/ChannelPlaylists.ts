export interface PlaylistsResponse {
  kind:          string;
  etag:          string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo:      PageInfo;
  items:         Item[];
}

export interface PageInfo {
  totalResults:   number;
  resultsPerPage: number;
}

export interface Item {
  kind:           string;
  etag:           string;
  id:             string;
  snippet:        Snippet;
  contentDetails: ContentDetails;
}

export interface Snippet {
  publishedAt:  string;
  channelId:    string;
  title:        string;
  description:  string;
  thumbnails:   Thumbnails;
  channelTitle: string;
  localized:    Localized;
}

export interface Thumbnails {
  default:     Default;
  medium:      Medium;
  high:        High;
  standard?:   Standard;
  maxres?:     Maxres;
}

export interface Default {
  url:      string;
  width:    number;
  height:   number;
}

export interface Medium {
  url:     string;
  width:   number;
  height:  number;
}

export interface High {
  url:      string;
  width:    number;
  height:   number;
}

export interface Standard {
  url:      string;
  width:    number;
  height:   number;
}

export interface Maxres {
  url:     string;
  width:   number;
  height:  number;
}

export interface Localized {
  title:       string;
  description: string;
}

export interface ContentDetails {
  itemCount: number;
}
