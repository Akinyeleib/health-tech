# SkillNG Backend Engineering Applied Assessment (Sessions 1--24)

## Module 1 --- Programming Fundamentals

### Session 1 --- Introduction to Backend Engineering

1.  Explain the request--response lifecycle in a backend web
    application.
2.  Code Interpretation:

``` javascript
function handleRequest(req, res) {
  const user = { id: 1, name: "Alex" };
  res.json(user);
}
```

What HTTP response body will the client receive?

3.  Debugging:

``` javascript
app.get("/users", (req, res) => {
  const users = getUsers()
  res.send(users)
  res.status(200)
})
```

Why is this implementation incorrect?

4.  Complete:

``` javascript
function success(data) {
  return {
    success: true,
    ______: data
  }
}
```

5.  Scenario: Your API endpoint takes 5 seconds to respond. List three
    possible backend causes.

------------------------------------------------------------------------

### Session 2 --- Variables and Data Types

6.  What is printed?

``` javascript
let value = "10"
let result = value * 2
console.log(result)
```

7.  Debug the following:

``` javascript
const price = "100"
const tax = 0.1
const total = price + tax
```

8.  Convert query parameter to number:

``` javascript
const page = ______(req.query.page)
```

9.  Explain primitive vs reference values.

10. Scenario: API receives `"age": "25"` but DB expects integer. Where
    should conversion happen?

------------------------------------------------------------------------

### Session 3 --- Control Flow

11. Output?

``` javascript
let status = 401
if (status === 200) {
  console.log("Success")
} else if (status >= 400) {
  console.log("Client error")
}
```

12. Debug:

``` javascript
if (user.role = "admin") {
  grantAccess()
}
```

13. Complete:

``` javascript
function isAdmin(user){
  return user.role ______ "admin"
}
```

14. Explain short‑circuit evaluation.

15. Design logic allowing access if user is admin OR resource owner.

------------------------------------------------------------------------

### Session 4 --- Loops

16. Output?

``` javascript
for (let i = 1; i <= 3; i++) {
  console.log(i)
}
```

17. Debug:

``` javascript
let i = 0
while(i < users.length){
  console.log(users[i])
}
```

18. Complete:

``` javascript
for (const user of users) {
  console.log(________)
}
```

19. Difference between for / forEach / map.

20. Scenario: Processing 1M records --- why can naive loops crash
    servers?

------------------------------------------------------------------------

### Session 5 --- Functions

21. Output?

``` javascript
function multiply(a,b=2){
  return a*b
}
console.log(multiply(4))
```

22. Debug:

``` javascript
function greet(name){
  return "Hello " + username
}
```

23. Complete:

``` javascript
function isEmail(email){
  return ______
}
```

24. Pure vs impure functions.

25. Why separate business logic from route handlers?

------------------------------------------------------------------------

### Session 6 --- Data Structures

26. Output?

``` javascript
const user = { id:1, name:"Sam" }
console.log(Object.keys(user))
```

27. Debug:

``` javascript
const users = {}
users.push({name:"Alex"})
```

28. Complete:

``` javascript
user.______ = "admin"
```

29. Compare Array / Object / Map / Set.

30. When is Map better than Object?

------------------------------------------------------------------------

### Session 7 --- Error Handling

31. Output?

``` javascript
try{
 JSON.parse("{bad}")
}catch(e){
 console.log("error")
}
```

32. Debug:

``` javascript
try{
 const data = JSON.parse(body)
}
console.log(data)
```

33. Complete catch block returning HTTP 500.

34. Operational vs programmer errors.

35. Why should APIs avoid returning stack traces?

------------------------------------------------------------------------

### Session 8 --- CLI Project

36. What does this do?

``` javascript
fs.writeFileSync("data.txt","hello")
```

37. Debug:

``` javascript
const data = fs.readFile("users.json")
```

38. Complete:

``` javascript
const users = JSON.parse(fs.readFileSync("users.json","_____"))
```

39. What is persistence?

40. Scenario: Two CLI processes write to same file simultaneously.

------------------------------------------------------------------------

### Session 9 --- Server Runtime

41. What does a runtime environment provide?
42. Output?

``` javascript
console.log(process.pid)
```

43. Name two ways to debug memory leaks.
44. Complete:

``` javascript
console.log(process.____)
```

45. Why is Node poor for CPU-heavy workloads?

------------------------------------------------------------------------

### Session 10 --- API Testing

46. What is response validation?
47. Interpret: `GET /users?page=2`
48. API returns 500 only in production --- causes?
49. Complete:

``` javascript
fetch("/users",{ method:"_____" })
```

50. Why use Postman tests?

------------------------------------------------------------------------

### Session 11 --- Async Programming

51. Output order?

``` javascript
console.log("A")
setTimeout(()=>console.log("B"),0)
console.log("C")
```

52. Debug:

``` javascript
const users = fetchUsers()
console.log(users)
```

53. Complete:

``` javascript
const users = ______ fetchUsers()
```

54. Concurrency vs parallelism.

55. Why do sequential DB queries slow APIs?

------------------------------------------------------------------------

### Session 12 --- Environment Variables

56. Why not store secrets in Git?
57. Output?

``` javascript
console.log(process.env.PORT)
```

58. App crashes due to missing env variable.
59. Complete:

``` javascript
require("_____").config()
```

60. Explain configuration per environment.

------------------------------------------------------------------------

### Session 13 --- Package Management

61. What is semantic versioning?
62. Interpret: `^2.3.1`
63. Dependency conflict debugging approach?
64. Install dev dependency: `npm install jest ______`
65. Why commit package-lock.json?

------------------------------------------------------------------------

### Session 14 --- HTTP Fundamentals

66. PUT vs PATCH.
67. Interpret: `DELETE /users/10`
68. Why might API return 404 unexpectedly?
69. Complete Express route:

``` javascript
app.____("/users", handler)
```

70. What are idempotent methods?

------------------------------------------------------------------------

### Session 15 --- Logging

71. What is structured logging?
72. Why better?

``` javascript
logger.info({event:"login",userId:10})
```

73. Logs missing in production --- causes?
74. Complete:

``` javascript
logger.error({message:"db error", ______: err.stack})
```

75. Why are logs critical in distributed systems?

------------------------------------------------------------------------

### Session 16 --- Web Server

76. What endpoint exists?

``` javascript
app.get("/health",(req,res)=>res.send("ok"))
```

77. Explain `Cannot set headers after they are sent`
78. Complete:

``` javascript
res.____({status:"ok"})
```

79. What is routing?
80. Design health check endpoint.

------------------------------------------------------------------------

### Session 17 --- Web Frameworks

81. Why use frameworks?
82. Middleware purpose?
83. Missing next() bug?
84. Complete:

``` javascript
app.____(authMiddleware)
```

85. Where should authentication middleware run?

------------------------------------------------------------------------

### Session 18 --- Resource Modeling

86. Explain resource modeling.
87. `GET /books` expected response?
88. Why `/getBooks` poor REST design?
89. Complete:

``` javascript
app.get("/books/:____", handler)
```

90. Design endpoints for orders resource.

------------------------------------------------------------------------

### Session 19 --- Middleware Pipelines

91. What is cross-cutting concern?
92. Execution order explanation.
93. Problem with auth middleware after route.
94. Complete:

``` javascript
function auth(req,res,next){
 if(!req.user){
   return res.status(401).send()
 }
 ______
}
```

95. Design rate limiting middleware.

------------------------------------------------------------------------

### Session 20 --- Input Validation

96. Validation vs sanitization.
97. Purpose:

``` javascript
if(password.length < 8){ throw Error("weak") }
```

98. SQL injection cause?
99. Complete:

``` javascript
schema.validate(req.____)
```

100. Where should validation occur?

------------------------------------------------------------------------

### Session 21 --- Error Handling

101. Centralized error handling benefits.
102. What happens?

``` javascript
next(new Error("Invalid input"))
```

103. API hangs after thrown error --- why?
104. Complete:

``` javascript
app.use((err,req,res,next)=>{
 res.status(500).____({error:err.message})
})
```

105. Design standard API error format.

------------------------------------------------------------------------

### Session 22 --- API Documentation

106. Purpose of OpenAPI.
107. Meaning: `POST /users`
108. Docs outdated --- cause?
109. Add summary field in OpenAPI route.
110. Why automate documentation?

------------------------------------------------------------------------

### Session 23 --- Testing

111. Unit vs integration vs e2e.
112. What does this test?

``` javascript
expect(add(2,3)).toBe(5)
```

113. Tests fail in CI but pass locally.
114. Complete:

``` javascript
expect(result).____(expected)
```

115. Design tests for login API.

------------------------------------------------------------------------

### Session 24 --- CRUD API

116. What is CRUD?
117. Meaning: `PATCH /users/5`
118. Debug:

``` javascript
app.delete("/users/:id",async(req,res)=>{
 db.deleteUser(req.params.id)
 res.status(204).json({message:"deleted"})
})
```

119. Complete pagination parameters in DB query.
120. Design production-ready Users API.
