import { env } from "@/env.mjs"

import { getResponseMessage } from "./utils"

const handleApiResponse = async (response: Response) => {
  try {
    const data = await response.json()
    // console.log(data)

    if (!data.errors) {
      return {
        data: data,
        message: "Operation successful",
        success: true,
      }
    }

    const errorMessage = await getResponseMessage(data)
    // console.log(errorMessage)
    return {
      message: errorMessage,
      success: false,
    }
  } catch (err) {
    // console.error(err)
    return {
      message: "Something went wrong",
      success: false,
    }
  }
}

export const sendDirectusApiRequest = async (
  endpoint: string,
  method: string,
  bodyData: any,
  useAuthHeader: boolean = false,
  cache: boolean = false
) => {
  try {
    let headers: Record<string, string> = {
      "Content-Type": "application/json",
    }

    const allowedForRequest =
      (endpoint === "/users" && method === "POST") ||
      (endpoint.startsWith("/items/tenants?filter[email]") && method === "GET")

    if (useAuthHeader) {
      const token = allowedForRequest
        ? env.DIRECTUS_USER_CREATOR_TOKEN
        : bodyData?.access_token // maybe we should just always keep the token in the local storage and use it from there

      headers["Authorization"] = `Bearer ${token}`
    }

    if (!cache) {
      const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
        method: method,
        headers: headers,
        body: method === "GET" ? undefined : JSON.stringify(bodyData),
        cache: "no-store",
      })
      return handleApiResponse(response)
    }

    const response = await fetch(`${env.DIRECTUS_URL}${endpoint}`, {
      method: method,
      headers: headers,
      body: method === "GET" ? undefined : JSON.stringify(bodyData),
    })
    return handleApiResponse(response)
  } catch (err) {
    return {
      message: "Something went wrong",
      success: false,
    }
  }
}

export const getItemFromCollection = async (
  collection: string,
  id: number, token: string
) => {
    const endpoint = `/items/${collection}/${id}`
  let headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  headers["Authorization"] = `Bearer ${token}`;
  const response = await fetch(`${env.NEXT_PUBLIC_DIRECTUS_URL}${endpoint}`, {
    method: 'GET',
    headers,
    cache: "no-store",
  });
  const parsedResponse = await handleApiResponse(response);
  const { data } = parsedResponse?.data;
  return data;
}

export const getTenant = async (email: string) => {
  const getTenantResponse = await sendDirectusApiRequest(
      `/items/tenants?filter[email][_eq]=${email}`,
      "GET",
      null,
      true
  )
  const { data: { data: tenantResponse } } = getTenantResponse

  return tenantResponse[0]
}