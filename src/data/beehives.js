import { get, post, put, del } from "./api.js";

const endpoints = {
  catalog: "/data/beehives?sortBy=_createdOn%20desc",
  byId: "/data/beehives/",
  create: "/data/beehives",
};
export async function getAllBeehives() {
  return get(endpoints.catalog);
}

export async function getById(id) {
  return get(endpoints.byId + id);
}

export async function createBeehive(data) {
  return post(endpoints.create, data);
}

export async function updateBeehive(id, data) {
  return put(endpoints.byId + id, data);
}

export async function deleteBeehive(id) {
  return del(endpoints.byId + id);
}
