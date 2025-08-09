
const articlesData = [
  {
    "id": 1,
    "title": "Artificial Intelligence: Insights 1",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "July 02, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox1/1200/800",
    "link": "articles/article1.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 1. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 2,
    "title": "Decentralized Finance: Insights 2",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "July 03, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox2/1200/800",
    "link": "articles/article2.html",
    "desc": "A concise overview of Decentralized Finance: Insights 2. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 3,
    "title": "Future of Work: Insights 3",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "July 04, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox3/1200/800",
    "link": "articles/article3.html",
    "desc": "A concise overview of Future of Work: Insights 3. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 4,
    "title": "Blockchain: Insights 4",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "July 05, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox4/1200/800",
    "link": "articles/article4.html",
    "desc": "A concise overview of Blockchain: Insights 4. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 5,
    "title": "Cybersecurity: Insights 5",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "July 06, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox5/1200/800",
    "link": "articles/article5.html",
    "desc": "A concise overview of Cybersecurity: Insights 5. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 6,
    "title": "Artificial Intelligence: Insights 6",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "July 07, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox6/1200/800",
    "link": "articles/article6.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 6. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 7,
    "title": "Decentralized Finance: Insights 7",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "July 08, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox7/1200/800",
    "link": "articles/article7.html",
    "desc": "A concise overview of Decentralized Finance: Insights 7. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 8,
    "title": "Future of Work: Insights 8",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "July 09, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox8/1200/800",
    "link": "articles/article8.html",
    "desc": "A concise overview of Future of Work: Insights 8. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 9,
    "title": "Blockchain: Insights 9",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "July 10, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox9/1200/800",
    "link": "articles/article9.html",
    "desc": "A concise overview of Blockchain: Insights 9. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 10,
    "title": "Cybersecurity: Insights 10",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 11, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox10/1200/800",
    "link": "articles/article10.html",
    "desc": "A concise overview of Cybersecurity: Insights 10. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 11,
    "title": "Artificial Intelligence: Insights 11",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "July 12, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox11/1200/800",
    "link": "articles/article11.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 11. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 12,
    "title": "Decentralized Finance: Insights 12",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "July 13, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox12/1200/800",
    "link": "articles/article12.html",
    "desc": "A concise overview of Decentralized Finance: Insights 12. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 13,
    "title": "Future of Work: Insights 13",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "July 14, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox13/1200/800",
    "link": "articles/article13.html",
    "desc": "A concise overview of Future of Work: Insights 13. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 14,
    "title": "Blockchain: Insights 14",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "July 15, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox14/1200/800",
    "link": "articles/article14.html",
    "desc": "A concise overview of Blockchain: Insights 14. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 15,
    "title": "Cybersecurity: Insights 15",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "July 16, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox15/1200/800",
    "link": "articles/article15.html",
    "desc": "A concise overview of Cybersecurity: Insights 15. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 16,
    "title": "Artificial Intelligence: Insights 16",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "July 17, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox16/1200/800",
    "link": "articles/article16.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 16. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 17,
    "title": "Decentralized Finance: Insights 17",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "July 18, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox17/1200/800",
    "link": "articles/article17.html",
    "desc": "A concise overview of Decentralized Finance: Insights 17. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 18,
    "title": "Future of Work: Insights 18",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "July 19, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox18/1200/800",
    "link": "articles/article18.html",
    "desc": "A concise overview of Future of Work: Insights 18. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 19,
    "title": "Blockchain: Insights 19",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "July 20, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox19/1200/800",
    "link": "articles/article19.html",
    "desc": "A concise overview of Blockchain: Insights 19. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 20,
    "title": "Cybersecurity: Insights 20",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "July 21, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox20/1200/800",
    "link": "articles/article20.html",
    "desc": "A concise overview of Cybersecurity: Insights 20. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 21,
    "title": "Artificial Intelligence: Insights 21",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "July 22, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox21/1200/800",
    "link": "articles/article21.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 21. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 22,
    "title": "Decentralized Finance: Insights 22",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "July 23, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox22/1200/800",
    "link": "articles/article22.html",
    "desc": "A concise overview of Decentralized Finance: Insights 22. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 23,
    "title": "Future of Work: Insights 23",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "July 24, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox23/1200/800",
    "link": "articles/article23.html",
    "desc": "A concise overview of Future of Work: Insights 23. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 24,
    "title": "Blockchain: Insights 24",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "July 25, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox24/1200/800",
    "link": "articles/article24.html",
    "desc": "A concise overview of Blockchain: Insights 24. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 25,
    "title": "Cybersecurity: Insights 25",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "July 26, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox25/1200/800",
    "link": "articles/article25.html",
    "desc": "A concise overview of Cybersecurity: Insights 25. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 26,
    "title": "Artificial Intelligence: Insights 26",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "July 27, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox26/1200/800",
    "link": "articles/article26.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 26. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 27,
    "title": "Decentralized Finance: Insights 27",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "July 28, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox27/1200/800",
    "link": "articles/article27.html",
    "desc": "A concise overview of Decentralized Finance: Insights 27. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 28,
    "title": "Future of Work: Insights 28",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "July 29, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox28/1200/800",
    "link": "articles/article28.html",
    "desc": "A concise overview of Future of Work: Insights 28. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 29,
    "title": "Blockchain: Insights 29",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "July 30, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox29/1200/800",
    "link": "articles/article29.html",
    "desc": "A concise overview of Blockchain: Insights 29. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 30,
    "title": "Cybersecurity: Insights 30",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 31, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox30/1200/800",
    "link": "articles/article30.html",
    "desc": "A concise overview of Cybersecurity: Insights 30. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 31,
    "title": "Artificial Intelligence: Insights 31",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "August 01, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox31/1200/800",
    "link": "articles/article31.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 31. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 32,
    "title": "Decentralized Finance: Insights 32",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "August 02, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox32/1200/800",
    "link": "articles/article32.html",
    "desc": "A concise overview of Decentralized Finance: Insights 32. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 33,
    "title": "Future of Work: Insights 33",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "August 03, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox33/1200/800",
    "link": "articles/article33.html",
    "desc": "A concise overview of Future of Work: Insights 33. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 34,
    "title": "Blockchain: Insights 34",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "August 04, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox34/1200/800",
    "link": "articles/article34.html",
    "desc": "A concise overview of Blockchain: Insights 34. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 35,
    "title": "Cybersecurity: Insights 35",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "August 05, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox35/1200/800",
    "link": "articles/article35.html",
    "desc": "A concise overview of Cybersecurity: Insights 35. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 36,
    "title": "Artificial Intelligence: Insights 36",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "August 06, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox36/1200/800",
    "link": "articles/article36.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 36. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 37,
    "title": "Decentralized Finance: Insights 37",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "August 07, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox37/1200/800",
    "link": "articles/article37.html",
    "desc": "A concise overview of Decentralized Finance: Insights 37. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 38,
    "title": "Future of Work: Insights 38",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "August 08, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox38/1200/800",
    "link": "articles/article38.html",
    "desc": "A concise overview of Future of Work: Insights 38. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 39,
    "title": "Blockchain: Insights 39",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "August 09, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox39/1200/800",
    "link": "articles/article39.html",
    "desc": "A concise overview of Blockchain: Insights 39. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 40,
    "title": "Cybersecurity: Insights 40",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "August 10, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox40/1200/800",
    "link": "articles/article40.html",
    "desc": "A concise overview of Cybersecurity: Insights 40. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 41,
    "title": "Artificial Intelligence: Insights 41",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "August 11, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox41/1200/800",
    "link": "articles/article41.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 41. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 42,
    "title": "Decentralized Finance: Insights 42",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "August 12, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox42/1200/800",
    "link": "articles/article42.html",
    "desc": "A concise overview of Decentralized Finance: Insights 42. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 43,
    "title": "Future of Work: Insights 43",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "August 13, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox43/1200/800",
    "link": "articles/article43.html",
    "desc": "A concise overview of Future of Work: Insights 43. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 44,
    "title": "Blockchain: Insights 44",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "August 14, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox44/1200/800",
    "link": "articles/article44.html",
    "desc": "A concise overview of Blockchain: Insights 44. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 45,
    "title": "Cybersecurity: Insights 45",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "August 15, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox45/1200/800",
    "link": "articles/article45.html",
    "desc": "A concise overview of Cybersecurity: Insights 45. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 46,
    "title": "Artificial Intelligence: Insights 46",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "August 16, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox46/1200/800",
    "link": "articles/article46.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 46. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 47,
    "title": "Decentralized Finance: Insights 47",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "August 17, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox47/1200/800",
    "link": "articles/article47.html",
    "desc": "A concise overview of Decentralized Finance: Insights 47. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 48,
    "title": "Future of Work: Insights 48",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "August 18, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox48/1200/800",
    "link": "articles/article48.html",
    "desc": "A concise overview of Future of Work: Insights 48. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 49,
    "title": "Blockchain: Insights 49",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "August 19, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox49/1200/800",
    "link": "articles/article49.html",
    "desc": "A concise overview of Blockchain: Insights 49. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 50,
    "title": "Cybersecurity: Insights 50",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "August 20, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox50/1200/800",
    "link": "articles/article50.html",
    "desc": "A concise overview of Cybersecurity: Insights 50. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 51,
    "title": "Artificial Intelligence: Insights 51",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "August 21, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox51/1200/800",
    "link": "articles/article51.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 51. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 52,
    "title": "Decentralized Finance: Insights 52",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "August 22, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox52/1200/800",
    "link": "articles/article52.html",
    "desc": "A concise overview of Decentralized Finance: Insights 52. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 53,
    "title": "Future of Work: Insights 53",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "August 23, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox53/1200/800",
    "link": "articles/article53.html",
    "desc": "A concise overview of Future of Work: Insights 53. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 54,
    "title": "Blockchain: Insights 54",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "August 24, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox54/1200/800",
    "link": "articles/article54.html",
    "desc": "A concise overview of Blockchain: Insights 54. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 55,
    "title": "Cybersecurity: Insights 55",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "August 25, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox55/1200/800",
    "link": "articles/article55.html",
    "desc": "A concise overview of Cybersecurity: Insights 55. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 56,
    "title": "Artificial Intelligence: Insights 56",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "August 26, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox56/1200/800",
    "link": "articles/article56.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 56. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 57,
    "title": "Decentralized Finance: Insights 57",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "August 27, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox57/1200/800",
    "link": "articles/article57.html",
    "desc": "A concise overview of Decentralized Finance: Insights 57. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 58,
    "title": "Future of Work: Insights 58",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "August 28, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox58/1200/800",
    "link": "articles/article58.html",
    "desc": "A concise overview of Future of Work: Insights 58. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 59,
    "title": "Blockchain: Insights 59",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "August 29, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox59/1200/800",
    "link": "articles/article59.html",
    "desc": "A concise overview of Blockchain: Insights 59. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 60,
    "title": "Cybersecurity: Insights 60",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "August 30, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox60/1200/800",
    "link": "articles/article60.html",
    "desc": "A concise overview of Cybersecurity: Insights 60. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 61,
    "title": "Artificial Intelligence: Insights 61",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "August 31, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox61/1200/800",
    "link": "articles/article61.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 61. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 62,
    "title": "Decentralized Finance: Insights 62",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "September 01, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox62/1200/800",
    "link": "articles/article62.html",
    "desc": "A concise overview of Decentralized Finance: Insights 62. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 63,
    "title": "Future of Work: Insights 63",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "September 02, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox63/1200/800",
    "link": "articles/article63.html",
    "desc": "A concise overview of Future of Work: Insights 63. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 64,
    "title": "Blockchain: Insights 64",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "September 03, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox64/1200/800",
    "link": "articles/article64.html",
    "desc": "A concise overview of Blockchain: Insights 64. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 65,
    "title": "Cybersecurity: Insights 65",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "September 04, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox65/1200/800",
    "link": "articles/article65.html",
    "desc": "A concise overview of Cybersecurity: Insights 65. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 66,
    "title": "Artificial Intelligence: Insights 66",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "September 05, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox66/1200/800",
    "link": "articles/article66.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 66. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 67,
    "title": "Decentralized Finance: Insights 67",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "September 06, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox67/1200/800",
    "link": "articles/article67.html",
    "desc": "A concise overview of Decentralized Finance: Insights 67. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 68,
    "title": "Future of Work: Insights 68",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "September 07, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox68/1200/800",
    "link": "articles/article68.html",
    "desc": "A concise overview of Future of Work: Insights 68. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 69,
    "title": "Blockchain: Insights 69",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "September 08, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox69/1200/800",
    "link": "articles/article69.html",
    "desc": "A concise overview of Blockchain: Insights 69. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 70,
    "title": "Cybersecurity: Insights 70",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "September 09, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox70/1200/800",
    "link": "articles/article70.html",
    "desc": "A concise overview of Cybersecurity: Insights 70. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 71,
    "title": "Artificial Intelligence: Insights 71",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "September 10, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox71/1200/800",
    "link": "articles/article71.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 71. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 72,
    "title": "Decentralized Finance: Insights 72",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "September 11, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox72/1200/800",
    "link": "articles/article72.html",
    "desc": "A concise overview of Decentralized Finance: Insights 72. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 73,
    "title": "Future of Work: Insights 73",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "September 12, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox73/1200/800",
    "link": "articles/article73.html",
    "desc": "A concise overview of Future of Work: Insights 73. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 74,
    "title": "Blockchain: Insights 74",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "September 13, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox74/1200/800",
    "link": "articles/article74.html",
    "desc": "A concise overview of Blockchain: Insights 74. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 75,
    "title": "Cybersecurity: Insights 75",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "September 14, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox75/1200/800",
    "link": "articles/article75.html",
    "desc": "A concise overview of Cybersecurity: Insights 75. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 76,
    "title": "Artificial Intelligence: Insights 76",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "September 15, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox76/1200/800",
    "link": "articles/article76.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 76. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 77,
    "title": "Decentralized Finance: Insights 77",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "September 16, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox77/1200/800",
    "link": "articles/article77.html",
    "desc": "A concise overview of Decentralized Finance: Insights 77. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 78,
    "title": "Future of Work: Insights 78",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "September 17, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox78/1200/800",
    "link": "articles/article78.html",
    "desc": "A concise overview of Future of Work: Insights 78. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 79,
    "title": "Blockchain: Insights 79",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "September 18, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox79/1200/800",
    "link": "articles/article79.html",
    "desc": "A concise overview of Blockchain: Insights 79. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 80,
    "title": "Cybersecurity: Insights 80",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "September 19, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox80/1200/800",
    "link": "articles/article80.html",
    "desc": "A concise overview of Cybersecurity: Insights 80. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 81,
    "title": "Artificial Intelligence: Insights 81",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "September 20, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox81/1200/800",
    "link": "articles/article81.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 81. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 82,
    "title": "Decentralized Finance: Insights 82",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "September 21, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox82/1200/800",
    "link": "articles/article82.html",
    "desc": "A concise overview of Decentralized Finance: Insights 82. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 83,
    "title": "Future of Work: Insights 83",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "September 22, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox83/1200/800",
    "link": "articles/article83.html",
    "desc": "A concise overview of Future of Work: Insights 83. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 84,
    "title": "Blockchain: Insights 84",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "September 23, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox84/1200/800",
    "link": "articles/article84.html",
    "desc": "A concise overview of Blockchain: Insights 84. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 85,
    "title": "Cybersecurity: Insights 85",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "September 24, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox85/1200/800",
    "link": "articles/article85.html",
    "desc": "A concise overview of Cybersecurity: Insights 85. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 86,
    "title": "Artificial Intelligence: Insights 86",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "September 25, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox86/1200/800",
    "link": "articles/article86.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 86. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 87,
    "title": "Decentralized Finance: Insights 87",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "September 26, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox87/1200/800",
    "link": "articles/article87.html",
    "desc": "A concise overview of Decentralized Finance: Insights 87. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 88,
    "title": "Future of Work: Insights 88",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "September 27, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox88/1200/800",
    "link": "articles/article88.html",
    "desc": "A concise overview of Future of Work: Insights 88. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 89,
    "title": "Blockchain: Insights 89",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "September 28, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox89/1200/800",
    "link": "articles/article89.html",
    "desc": "A concise overview of Blockchain: Insights 89. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 90,
    "title": "Cybersecurity: Insights 90",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 01, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox90/1200/800",
    "link": "articles/article90.html",
    "desc": "A concise overview of Cybersecurity: Insights 90. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 91,
    "title": "Artificial Intelligence: Insights 91",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "July 02, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/ploutox91/1200/800",
    "link": "articles/article91.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 91. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 92,
    "title": "Decentralized Finance: Insights 92",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "July 03, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/ploutox92/1200/800",
    "link": "articles/article92.html",
    "desc": "A concise overview of Decentralized Finance: Insights 92. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 93,
    "title": "Future of Work: Insights 93",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "July 04, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/ploutox93/1200/800",
    "link": "articles/article93.html",
    "desc": "A concise overview of Future of Work: Insights 93. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 94,
    "title": "Blockchain: Insights 94",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "July 05, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/ploutox94/1200/800",
    "link": "articles/article94.html",
    "desc": "A concise overview of Blockchain: Insights 94. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 95,
    "title": "Cybersecurity: Insights 95",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "July 06, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/ploutox95/1200/800",
    "link": "articles/article95.html",
    "desc": "A concise overview of Cybersecurity: Insights 95. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 96,
    "title": "Artificial Intelligence: Insights 96",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "July 07, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/ploutox96/1200/800",
    "link": "articles/article96.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 96. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 97,
    "title": "Decentralized Finance: Insights 97",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "July 08, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/ploutox97/1200/800",
    "link": "articles/article97.html",
    "desc": "A concise overview of Decentralized Finance: Insights 97. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 98,
    "title": "Future of Work: Insights 98",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "July 09, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/ploutox98/1200/800",
    "link": "articles/article98.html",
    "desc": "A concise overview of Future of Work: Insights 98. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 99,
    "title": "Blockchain: Insights 99",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "July 10, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/ploutox99/1200/800",
    "link": "articles/article99.html",
    "desc": "A concise overview of Blockchain: Insights 99. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 100,
    "title": "Cybersecurity: Insights 100",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "July 11, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/ploutox100/1200/800",
    "link": "articles/article100.html",
    "desc": "A concise overview of Cybersecurity: Insights 100. This article explores key ideas, trends, and practical takeaways."
  }
];

const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "All";



function createCard(article) {
  const a = document.createElement("a");
  a.className = "card card-link block";
  a.href = article.link; // already 'articles/articleX.html'
  a.setAttribute("data-category", article.category);

  a.innerHTML = `
    <div class="relative">
      <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover">
      <div class="p-4">
        <span class="tag-pill">${article.category}</span>
        <h3 class="text-xl font-semibold mt-3">${article.title}</h3>
        <p class="text-gray-400 mt-2">${article.desc}</p>
        <div class="flex justify-between items-center text-[#8f8f8f] text-xs mt-4">
          <span>📅 ${article.date}</span>
          <span>⏱️ ${article.read_time}</span>
        </div>
      </div>
    </div>
  `;
  return a;
}

function renderArticles() {
  const container = document.getElementById("articles");
  const q = (searchInput.value || "").trim().toLowerCase();
  container.innerHTML = "";
  const filtered = articlesData.filter(a => (currentCategory === "All" || a.category === currentCategory) &&
                                            (a.title.toLowerCase().includes(q) || a.desc.toLowerCase().includes(q)));
  filtered.forEach(a => container.appendChild(createCard(a)));
}

searchInput.addEventListener("input", renderArticles);

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderArticles();
  });
});

// initial render
document.addEventListener("DOMContentLoaded", renderArticles);
