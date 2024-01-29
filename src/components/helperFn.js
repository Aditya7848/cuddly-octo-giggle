// {"status":"success","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWYxMjUxZDI2ZjJiOWI3Mjg3OGNhZCIsImlhdCI6MTcwNjI5MjM5MywiZXhwIjoxNzM3ODI4MzkzfQ.yIG-oTJPXsroArlJD9r0wtZA3ptioEp_wVY3_VD3Wuw","data":{"_id":"65af1251d26f2b9b72878cad","name":"aditya","email":"sannidhanamaditya@ymail.com","password":"$2a$10$ts7NzQKSui8Ftp1RNA2fdOrw2Ln.kVZKwUzooXBeZFmakzeEl2vi.","profileImage":null,"skills":[],"address":[],"paymentDetails":[],"workExprience":[],"education":[],"createdAt":"2024-01-23T01:11:45.431Z","__v":0}}//

export function computeWeek(val) {
  let res = new Date(val).getDay();
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log("helper", weeks[res]);
  return weeks[res];
}

export async function getData(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: { projectID: "40oh8jnbm661" },
  });
  const data = await res.json();
  console.log("helper data = ", data);
  return data;
}

export async function getDataAuth(url) {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      projectID: "40oh8jnbm661",
      Authorization:
        "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWYxMjUxZDI2ZjJiOWI3Mjg3OGNhZCIsImlhdCI6MTcwNjI5MjM5MywiZXhwIjoxNzM3ODI4MzkzfQ.yIG-oTJPXsroArlJD9r0wtZA3ptioEp_wVY3_VD3Wuw",
    },
  });
  const data = await res.json();
  console.log("helper auth data = ", data);
  return data;
}
