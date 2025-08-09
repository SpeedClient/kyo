const articlesData = [
  {
    "id": 1,
    "title": "Artificial Intelligence: Insights 1",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "July 02, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article1/1200/800",
    "link": "article1.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 1. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 2,
    "title": "Decentralized Finance: Insights 2",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "July 03, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article2/1200/800",
    "link": "article2.html",
    "desc": "A concise overview of Decentralized Finance: Insights 2. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 3,
    "title": "Future of Work: Insights 3",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "July 04, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article3/1200/800",
    "link": "article3.html",
    "desc": "A concise overview of Future of Work: Insights 3. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 4,
    "title": "Blockchain: Insights 4",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "July 05, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article4/1200/800",
    "link": "article4.html",
    "desc": "A concise overview of Blockchain: Insights 4. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 5,
    "title": "Cybersecurity: Insights 5",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "July 06, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article5/1200/800",
    "link": "article5.html",
    "desc": "A concise overview of Cybersecurity: Insights 5. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 6,
    "title": "Artificial Intelligence: Insights 6",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "July 07, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article6/1200/800",
    "link": "article6.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 6. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 7,
    "title": "Decentralized Finance: Insights 7",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "July 08, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article7/1200/800",
    "link": "article7.html",
    "desc": "A concise overview of Decentralized Finance: Insights 7. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 8,
    "title": "Future of Work: Insights 8",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "July 09, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article8/1200/800",
    "link": "article8.html",
    "desc": "A concise overview of Future of Work: Insights 8. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 9,
    "title": "Blockchain: Insights 9",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "July 10, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article9/1200/800",
    "link": "article9.html",
    "desc": "A concise overview of Blockchain: Insights 9. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 10,
    "title": "Cybersecurity: Insights 10",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 11, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article10/1200/800",
    "link": "article10.html",
    "desc": "A concise overview of Cybersecurity: Insights 10. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 11,
    "title": "Artificial Intelligence: Insights 11",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "July 12, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article11/1200/800",
    "link": "article11.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 11. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 12,
    "title": "Decentralized Finance: Insights 12",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "July 13, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article12/1200/800",
    "link": "article12.html",
    "desc": "A concise overview of Decentralized Finance: Insights 12. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 13,
    "title": "Future of Work: Insights 13",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "July 14, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article13/1200/800",
    "link": "article13.html",
    "desc": "A concise overview of Future of Work: Insights 13. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 14,
    "title": "Blockchain: Insights 14",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "July 15, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article14/1200/800",
    "link": "article14.html",
    "desc": "A concise overview of Blockchain: Insights 14. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 15,
    "title": "Cybersecurity: Insights 15",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "July 16, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article15/1200/800",
    "link": "article15.html",
    "desc": "A concise overview of Cybersecurity: Insights 15. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 16,
    "title": "Artificial Intelligence: Insights 16",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "July 17, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article16/1200/800",
    "link": "article16.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 16. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 17,
    "title": "Decentralized Finance: Insights 17",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "July 18, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article17/1200/800",
    "link": "article17.html",
    "desc": "A concise overview of Decentralized Finance: Insights 17. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 18,
    "title": "Future of Work: Insights 18",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "July 19, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article18/1200/800",
    "link": "article18.html",
    "desc": "A concise overview of Future of Work: Insights 18. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 19,
    "title": "Blockchain: Insights 19",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "July 20, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article19/1200/800",
    "link": "article19.html",
    "desc": "A concise overview of Blockchain: Insights 19. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 20,
    "title": "Cybersecurity: Insights 20",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "July 21, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article20/1200/800",
    "link": "article20.html",
    "desc": "A concise overview of Cybersecurity: Insights 20. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 21,
    "title": "Artificial Intelligence: Insights 21",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "July 22, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article21/1200/800",
    "link": "article21.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 21. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 22,
    "title": "Decentralized Finance: Insights 22",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "July 23, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article22/1200/800",
    "link": "article22.html",
    "desc": "A concise overview of Decentralized Finance: Insights 22. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 23,
    "title": "Future of Work: Insights 23",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "July 24, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article23/1200/800",
    "link": "article23.html",
    "desc": "A concise overview of Future of Work: Insights 23. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 24,
    "title": "Blockchain: Insights 24",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "July 25, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article24/1200/800",
    "link": "article24.html",
    "desc": "A concise overview of Blockchain: Insights 24. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 25,
    "title": "Cybersecurity: Insights 25",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "July 26, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article25/1200/800",
    "link": "article25.html",
    "desc": "A concise overview of Cybersecurity: Insights 25. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 26,
    "title": "Artificial Intelligence: Insights 26",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "July 27, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article26/1200/800",
    "link": "article26.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 26. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 27,
    "title": "Decentralized Finance: Insights 27",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "July 28, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article27/1200/800",
    "link": "article27.html",
    "desc": "A concise overview of Decentralized Finance: Insights 27. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 28,
    "title": "Future of Work: Insights 28",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "July 29, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article28/1200/800",
    "link": "article28.html",
    "desc": "A concise overview of Future of Work: Insights 28. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 29,
    "title": "Blockchain: Insights 29",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "July 30, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article29/1200/800",
    "link": "article29.html",
    "desc": "A concise overview of Blockchain: Insights 29. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 30,
    "title": "Cybersecurity: Insights 30",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 31, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article30/1200/800",
    "link": "article30.html",
    "desc": "A concise overview of Cybersecurity: Insights 30. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 31,
    "title": "Artificial Intelligence: Insights 31",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "August 01, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article31/1200/800",
    "link": "article31.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 31. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 32,
    "title": "Decentralized Finance: Insights 32",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "August 02, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article32/1200/800",
    "link": "article32.html",
    "desc": "A concise overview of Decentralized Finance: Insights 32. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 33,
    "title": "Future of Work: Insights 33",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "August 03, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article33/1200/800",
    "link": "article33.html",
    "desc": "A concise overview of Future of Work: Insights 33. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 34,
    "title": "Blockchain: Insights 34",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "August 04, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article34/1200/800",
    "link": "article34.html",
    "desc": "A concise overview of Blockchain: Insights 34. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 35,
    "title": "Cybersecurity: Insights 35",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "August 05, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article35/1200/800",
    "link": "article35.html",
    "desc": "A concise overview of Cybersecurity: Insights 35. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 36,
    "title": "Artificial Intelligence: Insights 36",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "August 06, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article36/1200/800",
    "link": "article36.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 36. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 37,
    "title": "Decentralized Finance: Insights 37",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "August 07, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article37/1200/800",
    "link": "article37.html",
    "desc": "A concise overview of Decentralized Finance: Insights 37. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 38,
    "title": "Future of Work: Insights 38",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "August 08, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article38/1200/800",
    "link": "article38.html",
    "desc": "A concise overview of Future of Work: Insights 38. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 39,
    "title": "Blockchain: Insights 39",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "August 09, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article39/1200/800",
    "link": "article39.html",
    "desc": "A concise overview of Blockchain: Insights 39. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 40,
    "title": "Cybersecurity: Insights 40",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "August 10, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article40/1200/800",
    "link": "article40.html",
    "desc": "A concise overview of Cybersecurity: Insights 40. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 41,
    "title": "Artificial Intelligence: Insights 41",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "August 11, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article41/1200/800",
    "link": "article41.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 41. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 42,
    "title": "Decentralized Finance: Insights 42",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "August 12, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article42/1200/800",
    "link": "article42.html",
    "desc": "A concise overview of Decentralized Finance: Insights 42. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 43,
    "title": "Future of Work: Insights 43",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "August 13, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article43/1200/800",
    "link": "article43.html",
    "desc": "A concise overview of Future of Work: Insights 43. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 44,
    "title": "Blockchain: Insights 44",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "August 14, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article44/1200/800",
    "link": "article44.html",
    "desc": "A concise overview of Blockchain: Insights 44. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 45,
    "title": "Cybersecurity: Insights 45",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "August 15, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article45/1200/800",
    "link": "article45.html",
    "desc": "A concise overview of Cybersecurity: Insights 45. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 46,
    "title": "Artificial Intelligence: Insights 46",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "August 16, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article46/1200/800",
    "link": "article46.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 46. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 47,
    "title": "Decentralized Finance: Insights 47",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "August 17, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article47/1200/800",
    "link": "article47.html",
    "desc": "A concise overview of Decentralized Finance: Insights 47. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 48,
    "title": "Future of Work: Insights 48",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "August 18, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article48/1200/800",
    "link": "article48.html",
    "desc": "A concise overview of Future of Work: Insights 48. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 49,
    "title": "Blockchain: Insights 49",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "August 19, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article49/1200/800",
    "link": "article49.html",
    "desc": "A concise overview of Blockchain: Insights 49. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 50,
    "title": "Cybersecurity: Insights 50",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "August 20, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article50/1200/800",
    "link": "article50.html",
    "desc": "A concise overview of Cybersecurity: Insights 50. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 51,
    "title": "Artificial Intelligence: Insights 51",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "August 21, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article51/1200/800",
    "link": "article51.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 51. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 52,
    "title": "Decentralized Finance: Insights 52",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "August 22, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article52/1200/800",
    "link": "article52.html",
    "desc": "A concise overview of Decentralized Finance: Insights 52. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 53,
    "title": "Future of Work: Insights 53",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "August 23, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article53/1200/800",
    "link": "article53.html",
    "desc": "A concise overview of Future of Work: Insights 53. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 54,
    "title": "Blockchain: Insights 54",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "August 24, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article54/1200/800",
    "link": "article54.html",
    "desc": "A concise overview of Blockchain: Insights 54. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 55,
    "title": "Cybersecurity: Insights 55",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "August 25, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article55/1200/800",
    "link": "article55.html",
    "desc": "A concise overview of Cybersecurity: Insights 55. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 56,
    "title": "Artificial Intelligence: Insights 56",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "August 26, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article56/1200/800",
    "link": "article56.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 56. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 57,
    "title": "Decentralized Finance: Insights 57",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "August 27, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article57/1200/800",
    "link": "article57.html",
    "desc": "A concise overview of Decentralized Finance: Insights 57. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 58,
    "title": "Future of Work: Insights 58",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "August 28, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article58/1200/800",
    "link": "article58.html",
    "desc": "A concise overview of Future of Work: Insights 58. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 59,
    "title": "Blockchain: Insights 59",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "August 29, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article59/1200/800",
    "link": "article59.html",
    "desc": "A concise overview of Blockchain: Insights 59. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 60,
    "title": "Cybersecurity: Insights 60",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "August 30, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article60/1200/800",
    "link": "article60.html",
    "desc": "A concise overview of Cybersecurity: Insights 60. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 61,
    "title": "Artificial Intelligence: Insights 61",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "August 31, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article61/1200/800",
    "link": "article61.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 61. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 62,
    "title": "Decentralized Finance: Insights 62",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "September 01, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article62/1200/800",
    "link": "article62.html",
    "desc": "A concise overview of Decentralized Finance: Insights 62. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 63,
    "title": "Future of Work: Insights 63",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "September 02, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article63/1200/800",
    "link": "article63.html",
    "desc": "A concise overview of Future of Work: Insights 63. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 64,
    "title": "Blockchain: Insights 64",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "September 03, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article64/1200/800",
    "link": "article64.html",
    "desc": "A concise overview of Blockchain: Insights 64. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 65,
    "title": "Cybersecurity: Insights 65",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "September 04, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article65/1200/800",
    "link": "article65.html",
    "desc": "A concise overview of Cybersecurity: Insights 65. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 66,
    "title": "Artificial Intelligence: Insights 66",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "September 05, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article66/1200/800",
    "link": "article66.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 66. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 67,
    "title": "Decentralized Finance: Insights 67",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "September 06, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article67/1200/800",
    "link": "article67.html",
    "desc": "A concise overview of Decentralized Finance: Insights 67. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 68,
    "title": "Future of Work: Insights 68",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "September 07, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article68/1200/800",
    "link": "article68.html",
    "desc": "A concise overview of Future of Work: Insights 68. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 69,
    "title": "Blockchain: Insights 69",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "September 08, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article69/1200/800",
    "link": "article69.html",
    "desc": "A concise overview of Blockchain: Insights 69. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 70,
    "title": "Cybersecurity: Insights 70",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "September 09, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article70/1200/800",
    "link": "article70.html",
    "desc": "A concise overview of Cybersecurity: Insights 70. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 71,
    "title": "Artificial Intelligence: Insights 71",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "September 10, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article71/1200/800",
    "link": "article71.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 71. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 72,
    "title": "Decentralized Finance: Insights 72",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "September 11, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article72/1200/800",
    "link": "article72.html",
    "desc": "A concise overview of Decentralized Finance: Insights 72. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 73,
    "title": "Future of Work: Insights 73",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "September 12, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article73/1200/800",
    "link": "article73.html",
    "desc": "A concise overview of Future of Work: Insights 73. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 74,
    "title": "Blockchain: Insights 74",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "September 13, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article74/1200/800",
    "link": "article74.html",
    "desc": "A concise overview of Blockchain: Insights 74. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 75,
    "title": "Cybersecurity: Insights 75",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "September 14, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article75/1200/800",
    "link": "article75.html",
    "desc": "A concise overview of Cybersecurity: Insights 75. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 76,
    "title": "Artificial Intelligence: Insights 76",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "September 15, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article76/1200/800",
    "link": "article76.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 76. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 77,
    "title": "Decentralized Finance: Insights 77",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "September 16, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article77/1200/800",
    "link": "article77.html",
    "desc": "A concise overview of Decentralized Finance: Insights 77. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 78,
    "title": "Future of Work: Insights 78",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "September 17, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article78/1200/800",
    "link": "article78.html",
    "desc": "A concise overview of Future of Work: Insights 78. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 79,
    "title": "Blockchain: Insights 79",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "September 18, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article79/1200/800",
    "link": "article79.html",
    "desc": "A concise overview of Blockchain: Insights 79. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 80,
    "title": "Cybersecurity: Insights 80",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "September 19, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article80/1200/800",
    "link": "article80.html",
    "desc": "A concise overview of Cybersecurity: Insights 80. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 81,
    "title": "Artificial Intelligence: Insights 81",
    "category": "Artificial Intelligence",
    "author": "Author 1",
    "date": "September 20, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article81/1200/800",
    "link": "article81.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 81. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 82,
    "title": "Decentralized Finance: Insights 82",
    "category": "Decentralized Finance",
    "author": "Author 2",
    "date": "September 21, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article82/1200/800",
    "link": "article82.html",
    "desc": "A concise overview of Decentralized Finance: Insights 82. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 83,
    "title": "Future of Work: Insights 83",
    "category": "Future of Work",
    "author": "Author 3",
    "date": "September 22, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article83/1200/800",
    "link": "article83.html",
    "desc": "A concise overview of Future of Work: Insights 83. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 84,
    "title": "Blockchain: Insights 84",
    "category": "Blockchain",
    "author": "Author 4",
    "date": "September 23, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article84/1200/800",
    "link": "article84.html",
    "desc": "A concise overview of Blockchain: Insights 84. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 85,
    "title": "Cybersecurity: Insights 85",
    "category": "Cybersecurity",
    "author": "Author 5",
    "date": "September 24, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article85/1200/800",
    "link": "article85.html",
    "desc": "A concise overview of Cybersecurity: Insights 85. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 86,
    "title": "Artificial Intelligence: Insights 86",
    "category": "Artificial Intelligence",
    "author": "Author 6",
    "date": "September 25, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article86/1200/800",
    "link": "article86.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 86. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 87,
    "title": "Decentralized Finance: Insights 87",
    "category": "Decentralized Finance",
    "author": "Author 7",
    "date": "September 26, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article87/1200/800",
    "link": "article87.html",
    "desc": "A concise overview of Decentralized Finance: Insights 87. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 88,
    "title": "Future of Work: Insights 88",
    "category": "Future of Work",
    "author": "Author 8",
    "date": "September 27, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article88/1200/800",
    "link": "article88.html",
    "desc": "A concise overview of Future of Work: Insights 88. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 89,
    "title": "Blockchain: Insights 89",
    "category": "Blockchain",
    "author": "Author 9",
    "date": "September 28, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article89/1200/800",
    "link": "article89.html",
    "desc": "A concise overview of Blockchain: Insights 89. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 90,
    "title": "Cybersecurity: Insights 90",
    "category": "Cybersecurity",
    "author": "Author 10",
    "date": "July 01, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article90/1200/800",
    "link": "article90.html",
    "desc": "A concise overview of Cybersecurity: Insights 90. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 91,
    "title": "Artificial Intelligence: Insights 91",
    "category": "Artificial Intelligence",
    "author": "Author 11",
    "date": "July 02, 2025",
    "read_time": "4 min read",
    "image": "https://picsum.photos/seed/article91/1200/800",
    "link": "article91.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 91. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 92,
    "title": "Decentralized Finance: Insights 92",
    "category": "Decentralized Finance",
    "author": "Author 12",
    "date": "July 03, 2025",
    "read_time": "5 min read",
    "image": "https://picsum.photos/seed/article92/1200/800",
    "link": "article92.html",
    "desc": "A concise overview of Decentralized Finance: Insights 92. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 93,
    "title": "Future of Work: Insights 93",
    "category": "Future of Work",
    "author": "Author 13",
    "date": "July 04, 2025",
    "read_time": "6 min read",
    "image": "https://picsum.photos/seed/article93/1200/800",
    "link": "article93.html",
    "desc": "A concise overview of Future of Work: Insights 93. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 94,
    "title": "Blockchain: Insights 94",
    "category": "Blockchain",
    "author": "Author 14",
    "date": "July 05, 2025",
    "read_time": "7 min read",
    "image": "https://picsum.photos/seed/article94/1200/800",
    "link": "article94.html",
    "desc": "A concise overview of Blockchain: Insights 94. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 95,
    "title": "Cybersecurity: Insights 95",
    "category": "Cybersecurity",
    "author": "Author 15",
    "date": "July 06, 2025",
    "read_time": "8 min read",
    "image": "https://picsum.photos/seed/article95/1200/800",
    "link": "article95.html",
    "desc": "A concise overview of Cybersecurity: Insights 95. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 96,
    "title": "Artificial Intelligence: Insights 96",
    "category": "Artificial Intelligence",
    "author": "Author 16",
    "date": "July 07, 2025",
    "read_time": "9 min read",
    "image": "https://picsum.photos/seed/article96/1200/800",
    "link": "article96.html",
    "desc": "A concise overview of Artificial Intelligence: Insights 96. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 97,
    "title": "Decentralized Finance: Insights 97",
    "category": "Decentralized Finance",
    "author": "Author 17",
    "date": "July 08, 2025",
    "read_time": "10 min read",
    "image": "https://picsum.photos/seed/article97/1200/800",
    "link": "article97.html",
    "desc": "A concise overview of Decentralized Finance: Insights 97. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 98,
    "title": "Future of Work: Insights 98",
    "category": "Future of Work",
    "author": "Author 18",
    "date": "July 09, 2025",
    "read_time": "11 min read",
    "image": "https://picsum.photos/seed/article98/1200/800",
    "link": "article98.html",
    "desc": "A concise overview of Future of Work: Insights 98. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 99,
    "title": "Blockchain: Insights 99",
    "category": "Blockchain",
    "author": "Author 19",
    "date": "July 10, 2025",
    "read_time": "12 min read",
    "image": "https://picsum.photos/seed/article99/1200/800",
    "link": "article99.html",
    "desc": "A concise overview of Blockchain: Insights 99. This article explores key ideas, trends, and practical takeaways."
  },
  {
    "id": 100,
    "title": "Cybersecurity: Insights 100",
    "category": "Cybersecurity",
    "author": "Author 20",
    "date": "July 11, 2025",
    "read_time": "3 min read",
    "image": "https://picsum.photos/seed/article100/1200/800",
    "link": "article100.html",
    "desc": "A concise overview of Cybersecurity: Insights 100. This article explores key ideas, trends, and practical takeaways."
  }
];

const searchInput = document.getElementById("searchInput");
const categoryButtons = document.querySelectorAll(".category-btn");
let currentCategory = "All";

function createCard(article) {
  const a = document.createElement("a");
  a.className = "card card-link block";
  a.href = article.link;
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
