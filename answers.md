# SkillNG Backend Assessment --- Answer Key

1.  Client sends HTTP request → server processes → DB query → server
    sends response.

2.  `{ "id": 1, "name": "Alex" }`

3.  `res.send()` already sends response before setting status.

4.  `data`

5.  20 (string coerced to number in multiplication)

6.  `"100" + 0.1` causes string concatenation → convert to number.

7.  `Number` or `parseInt`

8.  Primitive stored by value; objects stored by reference.

9.  API validation layer.

10. `Client error`

11. Assignment operator used instead of comparison.

12. `===`

13. Logical evaluation stops once result determined.

14. `if(user.role==="admin" || user.id===resource.ownerId)`

15. 1 2 3

16. `i` never increments → infinite loop.

17. `user`

18. 8

19. `username` undefined → use `name`

20. Regex validation.

21. `["id","name"]`

22. Objects don't support push; use array.

23. `role`

24. `error`

25. `data` scoped inside try.

26. `res.status(500).send()`

27. Writes text to file.

28. Missing callback or sync variant.

29. `"utf8"`

30. Environment to execute code.

31. Current process ID.

32. A C B

33. fetch returns Promise.

34. `await`

35. Security risk.

36. Port environment variable.

37. `dotenv`

38. PUT replaces resource, PATCH partially updates.

39. Deletes user id 10.

40. `get`

41. `/health`

42. `json`

43. `use`

44. `next()`

45. `body`

46. `json`

47. Create Read Update Delete

48. Partial update.

49. 204 responses must not include body.
