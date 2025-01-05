// src/mocks/handlers.js
import { HttpResponse, delay, http } from "msw";
import data from "./data";
import userInfos from "./userinfos";
 
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
  }),

  // 회원가입
  http.post("/api/signup", async ({request}) => {
    const newUser = await request.json()
    userInfos.users.push(newUser)
    return HttpResponse.json(newUser, {status: 201})
  }),

  // 로그인
  http.post("/api/login", async ({request}) => {
    const user = await request.json()
    const userInfo = userInfos.users.find((userInfo) => 
      userInfo.email === user.email && userInfo.password === user.password
    )
    
    if (!userInfo) {
      return new HttpResponse(
        JSON.stringify({ message: "사용자를 찾을 수 없습니다" }), 
        { status: 404 }
      )
    }
    
    return HttpResponse.json(userInfo, { status: 200 })
  }),

  // 로그아웃
  http.post("/api/logout", () => {
    return HttpResponse.json({
      status: 200,
      message: "Successfully logged out",
      data: {
        success: true
      }
    }, {status: 200})
  })

];