// src/mocks/handlers.js
import { HttpResponse, delay, http } from "msw";
import data from "./data";
 
export const handlers = [
  // 상품목록 불러오기
  http.get("/api/product/list", () => {
    return HttpResponse.json(data.products);
  }),

  // 장바구니 불러오기
  http.get("/api/product/:id", async ({params}) => {

    const product = data.products.find((product) => product.id === params.id)
    
    if (!product) {
      return HttpResponse.json({ status: 404 })
    }
    return HttpResponse.json(product)
  }),

  // 주문목록 불러오기
  http.get("/api/order/list", () => {
    return HttpResponse.json(data.order)
  }),

  // 주문목록 추가하기
  http.post("/api/order", async ({request}) => {
    const newOrder = await request.json()
    data.order.push(newOrder)
    return HttpResponse.json(newOrder, {status: 201})
  })
];