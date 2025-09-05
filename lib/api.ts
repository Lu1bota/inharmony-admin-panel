import {
  Collection,
  CreateCollectionRequest,
  GetCollectionByIdParams,
  getCollectionsTagsRes,
  getReportsRes,
  getStatsRes,
  Locale,
  loginUserBody,
  MerchBody,
  MerchReq,
  PaginatedCollectionsResponse,
  PartnerBody,
  PartnersRes,
  ReportReq,
  TeammateBody,
  Teammates,
  TeammatesRes,
  UpdateCollectionRequest,
  upsertStatsBody,
  UserBody,
  UserRes,
} from "@/types";
import axios from "axios";

const api = axios.create({
  baseURL: "https://inharmony-v1.h.goit.study/api",
  withCredentials: true,
});

// Auth

export async function loginUser(payload: loginUserBody) {
  try {
    const res = await api.post<{ message: string }>("/auth/login", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function logoutUser() {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    throw error;
  }
}

export async function registerUser(payload: UserBody) {
  try {
    const res = await api.post<UserRes>("/auth/register", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getUsers() {
  try {
    const res = await api.get<UserRes[]>("/auth/users");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getUserCurrent() {
  try {
    const res = await api.get<UserRes>("/auth/users/current");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateUserById(id: string, payload: UserBody) {
  try {
    const res = await api.patch<UserRes>(`/auth/users/${id}`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteUser(id: string) {
  try {
    await api.delete(`/auth/users/${id}`);
  } catch (error) {
    throw error;
  }
}

// Collections

export async function getCollections(
  locale: string,
  page: number = 1,
  perPage: number = 6
) {
  try {
    const res = await api.get<PaginatedCollectionsResponse>(
      `/collections/${locale}`,
      {
        params: {
          page,
          perPage,
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getCollectionById({
  locale,
  id,
}: GetCollectionByIdParams) {
  try {
    const res = await api.get<Collection>(`/collections/${locale}/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function getCollectionsTags() {
  try {
    const res = await api.get<getCollectionsTagsRes[]>("/collections/tags");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createCollection(
  locale: Locale,
  payload: CreateCollectionRequest
) {
  try {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (key === "long_desc" && Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`long_desc[${index}]`, item);
        });
      } else if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    const res = await api.post<Collection>(`/collections/${locale}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateCollection(
  locale: Locale,
  id: string,
  payload: UpdateCollectionRequest
) {
  try {
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (key === "long_desc" && Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`long_desc[${index}]`, item);
        });
      } else if (value !== undefined && value !== null) {
        formData.append(key, value);
      }
    });

    const res = await api.patch<Collection>(
      `/collections/${locale}/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCollection(locale: Locale, id: string) {
  try {
    await api.delete(`/collections/${locale}/${id}`);
  } catch (error) {
    throw error;
  }
}

// Reports

export async function getReports(locale: Locale) {
  try {
    const res = await api.get<getReportsRes[]>("/reports", { params: locale });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePerort(id: string, payload: ReportBody) {
  try {
    const res = await api.patch<ReportReq>(`/reports/${id}`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createReport(payload: ReportBody) {
  try {
    const res = await api.post<ReportReq>("/reports", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteReport(id: string) {
  try {
    await api.delete(`reports/${id}`);
  } catch (error) {
    throw error;
  }
}

// Partners

export async function getPartners() {
  try {
    const res = await api.get<PartnersRes[]>("/partners");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updatePartner(id: string, payload: PartnerBody) {
  try {
    const res = await api.patch(`/partners/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createPartner(payload: PartnerBody) {
  try {
    const res = await api.post("/partners", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deletePartner(id: string) {
  try {
    await api.delete(`/partners/${id}`);
  } catch (error) {
    throw error;
  }
}

// Merch

export async function getMerch() {
  try {
    const res = await api.get<MerchReq[]>("/merch");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateMerch(locale: Locale, payload: MerchBody) {
  try {
    const res = await api.patch<MerchReq>(`/merch/${locale}`, payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}

// Teammates

export async function getTeammates(locale: Locale) {
  try {
    const res = await api.get<TeammatesRes[]>("/teammates", { params: locale });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function updateTeammate(
  locale: Locale,
  id: string,
  payload: TeammateBody
) {
  try {
    const res = await api.patch(`/teammates/${id}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function createTeammate(payload: TeammateBody) {
  try {
    const res = await api.post<Teammates>("/teammates", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function deleteTeammate(locale: Locale, id: string) {
  try {
    await api.delete(`/teammates/${id}`, { params: locale });
  } catch (error) {
    throw error;
  }
}

// Stats

export async function getStats() {
  try {
    const res = await api.get<getStatsRes>("/stats");
    return res.data;
  } catch (error) {
    throw error;
  }
}

export async function upsertStats(payload: upsertStatsBody) {
  try {
    const res = await api.put("/stats", payload);
    return res.data;
  } catch (error) {
    throw error;
  }
}
