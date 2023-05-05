import createApiClient from "./api";

class CoffeeService {
  constructor(baseUrl = "/api/coffee") {
    this.api = createApiClient(baseUrl);
  }
  async getAllCoffees() {
    return (await this.api.get("/")).data;
  }
  async getCoffeeById(id) {
    return (await this.api.get(`${id}`)).data;
  }
  async createCoffee(data) {
    return (await this.api.post("/", data)).data;
  }
  async updateCoffee(id, data) {
    return (await this.api.put(`/${id}`, data)).data;
  }
  async delete(id) {
    return (await this.api.delete(`/${id}`)).data;
  }
  async deleteAll() {
    return (await this.api.delete("/")).data;
  }
}

export default new CoffeeService();
