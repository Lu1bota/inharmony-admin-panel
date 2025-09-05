// Auth Types

export type registerRole = "editor" | "admin";

export interface UserRes {
  email: string;
  role: registerRole;
  name: string;
  _id: string;
}

export interface UserBody {
  name: string;
  email: string;
  password: string;
  role: registerRole;
}

export interface loginUserBody {
  email: string;
  password: string;
}

// Collections Types

export interface CollectionImage {
  url: string;
  path: string;
}

export interface LongDescription {
  section1: string;
  section2: string;
  section3: string;
  _id: string;
}

export interface Collection {
  _id: string;
  title: string;
  image: CollectionImage[];
  collected: number;
  target: number;
  alt: string;
  peopleDonate: number;
  peopleDonate_title: string;
  desc: string;
  closedAt: string | null;
  language: string;
  collected_title: string;
  target_title: string;
  term: string | null;
  days: number | null;
  period: string | null;
  comments: string[] | null;
  quantity: number | null;
  currency: string | null;
  long_desc: LongDescription;
  status: "active" | "closed";
  type: string;
  value: string;
  importance: "urgent" | "important" | "non-urgent" | "permanent";
  createdAt: string;
  __v: number;
  translations: string;
}

export interface CollectionsResponse {
  activeCollections: Collection[];
  closedCollections: Collection[];
}

export interface PaginatedCollectionsResponse {
  status: number;
  data: CollectionsResponse;
  pagination: {
    totalItems: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
  };
}

export type Locale = "en" | "ua";

export interface GetCollectionByIdParams {
  locale: Locale;
  id: string;
}

export interface getCollectionsTagsRes {
  _id: string;
  title: string;
  language: Locale;
  value: string;
}

export interface CreateCollectionRequest {
  title: string;
  image: File;
  collected: number;
  target: number;
  alt: string;
  peopleDonate: number;
  peopleDonate_title: string;
  desc: string;
  days?: number;
  period: string;
  quantity?: number;
  status?: "active" | "closed";
  value: string;
  importance: "urgent" | "important" | "non-urgent" | "permanent";
  long_desc: string[];
}

export interface UpdateCollectionRequest {
  title?: string;
  collected?: number;
  target?: number;
  alt?: string;
  peopleDonate?: number;
  peopleDonate_title?: string;
  desc?: string;
  days?: number;
  period?: string;
  quantity?: number;
  status?: "active" | "closed";
  value?: string;
  importance?: "urgent" | "important" | "non-urgent" | "permanent";
  long_desc?: string[];
  image?: File;
}

// Reports Types

export interface getReportsRes {
  _id: string;
  month: string;
  year: string;
  url: string;
  type: string;
  language: Locale;
  status: string;
}

export interface ReportBody {
  year: string;
  month: string;
  url: string;
  language: Locale;
}

export interface ReportReq {
  id: string;
  month: string;
  year: string;
  url: string;
  language: Locale;
}

// Partners Types

export interface Image {
  url: string;
  path: string;
}

export interface PartnersRes {
  _id: string;
  logo: string;
  type: string;
  image: Image[];
  link: string;
  language: Locale;
}

export interface PartnerBody {
  image: File;
  logo: string;
  link: string;
  language: Locale;
}

// Merch Types

export type Status = "off" | "on";

export interface MerchReq {
  _id: string;
  status: Status;
  content: string;
  link: string;
  locale: Locale;
}

export interface MerchBody {
  status: Status;
  content: string;
  link: string;
}

// Teammates Types

export interface Teammates {
  icon: string;
  name: string;
  role: string;
  description: string;
  _id: string;
  image: Image[];
}

export interface TeammatesRes {
  locale: Locale;
  teammates: Teammates[];
}

export interface TeammateBody {
  name: string;
  role: string;
  description: string;
  image: File;
  locale: Locale;
}

// Stats Types

export interface StatsInfo {
  amount: number;
  description: string;
  _id: string;
}

export interface getStatsRes {
  fedPeople: StatsInfo;
  providedWithClothing: StatsInfo;
  providedWithWater: StatsInfo;
  receivedMedications: StatsInfo;
  fedAnimals: StatsInfo;
  providedWithElectricity: StatsInfo;
}

export interface upsertStatsBody {
  fedPeople: number;
  providedWithClothing: number;
  providedWithWater: number;
  receivedMedications: number;
  fedAnimals: number;
  providedWithElectricity: number;
}
