import prisma from "./database";

(async () => {
  const students =  await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    },
    orderBy: {
      class: "desc"
    }
  })
  console.log(students);
})();

(async () => {
  const students =  await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true
    }, where: {
      jobId: null
    },
    orderBy: {
      class: "desc"
    }
  })
  console.log(students);
})();


// (async () => {
//   await prisma.student.groupBy({
//     by: ["class"],
//     _count: {
//       id: true
//     }
//   })
// })();