"use server";

import { BASE_URL } from "@/constant/constant";
import { HOME_PAGE_QUERY } from "./apiQueries";

interface FetchApiOptions {
  method: "GET" | "POST" | "DELETE" | "PUT";
  authToken?: string;
  body?: Record<string, unknown>;
}

export async function fetchApi(url: string, options: FetchApiOptions) {
  const { method, authToken, body } = options;
  const headers: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(authToken && { Authorisation: `Bearer ${authToken}` }),
      ...(body && { body: JSON.stringify(body) }),
    },
  };
  try {
    const response = await fetch(url, headers);
    const contentType = response.headers.get("content-type");

    if (
      contentType &&
      contentType.includes("application/json") &&
      response.ok
    ) {
      return await response.json();
    } else {
      return {
        status: response.status,
        statusText: response.statusText,
      };
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function loaderHomePage() {
  const PATH_URL = "/api/home-page";
  const url = new URL(PATH_URL, BASE_URL);

  url.search = HOME_PAGE_QUERY;

  const data = await fetchApi(url.href, {
    method: "GET",
  });

  return { ...data.data };
}
